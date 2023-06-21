import React from 'react';
import { storiesOf } from '@storybook/react';
import SpreadSheet from '../components/spreadSheet';
// import 'handsontable/dist/handsontable.full.css';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import '../styles';

const propDefinitions = [
    {
        property: 'columns',
        propType: 'Array',
        required: false,
        description: '列名',
        defaultValue: '',
    },
    {
        property: 'data',
        propType: 'Array(二维数组)',
        required: false,
        description: '表格数据',
        defaultValue: '',
    },
    {
        property: 'options.showCopyWithHeader',
        propType: 'Boolean',
        required: false,
        description: '右键菜单中是否展示“复制值以及列名”按钮',
        defaultValue: '',
    },
    {
        property: 'options.trimWhitespace',
        propType: 'Boolean',
        required: false,
        description: '是否去除内容里的空格',
        defaultValue: true,
    },
];

const otherDependencies = `import { SpreadSheet } from 'dt-react-component';`;

const functionCode = '';

const code = `<SpreadSheet columns={['name', 'gender', 'age', 'address']} data={[
    ['zhangsan', 'male', '20', 'xihu'],
    ['lisi', 'male', '18', 'yuhang'],
    ['   前面有空格', '后面有空格   ', '中间有  空 格', 'yuhang'],
]} options={{ trimWhitespace: false }} />`;

const stories = storiesOf('SpreadSheet 多功能表', module);
stories.add(
    'spreadSheet',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>表格内容右键可复制，表格大小可拖动</p>
                <h2>示例</h2>
                <ExampleContainer
                    code={code}
                    otherDependencies={otherDependencies}
                    hasCodeSandBox
                    functionCode={functionCode}
                >
                    <SpreadSheet
                        columns={['name', 'gender', 'age', 'address']}
                        data={[
                            ['zhangsan', 'male', '20', 'xihu'],
                            ['lisi', 'male', '18', 'yuhang'],
                            ['   前面有空格', '后面有空格   ', '中间有  空 格', 'yuhang'],
                        ]}
                        options={{ trimWhitespace: false }}
                    />
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        import { SpreadSheet } from 'dt-react-component'
        <SpreadSheet
            columns={['name', 'gender', 'age', 'address']}
            data={[['zhangsan', 'male', '20', 'xihu'], ['lisi', 'male', '18', 'yuhang']]}
        />
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
