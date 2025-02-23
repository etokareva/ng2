import { FormatService } from '../format/format.service';
import { Log } from '../infrastructure/log';
import { ColumnView } from '../scene/view/column.view';
import { parseFactory } from '../services/convert';
import { getValue } from '../services/value';
import { TemplatePath } from '../template/template.path';
import { DataColumnModel } from './data.column.model';

TemplatePath.register('datetime-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('datetime-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

export class DateTimeColumnModel extends DataColumnModel {
	constructor() {
		super('datetime');

		this.format = 'MM/dd/yyyy h:mm a';
		this.dateFormat = 'MM/dd/yyyy';
		this.timeFormat = 'h:mm a';
		this.parse = parseFactory('datetime');

		this.label = function (row) {
			const value = getValue(row, this);
			try {
				const date = this.parse(value);
				return FormatService.date(date, this.format);
			} catch (ex) {
				Log.error('datetime.column', ex);
				return value;
			}
		};
	}
}

export class DateTimeColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? DateTimeColumn.assign(model) : new DateTimeColumnModel();
	}
}