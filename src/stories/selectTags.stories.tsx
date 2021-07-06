import React from 'react';
import { storiesOf } from '@storybook/react';
import SelectTags from '../components/selectTags';
import { PropsTable } from './components/propsTable';
import { State } from '@sambego/storybook-state';
import ExampleContainer from './components/exampleCode';
import '../styles/index.scss';

const propDefinitions = [
    {
        property: 'options',
        propType: 'array',
        required: true,
        description:
      '设置下拉菜单的选项，选项内容格式为 { label: string, value: string | number }',
        defaultValue: '[]'
    },
    {
        property: 'initTags',
        propType: 'array',
        required: true,
        description: '初始化数据',
        defaultValue: '[]'
    },
    {
        property: 'onChange',
        propType: 'Function',
        required: true,
        description: '每次更新tag后的事件',
        defaultValue: '--'
    }
];
const stories = storiesOf('SelectTags  带有下拉选择的Tag', module);

const otherDependencies = `import { SelectTags } from 'dt-react-component';`;
const code = `
    <SelectTags
        options={[
        {
          label: "选项一",
          value: 1,
        },
        {
          label: "选项二",
          value: 2,
        },
        {
          label: "选项三",
          value: 3
        }
        ]}
        initTags={[
        {
          label: "选项一",
          value: 1,
        },
        ]}
        onChange={(tags)=>{
            console.log('tags: ', tags);
        }}
    />
`;

stories.add(
    'selectTags',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>当我们想要使用tag进行标记，但是又想通过下拉选择来新增tag</p>
                <h2>示例</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox={true}
                >
                    <SelectTags
                        options={[
                            {
                                label: '选项一',
                                value: 1
                            },
                            {
                                label: '选项二',
                                value: 2
                            },
                            {
                                label: '选项三',
                                value: 3
                            }
                        ]}
                        initTags={[
                            {
                                label: '选项一',
                                value: 1
                            }
                        ]}
                        onChange={(tags) => {
                            console.log('tags: ', tags);
                        }}
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
        import { SelectTags } from 'dt-react-component'
        <SelectTags
          options={[
            {
              label: "选项一",
              value: 1,
            },
            {
              label: "选项二",
              value: 2,
            },
            {
              label: "选项三",
              value: 3,
            },
          ]}
          initTags={[
            {
              label: "选项一",
              value: 1,
            },
          ]}
          onChange={(tags) => {
            console.log("tags: ", tags);
          }}
      />
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
            propTablesExclude: [State]
        }
    }
);
