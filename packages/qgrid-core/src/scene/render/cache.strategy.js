import { getLabelFactory } from '../../services/label';
import { getValueFactory } from '../../services/value';

export class CacheStrategy {
    constructor(plugin, strategy) {
        const { model, observeReply } = plugin;
        let storage = new Map();

        const defaultGetValue =
            (row, column, select, rowIndex, columnIndex) => {
                const key = `valueFactory-${column.key}`;
                select = storage.get(key);
                if (!select) {
                    select = getValueFactory(column);
                    storage.set(key, select);
                }

                return strategy.getValue(row, column, select, rowIndex, columnIndex);
            };

        const readonlyGetValue =
            (row, column, select, rowIndex, columnIndex) => {
                const key = `getValue-${rowIndex}x${column.key}`;
                if (storage.has(key)) {
                    return storage.get(key);
                }

                const value = defaultGetValue(row, column, select, rowIndex, columnIndex);
                storage.set(key, value);
                return value;
            };

        const defaultGetLabel =
            (row, column, select, rowIndex, columnIndex) => {
                const key = `labelFactory-${column.key}`;
                select = storage.get(key);
                if (!select) {
                    select = getLabelFactory(column);
                    storage.set(key, select);
                }

                return strategy.getLabel(row, column, select, rowIndex, columnIndex);
            };

        const readonlyGetLabel =
            (row, column, select, rowIndex, columnIndex) => {
                const key = `getLabel-${rowIndex}x${column.key}`;
                if (storage.has(key)) {
                    return storage.get(key);
                }

                const value = defaultGetLabel(row, column, select, rowIndex, columnIndex);
                storage.set(key, value);
                return value;
            };


        this.getValue = defaultGetValue;
        this.getLabel = defaultGetLabel;

        this.colspan = (row, column, rowIndex, columnIndex) => {
            const key = `colspan-${rowIndex}x${column.model.key}`;
            if (storage.has(key)) {
                return storage.get(key);
            }

            const value = strategy.colspan(row, column, rowIndex, columnIndex);
            storage.set(key, value);
            return value;
        };

        this.rowspan = (row, column, rowIndex, columnIndex) => {
            const key = `rowspan-${rowIndex}x${column.model.key}`;
            if (storage.has(key)) {
                return storage.get(key);
            }

            const value = strategy.rowspan(row, column, rowIndex, columnIndex);
            storage.set(key, value);
            return value;
        };

        this.columns = (row, pin, rowIndex) => {
            const key = `columns-${pin}-${rowIndex}`;
            if (storage.has(key)) {
                return storage.get(key);
            }

            const value = strategy.columns(row, pin, rowIndex);
            storage.set(key, value);
            return value;
        }

        this.setValue = (...args) => strategy.setValue(...args);
        this.setLabel = (...args) => strategy.setLabel(...args);

        this.columnList = (pin = 'mid') => {
            const key = `columnList-${pin}`;
            if (storage.has(key)) {
                return storage.get(key);
            }

            const value = strategy.columnList(pin);
            storage.set(key, value);
            return value;
        }

        observeReply(model.sceneChanged)
            .subscribe(e => {
                if (e.hasChanges('status')) {
                    if (e.state.status !== 'stop') {
                        storage = new Map();
                    }
                }
            });

        observeReply(model.gridChanged)
            .subscribe(e => {
                if (e.hasChanges('isReadonly')) {
                    storage = new Map();

                    if (e.state.isReadonly) {
                        this.getValue = readonlyGetValue;
                        this.getLabel = readonlyGetLabel;
                    } else {
                        this.getValue = getValue;
                        this.getLabel = this.getLabel;
                    }
                }
            });
    }
}