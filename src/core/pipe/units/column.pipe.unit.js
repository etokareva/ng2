import { Pipe } from '../pipe';
import { Scene } from '../../scene/scene';
import { Guard } from '../../infrastructure/guard';

export const columnPipeUnit = [
	(_, context, next) => {
		const { view } = context.model;
		const { rows, pivot, nodes } = view;
		next({ rows, pivot, nodes });
	},
	Pipe.column,
	(memo, context, next) => {
		Guard.hasProperty(memo, 'columns');

		const { model } = context;
		const scene = new Scene(model);
		const columnLine = scene.columnLine(memo.columns);
		const tag = {
			source: context.source || 'column.pipe.unit',
			behavior: 'core'
		};

		const columns = columnLine.map(c => c.model);
		model.view({ columns }, tag);

		const column = {
			rows: scene.columnRows(memo.columns),
			area: scene.columnArea(memo.columns),
			line: columnLine
		};

		context.model.scene({ column }, tag);

		next(memo);
	}
];

columnPipeUnit.why = 'redraw';