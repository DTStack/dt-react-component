import React from 'react';
import { Button } from 'antd';
import { Flex } from 'dt-react-component';

export default () => {
    return (
        <Flex gap={4}>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
            <Button>button</Button>
        </Flex>
    );
};
