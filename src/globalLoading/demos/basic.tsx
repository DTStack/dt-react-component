import React from 'react';
import { GlobalLoading } from 'dt-react-component';

export default () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <GlobalLoading
                prefix="DtStack"
                loadingTitle="BatchWorks · 离线开发"
                mainBackground="linear-gradient(to bottom, #1890ff , #7dbcea )"
                titleColor="#eee"
                circleBackground="#eee"
            />
        </div>
    );
};
