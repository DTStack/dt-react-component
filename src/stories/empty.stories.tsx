import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import Empty from '../components/empty';

const stories = storiesOf('Empty 空状态', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'type',
        propType: 'string',
        required: false,
        description: '默认展示图片的类型',
        defaultValue: 'default',
    },
    {
        property: 'image',
        propType: 'React.Node',
        required: false,
        description: '自定义图片(设置该参数时，默认的图片不生效)',
        defaultValue: '',
    },
    {
        property: '其他参数',
        propType: '',
        required: false,
        description: (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ant.design/components/empty-cn/#API"
            >
                继承antd4.x的Empty
            </a>
        ),
        defaultValue: '',
    },
];

const otherDependencies = `import { Empty } from 'dt-react-component';`;

const basicFunctionCode = ``;

const basicEmpty = `<Empty />`;

const basicGreyEmpty = `<Empty type="grey" />`;

const customizeImage = `<Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />`;

const moreSettingImage = `<Empty description="自定义的文案" imageStyle={{ height: 60 }}/>`;

stories.add(
    'Empty 空状态',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>{`当目前没有数据时，用于显式的用户提示。初始化场景时的引导创建流程`}</p>
            <h2>1、使用默认空状态</h2>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={basicEmpty}
                functionCode={basicFunctionCode}
                hasCodeSandBox
            >
                <Empty />
            </ExampleContainer>
            <h2>2、使用灰色空状态</h2>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={basicGreyEmpty}
                functionCode={basicFunctionCode}
                hasCodeSandBox
            >
                <Empty type="grey" />
            </ExampleContainer>
            <h2>3、使用自定义图片</h2>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={customizeImage}
                functionCode={basicFunctionCode}
                hasCodeSandBox
            >
                <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />
            </ExampleContainer>
            <h2>4、更多配置</h2>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={moreSettingImage}
                functionCode={basicFunctionCode}
                hasCodeSandBox
            >
                <Empty description="自定义的文案" imageStyle={{ height: 60 }} />
            </ExampleContainer>
        </div>
    ),
    {
        info: {
            text: `
            代码示例：
            ~~~js
            <p style={style}>1、使用默认空状态</p>
            <Empty />

            <p style={style}>2、使用灰色空状态</p>
            <Empty type="grey" />

            <p style={style}>3、使用自定义图片</p>
            <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />

            <p style={style}>4、更多配置</p>
            <Empty description="自定义的文案" imageStyle={{ height: 60 }}/>
            ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
