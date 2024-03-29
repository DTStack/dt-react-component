import React, { Component, ReactNode } from 'react';
import { Divider } from 'antd';
import { EllipsisText } from 'dt-react-component';

const element = (
    <>
        我是很长长长长长长
        <span
            style={{
                color: 'red',
            }}
        >
            长长长长长长长长长长长长长长
        </span>
        长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本
    </>
);

const useEllipsisText = () => element;

class WithEllipsisText extends Component {
    render(): ReactNode {
        return element;
    }
}

export default () => {
    return (
        <>
            <Divider orientation="left">Element</Divider>
            <div
                style={{
                    width: '70%',
                }}
            >
                <EllipsisText value={useEllipsisText} />
            </div>
            <Divider orientation="left">Hooks</Divider>
            <div
                style={{
                    width: '50%',
                }}
            >
                <EllipsisText value={useEllipsisText} />
            </div>
            <Divider orientation="left">Class</Divider>
            <div
                style={{
                    width: '20%',
                }}
            >
                <EllipsisText value={<WithEllipsisText />} />
            </div>
        </>
    );
};
