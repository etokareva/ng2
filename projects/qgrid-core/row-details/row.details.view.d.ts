import { Command } from '../command/command';
import { GridPlugin } from '../plugin/grid.plugin';


export declare class RowDetailsView {
	constructor(plugin: GridPlugin, shortcut: { register: (commands: Command[]) => void });

	readonly toggleStatus: Command;
	status(row: any): boolean;
}
