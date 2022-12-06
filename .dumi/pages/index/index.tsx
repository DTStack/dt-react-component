import React from 'react';
import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './index.scss';

export default function Homepage() {
    return (
        <div className="dtc-homepage">
            <h1 className="dtc-homepage-title">dt-react-component</h1>
            <div className="dtc-homepage-badges">
                <img src="https://img.shields.io/npm/v/dt-react-component.svg?style=flat" />
                <img src="http://img.shields.io/npm/dm/dt-react-component.svg?style=flat" />
            </div>
            <div className="dtc-homepage-description">一个基于 ant design 的组件库</div>
            <div className="dtc-homepage-btnGroups">
                <Button type="primary" href="/guide">
                    Quick Start
                </Button>
                <Button
                    icon={<GithubOutlined />}
                    href="https://github.com/DTStack/dt-react-component"
                >
                    Github
                </Button>
            </div>
        </div>
    );
}
