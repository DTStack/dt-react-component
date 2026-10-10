import React from 'react';

import EllipsisText from '../../../ellipsisText';
import { GroupTitleProps } from '../interface';
import './index.scss';

const GroupTitle: React.FC<GroupTitleProps> = (props) => {
    const { prefixCls = 'dtc__conversations' } = props;
    return (
        <div className={`${prefixCls}__title`}>
            {props.children && (
                <EllipsisText
                    value={props.children}
                    maxWidth="100%"
                    tooltip={{ placement: 'right', destroyTooltipOnHide: true }}
                    dynamic
                />
            )}
        </div>
    );
};

export default GroupTitle;
