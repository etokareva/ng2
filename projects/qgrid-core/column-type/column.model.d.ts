import { EditorOptions } from './editor.options';


/**
 * Indicates if column should be frozen.
 * - `'left'` - freeze a column to the grid's left.
 * - `'right'` - freeze a column to the grid's right.
 * - `'mid'` - do not freeze  a column.
 */
export declare type ColumnModelPin = 'mid' | 'left' | 'right';

/**
 * A functional type of a the column.
 *
 *  * `control` behavior controllers (e.g. `select` type column).
 *  * `data` real user data.
 *  * `markup` used for the internal markup needs (e.g. `pad` type column).
 *  * `pivot`multi head pivot.
 */
export declare type ColumnModelCategory = 'data' | 'control' | 'markup' | 'pivot' | 'cohort';

/**
 * Place where a column was created.
 *
 * * `generation` was auto-generated by the q-grid.
 * * `template` was defined by user in the html template.
 * * `user` was defined by user in the javascript/typescript.
 */
export declare type ColumnModelSource = 'generation' | 'template' | 'user';
export declare type ColumnModelOrigin = 'specific' | 'custom';
/**
 * Indicates how to calculate column width:
 * 
 * * `relative` get whole grid width minus static px widths and apply percents.
 * * `absolute` get whole grid width and apply percents.  
 * * `fit-head` column width will be equal to the text head width.
 */
export declare type ColumnModelWidthMode = 'relative' | 'absolute' | 'fit-head';

export declare type ColumnModelType =
	'array' |
	'bool' |
	'cohort' |
	'currency' |
	'date' |
	'datetime' |
	'email' |
	'file' |
	'filter-row' |
	'group' |
	'id' |
	'image' |
	'number' |
	'pad' |
	'pivot' |
	'reference' |
	'row-details' |
	'row-expand' |
	'row-indicator' |
	'row-number' |
	'row-options' |
	'select' |
	'summary' |
	'text' |
	'time' |
	'url';

/**
 * A class that represents any column in the qgrid.
 */
export declare class ColumnModel {
	/**
	 * Type of column. Beside below list user is free to define own column type.
	 * Be aware that some column types are used for internal purposes.
	 */
	type?: ColumnModelType | string;

	/**
	 * A column identifier, should be unique across all columns. If path is not setup, key property is used
	 * to retrieve a cell value.
	 */
	key?: string;

	/**
	 * Column header text, also can be shown as column tooltip, or used in plugins like column filter plugin.
	 */
	title?: string;

	/**
	 * A column description text, showed in the tooltip under basic theme.
	 */
	description?: string;

	/**
	 * Getter, setter for a cell value. If the value property is setup, it is used to get/set cell value.
	 */
	value?: (row: any, value?: any) => any;

	$value?: (row: any, value?: any) => any;

	/**
	 * Path to the value. Example is `address.phones.0.num`, if `path` property is setup, it is used
	 * to get/set cell value, but it has a lower priority than column `value` property.
	 */
	path?: string;

	/**
	 * Indicates if column should be frozen.
	 */
	pin?: ColumnModelPin;

	origin?: ColumnModelOrigin;

	/**
	 * Place where a column was created.
	 */
	source?: ColumnModelSource;

	/**
	 * A functional type of a the column.
	 */
	category?: ColumnModelCategory;

	/**
	 * Css class.
	 */
	class?: string;

	/**
	 * Editor type, will be shown in cell edit mode instead of default column type editor.
	 * For instance, it can be used for id type column `<q-grid-column type="id" editor="number">`
	 */
	editor?: string;

	/**
	 * Options for cell edit mode.
	 */
	editorOptions?: EditorOptions;

	/**
	 * Width of the q-grid column.
	 *
	 * * Can be setup in `pixels` like `<q-grid-column [width]="100"></q-grid-column>`.
	 * * Can be setup in `percents` like `<q-grid-column width="20%"></q-grid-column>`.
	 *
	 * Percents are materialized only once on init, and depend on the q-grid size.
	 */
	width?: number | string;

	/**
	 * Minimal width of the column.
	 */
	minWidth?: number;

	/**
	 * Maximum width of the column.
	 */
	maxWidth?: number;

	/**
	 * If set, column width will be expanded to this value on focus.
	 */
	viewWidth?: number;

	/**
	 * Indicates how to calculate column width:
	 * 
	 * * `relative` get whole grid width minus static px widths and apply percents.
	 * * `absolute` get whole grid width and apply percents.  
	 */
	widthMode?: ColumnModelWidthMode;

	/**
	 * Indicates if cells in the column are editable.
	 */
	canEdit?: boolean;

	/**
	 * Indicates if use can change column width by drag and drop.
	 */
	canResize?: boolean;

	/**
	 * Indicates if sorting can be applied to the column.
	 * `Column sort` plugin is used this property to enable/disable sort arrow icons.
	 */
	canSort?: boolean;

	/**
	 * Indicates if drag and drop is allowed for the column.
	 */
	canMove?: boolean;

	/**
	 * Indicates if data in the column can be filtered.
	 * `Column filter` plugin is used this property to enable/disable filter icon.
	 */
	canFilter?: boolean;

	/**
	 * Indicates if underneath column cells should be highlighted when mouse is over column header.
	 */
	canHighlight?: boolean;

	/**
	 * Indicates if column cells can take focus.
	 */
	canFocus?: boolean;

	/**
	 * Indicates if column is visible or not.
	 */
	isVisible?: boolean;

	/**
	 * Indicates the order of the column.
	 */
	index?: number;

	/**
	 * Indicates what text should be shown in the cell. If property is not set column value is used.
	 * Also `filter plugin` uses this property to show list of items and for filter application.
	 */
	label?: ((row: any, value?: any) => any) | any;

	/**
	 * Path to the label. Example is `address.phones.0.num`, if `labelPath` property is setup, it is used
	 * to get/set cell label, but it has a lower priority than column `label property.
	 */
	labelPath?: string;

	/**
	 * This function is used by `column sort` pipe to order row values.
	 */
	compare?: (x: any, y: any) => number;

	/**
	 * If children property is setup the column automatically becomes a group container.
	 */
	children?: ColumnModel[]

	/**
	 * Start index number for columns with type 'row-number'.
	 */
	startNumber?: number;

	$label?: ((row: any, value?: any) => any) | any;

	itemLabel?: (row: any, value?: any) => any;

	symbol?: string;
	code?: string;

	trueValue?: any;
	falseValue?: any;

	itemType?: string;
	itemFormat?: string;
	format?: string;

	canUpload?: () => boolean;
	hasPreview?: (name: string) => boolean;

	offset?: number;
}
