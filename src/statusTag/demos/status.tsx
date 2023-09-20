import React from 'react';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <>
            <StatusTag type="run" showBorder={false} />
            <StatusTag type="success" showBorder={false} />
            <StatusTag type="stopped" showBorder={false} />
            <StatusTag type="warning" showBorder={false} />
        </>
    );
};
