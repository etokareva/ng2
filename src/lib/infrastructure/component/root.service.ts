import { Injectable, OnDestroy, SkipSelf, Optional } from '@angular/core';
import { Guard } from 'ng2-qgrid/core/infrastructure/guard';
import { AppError } from 'ng2-qgrid/core/infrastructure/error';
import { CommandManager } from 'ng2-qgrid/core/command/command.manager';
import { Model } from 'ng2-qgrid/core/infrastructure/model';
import { Table } from 'ng2-qgrid/core/dom/table';
import { isUndefined } from 'ng2-qgrid/core/utility/kit';
import { Bag } from 'ng2-qgrid/core/dom/bag';
import { ModelProxy } from 'ng2-qgrid/core/infrastructure/model.proxy';

@Injectable()
export class RootService implements OnDestroy {
	private modelProxy: ModelProxy = null;

	markup: { [key: string]: HTMLElement } = {};
	bag = {
		head: new Bag(),
		body: new Bag(),
		foot: new Bag()
	};

	table: Table = null;
	commandManager: CommandManager = null;

	constructor(@SkipSelf() @Optional() parent: RootService) {
		if(parent) {
			this.model = parent.model;
			this.markup = parent.markup;
			this.bag = parent.bag;
			this.table = parent.table;
			this.commandManager = parent.commandManager;
		}
	}

	get isReady() {
		return !!this.modelProxy;
	}

	get model() {
		Guard.notNull(this.modelProxy, 'model');

		return this.modelProxy.subject;
	}

	set model(value: Model) {
		if (this.modelProxy) {
			if (this.modelProxy.target !== value) {
				this.modelProxy.dispose();
				this.modelProxy = new ModelProxy(value);
				return;
			}
		}

		if (value) {
			this.modelProxy = new ModelProxy(value);
		}
	}

	ngOnDestroy() {
		if (this.modelProxy) {
			this.modelProxy.dispose();
			this.modelProxy = null;
		}
	}
}
