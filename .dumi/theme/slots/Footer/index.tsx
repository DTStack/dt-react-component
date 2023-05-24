import React from 'react';
import { Divider } from 'antd';
import { useSiteData } from 'dumi';
import './index.scss';

export default function Footer() {
    const { themeConfig } = useSiteData();
    return (
        <div className="dtc-footer">
            <div className="dtc-footer-links">
                <div className="dtc-footer-rows">
                    <span className="dtc-footer-rows-title">帮助</span>
                    <div className="dtc-footer-col">
                        <a
                            href="https://github.com/DTStack/dt-react-component/blob/master/CHANGELOG.md"
                            target="_blank"
                        >
                            更新日志
                        </a>
                    </div>
                    <div className="dtc-footer-col">
                        <a
                            href="https://github.com/DTStack/dt-react-component/issues"
                            target="_blank"
                        >
                            报告 Bug
                        </a>
                    </div>
                </div>
                <div className="dtc-footer-rows">
                    <span className="dtc-footer-rows-title">相关链接</span>
                    <div className="dtc-footer-col">
                        <a href="https://www.dtstack.com/" target="_blank">
                            袋鼠云
                        </a>
                    </div>
                    <div className="dtc-footer-col">
                        <a href="http://ued.dtstack.cn/" target="_blank">
                            数栈前端团队
                        </a>
                    </div>
                    <div className="dtc-footer-col">
                        <a href="https://4x.ant.design/index-cn" target="_blank">
                            Ant Design 4
                        </a>
                    </div>
                </div>
                <div className="dtc-footer-rows">
                    <span className="dtc-footer-rows-title">社区</span>
                    <div className="dtc-footer-col">
                        <a href="https://github.com/DTStack/dt-react-component" target="_blank">
                            Github
                        </a>
                    </div>
                </div>
            </div>
            <div className="dtc-footer-divider">
                <Divider />
            </div>
            <div className="dtc-footer-copyright">{themeConfig.footer}</div>
        </div>
    );
}
