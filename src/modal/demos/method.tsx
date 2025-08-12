import React from 'react';
import { Button, Space } from 'antd';
import { Modal } from 'dt-react-component';

const info = () => {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() {},
    });
};

const success = () => {
    Modal.success({
        title: 'This is an success message',
        content: 'some messages...some messages...',
    });
};

const error = () => {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
};

const warning = () => {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
};

const confirm = () => {
    Modal.confirm({
        title: 'This is a confirm message',
        content: 'some messages...some messages...',
    });
};

const handleDelete = () => {
    Modal.delete({
        title: 'This is a delete message',
        content: 'some messages...some messages...',
    });
};

const Method: React.FC = () => (
    <Space wrap>
        <Button onClick={info}>Info</Button>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
        <Button onClick={confirm}>Confirm</Button>
        <Button onClick={handleDelete}>Delete</Button>
    </Space>
);

export default Method;
