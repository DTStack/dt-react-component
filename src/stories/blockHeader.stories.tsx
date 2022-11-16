import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import BlockHeaderRender from './components/blockHeader';

const stories = storiesOf('Header 头部内容', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'title',
        propType: 'string',
        required: true,
        description: '标题',
        defaultValue: '-',
    },
    {
        property: 'beforeTitle',
        propType: 'React.ReactNode',
        required: false,
        description: '标题前的图标，默认是一个色块',
        defaultValue: '-',
    },
    {
        property: 'afterTitle',
        propType: 'string | React.ReactNode',
        required: false,
        description: '标题后的提示图标或文案',
        defaultValue: '-',
    },
    {
        property: 'tooltip',
        propType: 'string | React.ReactNode',
        required: false,
        description: '默认展示问号提示(优先级低于 afterTitle)',
        defaultValue: '-',
    },
    {
        property: 'isSmall',
        propType: 'boolean',
        required: false,
        description: '大标题、小标题',
        defaultValue: 'false',
    },
    {
        property: 'titleRowClassName',
        propType: 'string',
        required: false,
        description: '标题一行的样式类名',
        defaultValue: '-',
    },
    {
        property: 'titleClassName',
        propType: 'string',
        required: false,
        description: '标题的样式类名',
        defaultValue: '-',
    },
    {
        property: 'showBackground',
        propType: 'boolean',
        required: false,
        description: '是否显示背景',
        defaultValue: 'true',
    },
    {
        property: 'defaultExpand',
        propType: 'boolean',
        required: false,
        description: '是否默认展开内容',
        defaultValue: 'true',
    },
    {
        property: 'children',
        propType: 'React.ReactNode',
        required: false,
        description: '展开/收起的内容',
        defaultValue: '-',
    },
    {
        property: 'onChange',
        propType: 'Function',
        required: false,
        description: '展开/收起时的回调',
        defaultValue: '(expand) => {}',
    },
];

stories.add(
    'BlockHeader 标题',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>{`适合使用在需要简单描述的场景，或适用于将大量数据按照模块划分的场景。`}</p>
            <h2>示例</h2>
            <BlockHeaderRender />
        </div>
    ),
    {
        info: {
            text: `
            代码示例：
            ~~~js

            <h2>大标题</h2>
            <h3>大标题 + 有背景</h3>
            <p style={style}>1、默认</p>
            <BlockHeader title="分类标题" />
            <p style={style}>2、标题 + 自定义 icon</p>
            <BlockHeader
                title="分类标题"
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <p style={style}>3、标题 + 自定义说明</p>
            <BlockHeader title="分类标题" afterTitle="说明文字" />
            <p style={style}>4、标题 + tooltip</p>
            <BlockHeader title="分类标题" tooltip="hover展示更多" />
            <p style={style}>5、简洁版</p>
            <BlockHeader title="分类标题" beforeTitle="" />
            <p style={style}>6、展开/收起内容</p>
            <BlockHeader title="分类标题" onChange={(expand) => console.log(expand)}>
                Hello World!
            </BlockHeader>
            <h3>大标题 + 无背景</h3>
            <p style={style}>1、默认</p>
            <BlockHeader title="分类标题" showBackground={false} />
            <p style={style}>2、标题 + 自定义 icon</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <p style={style}>3、标题 + 自定义说明</p>
            <BlockHeader title="分类标题" afterTitle="说明文字" showBackground={false} />
            <p style={style}>4、标题 + tooltip</p>
            <BlockHeader title="分类标题" tooltip="hover展示更多" showBackground={false} />
            <p style={style}>5、简洁版</p>
            <BlockHeader title="分类标题" beforeTitle="" showBackground={false} />
            <p style={style}>6、展开/收起内容</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                onChange={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>
            <h2>小标题</h2>
            <h3>小标题 + 有背景</h3>
            <p style={style}>1、默认</p>
            <BlockHeader title="分类标题" isSmall />
            <p style={style}>2、标题 + 自定义 icon</p>
            <BlockHeader
                title="分类标题"
                isSmall
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <p style={style}>3、标题 + 自定义说明</p>
            <BlockHeader title="分类标题" afterTitle="说明文字" isSmall />
            <p style={style}>4、标题 + tooltip</p>
            <BlockHeader title="分类标题" tooltip="hover展示更多" isSmall />
            <p style={style}>5、简洁版</p>
            <BlockHeader title="分类标题" beforeTitle="" isSmall />
            <p style={style}>6、展开/收起内容</p>
            <BlockHeader
                title="分类标题"
                isSmall
                onChange={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>
            <h3>小标题 + 无背景</h3>
            <p style={style}>1、默认</p>
            <BlockHeader title="分类标题" showBackground={false} isSmall />
            <p style={style}>2、标题 + 自定义 icon</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                isSmall
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <p style={style}>3、标题 + 自定义说明</p>
            <BlockHeader title="分类标题" afterTitle="说明文字" showBackground={false} isSmall />
            <p style={style}>4、标题 + tooltip</p>
            <BlockHeader title="分类标题" tooltip="hover展示更多" showBackground={false} isSmall />
            <p style={style}>5、简洁版</p>
            <BlockHeader title="分类标题" beforeTitle="" showBackground={false} isSmall />
            <p style={style}>6、展开/收起内容</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                isSmall
                onChange={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>
            ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
