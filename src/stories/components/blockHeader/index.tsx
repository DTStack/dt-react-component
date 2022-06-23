import React from 'react'
import { Icon, Tooltip } from 'antd';
import  BlockHeader  from '../../../components/blockHeader';

export default function BlockHeaderRender () {
    const style = {
        margin: '15px 0 10px'
    }

    return (
        <React.Fragment>
            <p style={style}>1、默认大标题</p>
            <BlockHeader
                title="分类标题"
            />

            <p style={style}>2、小标题</p>
            <BlockHeader
                title="小分类标题"
                isSmall
            />

            <p style={style}>3、标题 + icon，有说明文字</p>
            <BlockHeader
                title="分类标题"
                beforeTitle={<Icon type="pie-chart" />}
                afterTitle="说明文字"
            />

            <p style={style}>4、hover 显示说明文字</p>
            <BlockHeader
                title="分类标题"
                afterTitle={
                    <Tooltip title={'hover 才会显示说明文字哦~'}>
                        <Icon type="question-circle-o" style={{ cursor: 'pointer' }} />
                    </Tooltip>
                }
            />

            <p style={style}>5、无背景</p>
            <BlockHeader
                title="分类标题"
                showBackground={false}
                afterTitle={
                    <Tooltip title={'hover 才会显示说明文字哦~'}>
                        <Icon type="question-circle-o" style={{ cursor: 'pointer' }} />
                    </Tooltip>
                }
            />

            <p style={style}>6、展开/收起内容</p>
            <BlockHeader
                title="分类标题"
                onChange={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>

            <p style={style}>7、简洁版</p>
            <BlockHeader
                title="分类标题"
                beforeTitle=""
            />
        </React.Fragment>
    )
}
