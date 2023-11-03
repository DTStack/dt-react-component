import React, { useState } from 'react';
import { Tooltip } from 'antd';
import { NavLink, useSidebarData } from 'dumi';

import { useMobile } from '../../hooks';
import 'dumi/theme-default/slots/Sidebar/index.less';
import './index.scss';

function filterSideBar(arr: ReturnType<typeof useSidebarData>, search: string) {
    if (!search) return arr;
    return arr
        .map((item) => {
            const children = item.children.filter((child) =>
                child.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
            return { ...item, children };
        })
        .filter((i) => i.children.length);
}

export default function Sidebar() {
    const sidebar = useSidebarData();
    const isMobile = useMobile();
    const [search, setSearch] = useState('');

    const isRenderSearch = sidebar.some((s) => s.title === '组件');

    if (!sidebar) return null;

    return (
        <div className="dumi-default-sidebar">
            {isRenderSearch && (
                <input
                    className="dt-theme-filter"
                    placeholder="搜索组件..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            const firstLink = document.querySelector(
                                '.dumi-default-sidebar-group dd a'
                            );
                            if (firstLink) {
                                (firstLink as HTMLAnchorElement).click();
                            }
                        }
                    }}
                />
            )}
            {filterSideBar(sidebar, isRenderSearch ? search : '').map((item, i) => (
                <dl className="dumi-default-sidebar-group" key={String(i)}>
                    {item.title && <dt>{item.title}</dt>}
                    {item.children.map((child) => {
                        const link = (
                            <dd key={child.link}>
                                <NavLink
                                    to={child.link}
                                    title={child.title}
                                    end
                                    onClick={() => setSearch('')}
                                >
                                    {child.title}
                                </NavLink>
                            </dd>
                        );

                        if (isMobile) return link;
                        return (
                            <Tooltip title={child.title} placement="right" key={child.link}>
                                {link}
                            </Tooltip>
                        );
                    })}
                </dl>
            ))}
        </div>
    );
}
