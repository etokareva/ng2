import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, Route } from '@angular/router';
import { MatButtonModule, MatSelectModule } from '@angular/material';

import { GridModule } from 'ng2-qgrid';
import { ThemeModule } from 'ng2-qgrid/theme/material';

import { ExampleActionBarBasicComponent } from './action-bar-basic/example-action-bar-basic.component';
import { ExampleActionBarTemplateComponent } from './action-bar-template/example-action-bar-template.component';
import { ExampleAggregateColumnBasicComponent } from './aggregate-column-basic/example-aggregate-column-basic.component';
import { ExampleColumnArrayBasicComponent } from './column-array-basic/example-column-array-basic.component';
import { ExampleColumnAutocompletetBasicComponent } from './column-autocomplete-basic/example-column-autocomplete-basic.component';
import { ExampleColumnBoolBasicComponent } from './column-bool-basic/example-column-bool-basic.component';
import { ExampleColumnCurrencyBasicComponent } from './column-currency-basic/example-column-currency-basic.component';
import { ExampleColumnDateBasicComponent } from './column-date-basic/example-column-date-basic.component';
import { ExampleColumnDropdownBasicComponent } from './column-dropdown-basic/example-column-dropdown-basic.component';
import { ExampleColumnEmailBasicComponent } from './column-email-basic/example-column-email-basic.component';
import { ExampleColumnFileBasicComponent } from './column-file-basic/example-column-file-basic.component';
import { ExampleColumnIdBasicComponent } from './column-id-basic/example-column-id-basic.component';
import { ExampleColumnImageBasicComponent } from './column-image-basic/example-column-image-basic.component';
import { ExampleColumnNumberBasicComponent } from './column-number-basic/example-column-number-basic.component';
import { ExampleColumnPasswordBasicComponent } from './column-password-basic/example-column-password-basic.component';
import { ExampleColumnReferenceBasicComponent } from './column-reference-basic/example-column-reference-basic.component';
import { ExampleColumnRowIndicatorBasicComponent } from './column-row-indicator-basic/example-column-row-indicator-basic.component';
import { ExampleColumnRowNumberBasicComponent } from './column-row-number-basic/example-column-row-number-basic.component';
import { ExampleColumnRowOptionsBasicComponent } from './column-row-options-basic/example-column-row-options-basic.component';
import { ExampleColumnTextBasicComponent } from './column-text-basic/example-column-text-basic.component';
import { ExampleColumnTimeBasicComponent } from './column-time-basic/example-column-time-basic.component';
import { ExampleColumnUrlBasicComponent } from './column-url-basic/example-column-url-basic.component';
import { ExampleDefineColumnAsyncComponent } from './define-column-async/example-define-column-async.component';
import { ExampleDefineColumnBasicComponent } from './define-column-basic/example-define-column-basic.component';
import { ExampleDefineColumnHybridComponent } from './define-column-hybrid/example-define-column-hybrid.component';
import { ExampleDestroyGridBasicComponent } from './destroy-grid-basic/example-destroy-grid-basic.component';
import { ExampleDestroyGridModelComponent } from './destroy-grid-model/example-destroy-grid-model.component';
import { ExampleDetailsRowAllComponent } from './details-row-all/example-details-row-all.component';
import { ExampleDetailsRowBasicComponent } from './details-row-basic/example-details-row-basic.component';
import { ExampleDetailsRowGridComponent } from './details-row-grid/example-details-row-grid.component';
import { ExampleDragColumnBasicComponent } from './drag-column-basic/example-drag-column-basic.component';
import { ExampleDragRowBasicComponent } from './drag-row-basic/example-drag-row-basic.component';
import { ExampleDragRowNodeComponent } from './drag-row-node/example-drag-row-node.component';
import { ExampleEditCellBasicComponent } from './edit-cell-basic/example-edit-cell-basic.component';
import { ExampleEditCellBatchComponent } from './edit-cell-batch/example-edit-cell-batch.component';
import { ExampleFilterColumnFetchComponent } from './filter-column-fetch/example-filter-column-fetch.component';
import { ExampleFilterConditionBasicComponent } from './filter-condition-basic/example-filter-condition-basic.component';
import { ExampleFilterRowBasicComponent } from './filter-row-basic/example-filter-row-basic.component';
import { ExampleFloatingRowsBasicComponent } from './floating-rows-basic/example-floating-rows-basic.component';
import { ExampleFocusCellAutoComponent } from './focus-cell-auto/example-focus-cell-auto.component';
import { ExampleFocusCellBasicComponent } from './focus-cell-basic/example-focus-cell-basic.component';
import { ExampleGenerateColumnCohortComponent } from './generate-column-cohort/example-generate-column-cohort.component';
import { ExampleGenerateColumnDeepComponent } from './generate-column-deep/example-generate-column-deep.component';
import { ExampleGenerateColumnShallowComponent } from './generate-column-shallow/example-generate-column-shallow.component';
import { ExampleGroupColumnBasicComponent } from './group-column-basic/example-group-column-basic.component';
import { ExampleGroupRowAggregationComponent } from './group-row-aggregation/example-group-row-aggregation.component';
import { ExampleGroupRowBasicComponent } from './group-row-basic/example-group-row-basic.component';
import { ExampleGroupRowEditComponent } from './group-row-edit/example-group-row-edit.component';
import { ExampleGroupRowFlatComponent } from './group-row-flat/example-group-row-flat.component';
import { ExampleGroupRowRowspanComponent } from './group-row-rowspan/example-group-row-rowspan.component';
import { ExampleGroupRowSubheadComponent } from './group-row-subhead/example-group-row-subhead.component';
import { ExampleGroupRowSummaryComponent } from './group-row-summary/example-group-row-summary.component';
import { ExampleIndexColumnBasicComponent } from './index-column-basic/example-index-column-basic.component';
import { ExampleIndexColumnHybridComponent } from './index-column-hybrid/example-index-column-hybrid.component';
import { ExampleIndexColumnModelComponent } from './index-column-model/example-index-column-model.component';
import { ExampleInteractionModeDetachedComponent } from './interaction-mode-detached/example-interaction-mode-detached.component';
import { ExampleInteractionModeReadonlyComponent } from './interaction-mode-readonly/example-interaction-mode-readonly.component';
import { ExampleLegendGridBasicComponent } from './legend-grid-basic/example-legend-grid-basic.component';
import { ExampleLiveDataBasicComponent } from './live-data-basic/example-live-data-basic.component';
import { ExampleLookAtomsBasicComponent } from './look-atoms-basic/example-look-atoms-basic.component';
import { ExampleLookAtomsCustomizedComponent } from './look-atoms-customized/example-look-atoms-customized.component';
import { ExampleLookAtomsModelComponent } from './look-atoms-model/example-look-atoms-model.component';
import { ExampleLookPeopleBasicComponent } from './look-people-basic/example-look-people-basic.component';
import { ExampleLookPeopleModelComponent } from './look-people-model/example-look-people-model.component';
import { ExampleLookQuotesBasicComponent } from './look-quotes-basic/example-look-quotes-basic.component';
import { ExampleLookQuotesModelComponent } from './look-quotes-model/example-look-quotes-model.component';
import { ExampleManipulateDataBasicComponent } from './manipulate-data-basic/example-manipulate-data-basic.component';
import { ExamplePaginationBasicComponent } from './pagination-basic/example-pagination-basic.component';
import { ExamplePersistenceBasicComponent } from './persistence-basic/example-persistence-basic.component';
import { ExamplePersistenceServerComponent } from './persistence-server/example-persistence-server.component';
import { ExamplePinColumnBasicComponent } from './pin-column-basic/example-pin-column-basic.component';
import { ExamplePipeGridBasicComponent } from './pipe-grid-basic/example-pipe-grid-basic.component';
import { ExamplePivotColumnBasicComponent } from './pivot-column-basic/example-pivot-column-basic.component';
import { ExamplePivotColumnCohortComponent } from './pivot-column-cohort/example-pivot-column-cohort.component';
import { ExamplePivotColumnTemplateComponent } from './pivot-column-template/example-pivot-column-template.component';
import { ExamplePluginGridBasicComponent } from './plugin-grid-basic/example-plugin-grid-basic.component';
import { ExamplePluginMyPagerComponent } from './plugin-grid-basic/example-plugin-my-pager.component';
import { ExampleSelectCellBasicComponent } from './select-cell-basic/example-select-cell-basic.component';
import { ExampleSelectColumnBasicComponent } from './select-column-basic/example-select-column-basic.component';
import { ExampleSelectMixBasicComponent } from './select-mix-basic/example-select-mix-basic.component';
import { ExampleSelectRowBasicComponent } from './select-row-basic/example-select-row-basic.component';
import { ExampleSizeRowBasicComponent } from './size-row-basic/example-size-row-basic.component';
import { ExampleSortRowBasicComponent } from './sort-row-basic/example-sort-row-basic.component';
import { ExampleStyleCellBasicComponent } from './style-cell-basic/example-style-cell-basic.component';
import { ExampleStyleRowBasicComponent } from './style-row-basic/example-style-row-basic.component';
import { ExampleSummaryColumnAggregationComponent } from './summary-column-aggregation/example-summary-column-aggregation.component';
import { ExampleSummaryColumnBasicComponent } from './summary-column-basic/example-summary-column-basic.component';
import { ExampleThemeGridDarkComponent } from './theme-grid-dark/example-theme-grid-dark.component';
import { ExampleThemeGridEmbedComponent } from './theme-grid-embed/example-theme-grid-embed.component';

const EXAMPLES: Array<any> = [
	ExampleActionBarBasicComponent,
	ExampleActionBarTemplateComponent,
	ExampleAggregateColumnBasicComponent,
	ExampleColumnArrayBasicComponent,
	ExampleColumnAutocompletetBasicComponent,
	ExampleColumnBoolBasicComponent,
	ExampleColumnCurrencyBasicComponent,
	ExampleColumnDateBasicComponent,
	ExampleColumnDropdownBasicComponent,
	ExampleColumnEmailBasicComponent,
	ExampleColumnFileBasicComponent,
	ExampleColumnIdBasicComponent,
	ExampleColumnImageBasicComponent,
	ExampleColumnNumberBasicComponent,
	ExampleColumnPasswordBasicComponent,
	ExampleColumnReferenceBasicComponent,
	ExampleColumnRowIndicatorBasicComponent,
	ExampleColumnRowNumberBasicComponent,
	ExampleColumnRowOptionsBasicComponent,
	ExampleColumnTextBasicComponent,
	ExampleColumnTimeBasicComponent,
	ExampleColumnUrlBasicComponent,
	ExampleDefineColumnAsyncComponent,
	ExampleDefineColumnBasicComponent,
	ExampleDefineColumnHybridComponent,
	ExampleDestroyGridBasicComponent,
	ExampleDestroyGridModelComponent,
	ExampleDetailsRowAllComponent,
	ExampleDetailsRowBasicComponent,
	ExampleDetailsRowGridComponent,
	ExampleDragColumnBasicComponent,
	ExampleDragRowBasicComponent,
	ExampleDragRowNodeComponent,
	ExampleEditCellBasicComponent,
	ExampleEditCellBatchComponent,
	ExampleFilterColumnFetchComponent,
	ExampleFilterConditionBasicComponent,
	ExampleFilterRowBasicComponent,
	ExampleFloatingRowsBasicComponent,
	ExampleFocusCellAutoComponent,
	ExampleFocusCellBasicComponent,
	ExampleGenerateColumnCohortComponent,
	ExampleGenerateColumnDeepComponent,
	ExampleGenerateColumnShallowComponent,
	ExampleGroupColumnBasicComponent,
	ExampleGroupRowAggregationComponent,
	ExampleGroupRowBasicComponent,
	ExampleGroupRowEditComponent,
	ExampleGroupRowFlatComponent,
	ExampleGroupRowRowspanComponent,
	ExampleGroupRowSubheadComponent,
	ExampleGroupRowSummaryComponent,
	ExampleIndexColumnBasicComponent,
	ExampleIndexColumnHybridComponent,
	ExampleIndexColumnModelComponent,
	ExampleInteractionModeDetachedComponent,
	ExampleInteractionModeReadonlyComponent,
	ExampleLegendGridBasicComponent,
	ExampleLiveDataBasicComponent,
	ExampleLookAtomsBasicComponent,
	ExampleLookAtomsCustomizedComponent,
	ExampleLookAtomsModelComponent,
	ExampleLookPeopleBasicComponent,
	ExampleLookPeopleModelComponent,
	ExampleLookQuotesBasicComponent,
	ExampleLookQuotesModelComponent,
	ExampleManipulateDataBasicComponent,
	ExamplePaginationBasicComponent,
	ExamplePersistenceBasicComponent,
	ExamplePersistenceServerComponent,
	ExamplePinColumnBasicComponent,
	ExamplePipeGridBasicComponent,
	ExamplePivotColumnBasicComponent,
	ExamplePivotColumnCohortComponent,
	ExamplePivotColumnTemplateComponent,
	ExamplePluginGridBasicComponent,
	ExampleSelectCellBasicComponent,
	ExampleSelectColumnBasicComponent,
	ExampleSelectMixBasicComponent,
	ExampleSelectRowBasicComponent,
	ExampleSizeRowBasicComponent,
	ExampleSortRowBasicComponent,
	ExampleStyleCellBasicComponent,
	ExampleStyleRowBasicComponent,
	ExampleSummaryColumnAggregationComponent,
	ExampleSummaryColumnBasicComponent,
	ExampleThemeGridDarkComponent,
	ExampleThemeGridEmbedComponent,
];

const PATH_REGEX = /Example(.*)Component/;
function toPath(componentType: Function) {
	const name = PATH_REGEX.exec(componentType.name)[1];
	return name
		.split(/(?=[A-Z])/)
		.map(part => part.toLowerCase())
		.join('-');
}

export const exampleRoutes: Routes = EXAMPLES.map<Route>(example => ({
	path: toPath(example),
	component: example
})).concat([
	{
		path: '',
		redirectTo: toPath(ExampleLookPeopleBasicComponent),
		pathMatch: 'full'
	}
]);

@NgModule({
	declarations: EXAMPLES.concat([ExamplePluginMyPagerComponent]),
	exports: EXAMPLES,
	imports: [
		GridModule,
		ThemeModule,
		CommonModule,
		FormsModule,
		MatButtonModule,
		MatSelectModule
	]
})
export class ExampleModule { }
