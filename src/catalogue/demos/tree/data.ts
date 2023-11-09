import type { ITreeDataItem } from '../../components/tree';

export const initTreeData: ITreeDataItem[] = [
    {
        key: '1',
        title: '文件夹1',
        contextMenuConfig: {
            data: [
                { text: '日志', key: 'log' },
                { text: '自定义操作', key: 'customOperation' },
            ],
            onClick: (a, b) => {
                console.log(a, b, '--8');
            },
        },
        children: [
            {
                key: '1.1',
                title: '很长很长很长很长很长很长很长很长很长很长很长的文件夹名称',
                contextMenuConfig: {
                    data: [
                        { text: '新建文件夹', key: 'newFolder' },
                        { text: '删除', key: 'deleteFolder' },
                    ],
                    onClick: (a, b) => {
                        console.log(a, b, '--13');
                    },
                },
                children: [
                    {
                        key: '1.1.1',
                        title: '文件2',
                        contextMenuConfig: {
                            data: [
                                { text: '编辑', key: 'editFile' },
                                { text: '删除', key: 'deleteFile' },
                                { text: '克隆', key: 'cloneFile' },
                            ],
                            onClick: (a, b) => {
                                console.log(a, b, '--23');
                            },
                        },
                    },
                    {
                        key: '1.1.2',
                        title: '文件3',
                    },
                    {
                        key: '1.1.3',
                        title: '文件4',
                    },
                    {
                        key: '1.1.4',
                        title: '文件5',
                    },
                    {
                        key: '1.1.5',
                        title: '文件6',
                    },
                    {
                        key: '1.1.6',
                        title: '文件7',
                    },
                ],
            },
            {
                key: '1.2',
                title: '文件夹8',
                children: [
                    {
                        key: '1.2.1',
                        title: '文件9',
                    },
                ],
            },
        ],
    },
    {
        key: '2',
        title: '文件夹10',
        children: [
            {
                key: '2.1',
                title: '文件夹11',
                children: [
                    {
                        key: '2.1.1',
                        title: '文件12',
                    },
                    {
                        key: '2.1.2',
                        title: '文件13',
                    },
                ],
            },
            {
                key: '2.2',
                title: '文件夹14',
                children: [
                    {
                        key: '2.2.1',
                        title: '文件15',
                    },
                    {
                        key: '2.2.2',
                        title: '文件16',
                    },
                    {
                        key: '2.2.3',
                        title: '文件17',
                    },
                    {
                        key: '2.2.4',
                        title: '文件18',
                    },
                    {
                        key: '2.2.5',
                        title: '文件19',
                    },
                    {
                        key: '2.2.6',
                        title: '文件20',
                    },
                    {
                        key: '2.2.7',
                        title: '文件21',
                    },
                ],
            },
        ],
    },
    {
        key: '3',
        title: '文件夹22',
        children: [
            {
                key: '3.1',
                title: '文件夹23',
                children: [
                    {
                        key: '3.1.1',
                        title: '文件24',
                    },
                    {
                        key: '3.1.2',
                        title: '文件25',
                    },
                ],
            },
            {
                key: '3.2',
                title: '文件夹26',
                children: [
                    {
                        key: '3.2.1',
                        title: '文件27',
                    },
                ],
            },
        ],
    },
    {
        key: '4',
        title: '4',
        children: [
            {
                key: '4.1',
                title: '文件夹28',
                children: [
                    {
                        key: '4.1.1',
                        title: '文件29',
                    },
                    {
                        key: '4.1.2',
                        title: '文件30',
                    },
                ],
            },
            {
                key: '4.2',
                title: '文件夹31',
                children: [
                    {
                        key: '4.2.1',
                        title: '文件32',
                    },
                ],
            },
        ],
    },
    {
        key: '521751',
        title: '文件夹33',
        children: [
            {
                key: '5.1',
                title: '文件夹34',
                children: [
                    {
                        key: '5.1.1',
                        title: '文件35',
                    },
                    {
                        key: '5.1.2',
                        title: '文件36',
                    },
                    {
                        key: '5.1.3',
                        title: '文件37',
                    },
                    {
                        key: '5.1.4',
                        title: '文件38',
                    },
                ],
            },
            {
                key: '5.2',
                title: '文件夹39',
                children: [
                    {
                        key: '5.2.12',
                        title: '文件40',
                    },
                ],
            },
            {
                key: '5.3',
                title: '文件夹41',
                children: [
                    {
                        key: '5.2.131',
                        title: '文件42',
                    },
                    {
                        key: '5.2.2',
                        title: '文件43',
                    },
                    {
                        key: '5.2.3',
                        title: '文件44',
                    },
                ],
            },
        ],
    },
    {
        key: '6123123',
        title: '文件夹45',
        children: [
            {
                key: '6.1',
                title: '文件夹46',
                children: [
                    {
                        key: '6.1.1',
                        title: '文件47',
                    },
                    {
                        key: '6.1.2',
                        title: '文件48',
                    },
                    {
                        key: '6.1.3',
                        title: '文件49',
                    },
                    {
                        key: '6.1.4',
                        title: '文件50',
                    },
                ],
            },
            {
                key: '6.2',
                title: '文件夹51',
                children: [
                    {
                        key: '6.2.1123',
                        title: '文件52',
                    },
                ],
            },
            {
                key: '6.3',
                title: '文件夹53',
                children: [
                    {
                        key: '6.2.1867234',
                        title: '文件54',
                    },
                    {
                        key: '6.2.2',
                        title: '文件55',
                    },
                    {
                        key: '6.2.3',
                        title: '文件56',
                    },
                ],
            },
        ],
    },
    {
        key: '721751',
        title: '文件夹57',
        children: [
            {
                key: '7.1',
                title: '文件夹58',
                children: [
                    {
                        key: '7.1.1',
                        title: '文件59',
                    },
                    {
                        key: '7.1.2',
                        title: '文件60',
                    },
                    {
                        key: '7.1.3',
                        title: '文件61',
                    },
                    {
                        key: '7.1.4',
                        title: '文件62',
                    },
                ],
            },
            {
                key: '7.2',
                title: '文件夹63',
                children: [
                    {
                        key: '7.2.31878',
                        title: '文件64',
                    },
                ],
            },
            {
                key: '7.3',
                title: '文件夹65',
                children: [
                    {
                        key: '7.2.12451',
                        title: '文件66',
                    },
                    {
                        key: '7.2.2',
                        title: '文件67',
                    },
                    {
                        key: '7.2.3',
                        title: '文件68',
                    },
                ],
            },
        ],
    },
    {
        key: '821751',
        title: '文件夹69',
        children: [
            {
                key: '8.1',
                title: '文件夹70',
                children: [
                    {
                        key: '8.1.1',
                        title: '文件71',
                    },
                    {
                        key: '8.1.2',
                        title: '文件72',
                    },
                    {
                        key: '8.1.3',
                        title: '文件73',
                    },
                    {
                        key: '8.1.4',
                        title: '文件74',
                    },
                ],
            },
            {
                key: '8.2',
                title: '文件夹75',
                children: [
                    {
                        key: '8.2.1',
                        title: '文件76',
                    },
                ],
            },
            {
                key: '8.3',
                title: '文件夹77',
                children: [
                    {
                        key: '8.2.878231',
                        title: '文件78',
                    },
                    {
                        key: '8.2.2',
                        title: '文件79',
                    },
                    {
                        key: '8.2.3',
                        title: '文件80',
                    },
                ],
            },
        ],
    },
    {
        key: '99921266',
        title: '文件夹81',
        // type: 'x',
        children: [
            {
                key: '9.1',
                title: '测试很长很长很长很长很长很长很长很长的文件夹名称',
                children: [
                    {
                        key: '9.1.1',
                        title: '文件82',
                    },
                    {
                        key: '9.1.2',
                        title: '文件83',
                    },
                    {
                        key: '9.1.3',
                        title: '文件84',
                    },
                    {
                        key: '9.1.4',
                        title: '文件85',
                    },
                    {
                        key: '9.1.5',
                        title: '文件86',
                    },
                    {
                        key: '9.1.6',
                        title: '文件87',
                    },
                ],
            },
            {
                key: '9.2',
                title: '文件夹88',
                children: [
                    {
                        key: '9.2.1',
                        title: '文件89',
                    },
                ],
            },
        ],
    },
    {
        key: '10',
        title: '文件夹90',
        children: [
            {
                key: '10.1',
                title: '文件夹91',
                children: [
                    {
                        key: '10.1.1',
                        title: '文件92',
                    },
                    {
                        key: '10.1.2',
                        title: '文件93',
                    },
                ],
            },
            {
                key: '10.2',
                title: '文件夹94',
                children: [
                    {
                        key: '10.2.1',
                        title: '文件95',
                    },
                    {
                        key: '10.2.2',
                        title: '文件96',
                    },
                    {
                        key: '10.2.3',
                        title: '文件97',
                    },
                    {
                        key: '10.2.4',
                        title: '文件98',
                    },
                    {
                        key: '10.2.5',
                        title: '文件99',
                    },
                    {
                        key: '10.2.6',
                        title: '文件100',
                    },
                    {
                        key: '10.2.7',
                        title: '文件101',
                    },
                ],
            },
        ],
    },
    {
        key: '118326832101dd',
        title: '文件夹102',
        children: [
            {
                key: '11.13',
                title: '文件夹103',
                children: [
                    {
                        key: '11.41.1',
                        title: '文件104',
                    },
                    {
                        key: '11.71.2',
                        title: '文件105',
                    },
                ],
            },
            {
                key: '11.2',
                title: '文件夹106',
                children: [
                    {
                        key: '11.82.1',
                        title: '文件107',
                    },
                ],
            },
        ],
    },
];

export type ISleep = (t: number, d?: any) => Promise<typeof d>;

export const sleep: ISleep = (t = 1500, data) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(data), t);
    });
