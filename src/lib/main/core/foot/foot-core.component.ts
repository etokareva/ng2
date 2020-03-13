import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ViewCoreService } from '../view/view-core.service';
import { ColumnView } from 'ng2-qgrid/core/scene/view/column.view';
import { TableCoreService } from '../table/table-core.service';

@Component({
	// tslint:disable-next-line
	selector: 'tfoot[q-grid-core-foot]',
	templateUrl: './foot-core.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FootCoreComponent {
	constructor(
		public $view: ViewCoreService,
		public $table: TableCoreService
	) {
	}

	columnId(index: number, item: ColumnView) {
		return item.model.key;
	}

	rowId(index: number) {
		return index;
	}
}
