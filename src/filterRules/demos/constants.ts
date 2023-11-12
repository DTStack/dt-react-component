import shortid from 'shortid';

export const INIT_ROW_VALUES = {
    input: '',
};

export const INIT_DATA = {
    key: shortid(),
    level: 0,
    rowValues: {
        ...INIT_ROW_VALUES,
    },
};

export type IRow = typeof INIT_ROW_VALUES;
