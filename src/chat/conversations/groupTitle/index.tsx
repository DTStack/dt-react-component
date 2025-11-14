import React from 'react';

import EllipsisText from '../../../ellipsisText';
import { GroupTitleProps } from '../interface';
import './index.scss';

const GroupTitle: React.FC<GroupTitleProps> = (props) => {
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
