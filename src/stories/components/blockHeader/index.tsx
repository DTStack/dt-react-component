import React from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import BlockHeader from '../../../components/blockHeader';
import EllipsisText from '../../../components/ellipsisText';
import { Button } from 'antd';

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
            <p style={style}>7、标题超长</p>
            <BlockHeader
                title={
                    <EllipsisText
                        maxWidth={400}
                        value="标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长"
                    />
                }
            />
            <p style={style}>8、标题超长且有 afterTitle</p>
            <div style={{ width: '50%' }}>
                <BlockHeader
                    title={
                        <EllipsisText
                            maxWidth={'100%'}
                            value="标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长"
                        />
                    }
                    afterTitle="这是 afterTitle"
                    addonAfter={<Button size="small">选择</Button>}
                />
            </div>
            <br />

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
            <br />

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
