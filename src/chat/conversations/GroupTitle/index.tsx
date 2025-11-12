import React from 'react';

import EllipsisText from '../../../ellipsisText';
import './index.scss';

export interface IGroupTitleProps {
    children?: React.ReactNode;
    prefixCls?: string;
}

const GroupTitle: React.FC<IGroupTitleProps> = (props) => {
    const { prefixCls = 'dtc-conversations' } = props;
    return (
        <div className={`${prefixCls}-title`}>
            {props.children && (
                <EllipsisText
                    value={props.children}
                    maxWidth="100%"
                    placement="right"
                    destroyTooltipOnHide
                    watchParentSizeChange
                />
            )}
        </div>
    );
};

export default GroupTitle;
