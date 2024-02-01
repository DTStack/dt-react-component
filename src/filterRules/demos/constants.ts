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

export const INIT_CHECK_DATA = {
    key: shortid(),
    level: 0,
    type: 1,
    children: [
        {
            rowValues: {
                input: '',
            },
            disabled: true,
            key: shortid(),
            level: 1,
        },
        {
            key: shortid(),
            type: 1,
            level: 2,
            disabled: true,
            children: [
                {
                    rowValues: {
                        input: '',
                    },
                    key: shortid(),
                    level: 2,
                },
                {
                    key: shortid(),
                    rowValues: {
                        input: '',
                    },
                    level: 2,
                },
            ],
        },
    ],
};

export const MORE_INIT_DATA = {
    key: shortid(),
    level: 1,
    type: 1,
    children: [
        {
            rowValues: {
                input: '',
            },
            key: shortid(),
            level: 1,
        },
        {
            key: shortid(),
            type: 2,
            level: 2,
            children: [
                {
                    key: shortid(),
                    level: 2,
                    rowValues: {
                        input: '',
                    },
                },
                {
                    key: shortid(),
                    rowValues: {
                        input: '',
                    },
                    level: 2,
                },
            ],
        },
    ],
};

export type IRow = typeof INIT_ROW_VALUES;
