import { FocusService } from '../focus/focus.service';
import { Defer } from '../infrastructure/defer';
import { Log } from '../infrastructure/log';
import { buildFromModel } from '../pipe/pipe.build';
import { Fastdom } from '../services/fastdom';
import { guid } from '../services/guid';
import { Scheduler } from '../services/scheduler';
import { isString, noop } from '../utility/kit';

function buildSettings(...args) {
	if (args.length) {
		if (isString(args[0])) {
			return {
				source: args[0],
				changes: args[1] || {},
				pipe: args[2],
				why: 'refresh'
			};
		}

		return Object.assign({
			source: 'invalidate',
			changes: {},
			pipe: null,
			why: 'refresh'
		}, args[0])
	}

	return {
		source: 'invalidate',
		changes: {},
		pipe: null,
		why: 'refresh'
	};
}

export class GridService {
	constructor(model) {
		this.model = model;
		this.scheduler = new Scheduler();
	}

	invalidate(...args /*source = 'invalidate', changes = {}, pipe = null*/) {
		const { source, changes, pipe, why } = buildSettings(...args);
		const { scheduler, model } = this;
		const { scene } = model;

		const runPipe = buildFromModel(model);
		const cancelBusy = why === 'refresh' ? this.busy() : noop;

		const nextTask = () => {
			cancelBusy();

			if (!scheduler.next()) {
				scene({ status: 'pull' }, {
					source,
					behavior: 'core'
				});
			}
		};

		const defer = new Defer();
		const task = () => {
			Log.info('grid', `start task ${source}`);
			scene({ status: 'start' }, {
				source,
				behavior: 'core'
			});

			model.head().cache.clear();
			model.body().cache.clear();
			model.foot().cache.clear();

			return Fastdom.invoke(() => runPipe(source, changes, pipe || model.data().pipe))
				.then(() => {
					Log.info('grid', `finish task ${source}`);

					nextTask();
					defer.resolve();
				})
				.catch(ex => {
					Log.error('grid', ex);

					nextTask();
					defer.reject();
				});
		};

		Log.info('grid', `add task ${source}`);
		scheduler.add(task);

		return defer.promise;
	}

	busy() {
		const id = guid();
		const { progress } = this.model;
		const queue = progress().queue.concat([id]);
		progress({ queue });

		return () => {
			const queue = Array.from(progress().queue);
			const index = queue.indexOf(id);
			if (index >= 0) {
				queue.splice(index, 1);
				progress({ queue });
			}
		};
	}

	focus(rowIndex, columnIndex) {
		const focus = new FocusService(this.model);
		focus.activate(rowIndex, columnIndex);
	}
}
