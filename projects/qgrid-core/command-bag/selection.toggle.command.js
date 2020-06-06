import { Command } from '../command/command';
import { commandKey } from '../command/command.key';
import { isUndefined, isArray, noop } from '../utility/kit';

export const SELECTION_TOGGLE_COMMAND_KEY = commandKey('selection.toggle.command');

export class SelectionToggleCommand extends Command {
    constructor(plugin) {
        const { model, table, view } = plugin;

        super({
            key: SELECTION_TOGGLE_COMMAND_KEY,
            execute: data => {
                const { toggle } = model.selection();
                const selectionLet = view.selection;

                data = !arguments.length || isUndefined(data)
                    ? table.data.rows()
                    : isArray(data)
                        ? data : [data];

                const clientContext = {
                    items: data,
                    kind: 'toggle'
                };

                if (toggle.canExecute(clientContext) !== true) {
                    if (toggle.execute(clientContext) !== false) {
                        selectionLet.form.toggle(data);

                        const items = selectionLet
                            .selectionService
                            .map(
                                selectionLet
                                    .form
                                    .entries()
                            );

                        return () => {
                            model.selection({
                                items
                            }, {
                                source: 'selection.toggle.command'
                            });
                        };
                    }
                }

                return noop;
            }
        });
    }
}
