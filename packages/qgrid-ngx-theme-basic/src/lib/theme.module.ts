import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	ActionBarModule,
	ActionModule,
	AutoCompleteEditorModule,
	BackdropModule,
	BoolEditorModule,
	CaptionModule,
	CellEditorModule,
	CellTooltipModule,
	ChangeDetectorModule,
	ColumnChooserModule,
	ColumnFilterModule,
	ColumnSortModule,
	CommandModule,
	DataManipulationModule,
	DndModule,
	EbModule,
	EditFormModule,
	ExportModule,
	FileModule,
	FocusModule,
	GridModule,
	ImportModule,
	LayerModule,
	LayoutModule,
	LegendModule,
	LiveCellModule,
	LiveColumnModule,
	LiveRowModule,
	MarkupModule,
	PagerModule,
	PaneModule,
	PersistenceModule,
	PipeModule,
	ProgressModule,
	QueryBuilderModule,
	ReferenceEditorModule,
	ResizeModule,
	RestModule,
	StatusBarModule,
	TabTrapModule,
	TemplateModule,
	ThemeService,
	ValidationModule,
	VisibilityModule
} from 'ng2-qgrid';
import { ThemeComponent } from './theme.component';

@NgModule({
    declarations: [
        ThemeComponent
    ],
    exports: [
        ThemeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TemplateModule,
        GridModule,
        DndModule,
        ResizeModule,
        ActionBarModule,
        ActionModule,
        AutoCompleteEditorModule,
        BackdropModule,
        BoolEditorModule,
        CaptionModule,
        ChangeDetectorModule,
        CellEditorModule,
        CellTooltipModule,
        ColumnChooserModule,
        ColumnFilterModule,
        ColumnSortModule,
        CommandModule,
        DataManipulationModule,
        EbModule,
        EditFormModule,
        ExportModule,
        FileModule,
        FocusModule,
        ImportModule,
        LayerModule,
        LayoutModule,
        LegendModule,
        LiveCellModule,
        LiveColumnModule,
        LiveRowModule,
        MarkupModule,
        PagerModule,
        PaneModule,
        PersistenceModule,
        PipeModule,
        ProgressModule,
        QueryBuilderModule,
        ReferenceEditorModule,
        RestModule,
        StatusBarModule,
        TabTrapModule,
        ValidationModule,
        VisibilityModule,
    ]
})
export class ThemeModule {
	constructor(theme: ThemeService) {
		theme.name = 'basic';
		theme.component = ThemeComponent;
	}
}
