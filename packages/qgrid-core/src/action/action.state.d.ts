import { CommandManager } from '../command/command.manager';
import { Shortcut } from '../shortcut/shortcut';
import { Action } from './action';
// import { Resource } from '../resource/resource';

/**
 * Use this class to handle and visualize custom user behaviors.
 * [action bar](/doc/feature/action.html) plugin uses this model to draw buttons on the top of q-grid to execute user commands.
 *
 * ### Usage
 *
 * ```javascript
 * const addRowCommand = new qgrid.Command({
 *   execute: () => {
 *      const newRow = {
 *		 id: 1,
 *		 text: 'foo'
 *      };
 *
 *      gridModel.data({
 *        rows: gridModel.data().rows.concat(newRow)
 *      });
 *   },
 *   shortcut: 'F7'
 *});
 *
 * const addRowAction = new qgrid.Action({
 *    command: addRowCommand,
 *    title: 'Add new row',
 *    icon: 'add'
 * });
 *
 * gridModel.action({
 *    items: [addRowAction]
 * });
 * ```
 *
 */
export declare class ActionState {
	/**
	 * List of actions that will be added to the command manager,
	 * and bind to the keyboard events.
	 */
	items: Action[];

	/**
	 * The service that connects keyboard events and commands.
	 */
	shortcut: Shortcut;

	/**
	 * Command manager is responsible for 2 questions:
	 * * What commands can be executed?
	 * * How/in what order commands should be executed?
	 */
	manager: CommandManager;
}
