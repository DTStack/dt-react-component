import React from 'react';
import { Button, Tooltip } from 'antd';
import { DingdingOutlined, PieChartOutlined } from '@ant-design/icons';
import BlockHeader from '../../../components/blockHeader';

export default function BlockHeaderRender() {
    const style = {
        margin: '15px 0 10px',
    };

    return (
        <React.Fragment>
            <p style={style}>1、默认大标题</p>
            <BlockHeader title="分类标题" />

            <p style={style}>2、小标题</p>
            <BlockHeader title="小分类标题" isSmall />

            <p style={style}>3、标题 + icon，有说明文字</p>
            <BlockHeader
                title="分类标题"
                beforeTitle={<PieChartOutlined style={{ fontSize: '16px' }} />}
                afterTitle="说明文字"
            />

            <p style={style}>4、使用 tooltip 展示问号提示</p>
            <BlockHeader title="分类标题" tooltip="hover 才会显示说明文字哦~" />

            <p style={style}>5、自定义标题图案</p>
            <BlockHeader
                title="分类标题"
                afterTitle={
                    <Tooltip title={'自定义图标'}>
                        <DingdingOutlined style={{ cursor: 'pointer' }} />
                    </Tooltip>
                }
            />

            <p style={style}>6、无背景</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                tooltip="hover 才会显示说明文字哦~"
            />

            <p style={style}>7、展开/收起内容</p>
            <BlockHeader title="分类标题" onChange={(expand) => console.log(expand)}>
                Hello World!
            </BlockHeader>

            <p style={style}>8、简洁版</p>
            <BlockHeader title="分类标题" beforeTitle="" />

            <p style={style}>9、自定义后缀元素</p>
            <BlockHeader title="分类标题" addonAfter={<Button type="primary" onClick={() => alert('触发了点击事件')} size="small">点击</Button>} />
        </React.Fragment>
    );
}
