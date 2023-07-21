import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Helmet, Link } from 'dumi';

import './index.scss';

export default function Homepage() {
    return (
        <>
            <Helmet>
                <title>dt-react-component</title>
                <meta property="og:title" content="dt-react-component" data-rh="true"></meta>
                <meta name="description" content="react-component" />
                <meta name="author" content="dtinsight UED" />
                <meta
                    name="keywords"
                    content="react,react-component,ui-library,typescript,ant-design"
                />
            </Helmet>
            <div className="dtc-homepage">
                <h1 className="dtc-homepage-title">dt-react-component</h1>
                <div className="dtc-homepage-badges">
                    <img src="https://img.shields.io/npm/v/dt-react-component.svg?style=flat" />
                    <img src="http://img.shields.io/npm/dm/dt-react-component.svg?style=flat" />
                </div>
                <div className="dtc-homepage-description">一个基于 ant design 的组件库</div>
                <div className="dtc-homepage-btnGroups">
                    <Link className="ant-btn" to="/guide">
                        快速开始
                    </Link>
                    <Button
                        icon={<GithubOutlined />}
                        href="https://github.com/DTStack/dt-react-component"
                    >
                        Github
                    </Button>
                </div>
            </div>
        </>
    );
}
