import React, { useState } from 'react';
import { HamburgerOutlined, MenuCloseOutlined } from '@dtinsight/react-icons';
import { Button, Tooltip } from 'antd';
import { useRouteMeta } from 'dumi';
import LangSwitch from 'dumi/theme-default/slots/LangSwitch';
import Logo from 'dumi/theme-default/slots/Logo';
import Navbar from 'dumi/theme-default/slots/Navbar';
import RtlSwitch from 'dumi/theme-default/slots/RtlSwitch';
import SearchBar from 'dumi/theme-default/slots/SearchBar';

import GithubOutlined from '../../common/GithubOutlined';
import { useMobile } from '../../hooks';
import 'dumi/theme-default/slots/Header/index.less';
import './index.scss';

export default function Header() {
    const { frontmatter } = useRouteMeta();
    const isMobile = useMobile();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className="dumi-default-header"
            data-static={Boolean(frontmatter.hero) || undefined}
            data-mobile-active={showMenu || undefined}
            onClick={() => setShowMenu(false)}
        >
            <div className="dumi-default-header-content">
                <section className="dumi-default-header-left">
                    <Logo />
                </section>
                <section className="dumi-default-header-right">
                    <Navbar />
                    <div className="dumi-default-header-right-aside">
                        <SearchBar />
                        <LangSwitch />
                        <RtlSwitch />
                    </div>
                    {isMobile ? (
                        <a
                            className="dtc-github-icon"
                            href="https://github.com/DTStack/dt-react-component"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    ) : (
                        <Tooltip title="Github">
                            <Button
                                type="text"
                                className="dtc-github-icon"
                                icon={<GithubOutlined />}
                                href="https://github.com/DTStack/dt-react-component"
                                target="_blank"
                            />
                        </Tooltip>
                    )}
                </section>
                <button
                    type="button"
                    className="dumi-default-header-menu-btn"
                    onClick={(ev) => {
                        ev.stopPropagation();
                        setShowMenu((v) => !v);
                    }}
                >
                    {showMenu ? <MenuCloseOutlined /> : <HamburgerOutlined />}
                </button>
            </div>
        </div>
    );
}
