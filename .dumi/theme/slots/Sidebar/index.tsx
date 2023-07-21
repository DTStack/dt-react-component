import React from 'react';
import { Tooltip } from 'antd';
import { NavLink, useSidebarData } from 'dumi';

import { useMobile } from '../../hooks';
import 'dumi/theme-default/slots/Sidebar/index.less';
import './index.scss';

export default function Sidebar() {
    const sidebar = useSidebarData();
    const isMobile = useMobile();

    if (!sidebar) return null;

    return (
        <div className="dumi-default-sidebar">
            {sidebar.map((item, i) => (
                <dl className="dumi-default-sidebar-group" key={String(i)}>
                    {item.title && <dt>{item.title}</dt>}
                    {item.children.map((child) => {
                        const link = (
                            <dd key={child.link}>
                                <NavLink to={child.link} title={child.title} end>
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
