import React from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import BlockHeader from '../../../components/blockHeader';

export default function BlockHeaderRender() {
    const style = {
        margin: '15px 0 10px',
    };

    return (
        <React.Fragment>
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
            <BlockHeader title="分类标题" isSmall onChange={(expand) => console.log(expand)}>
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
        </React.Fragment>
    );
}
