import React from 'react';
import { Button, Modal } from 'antd';

import useModal from '..';

export default () => {
    const modal = useModal();

    return (
        <>
            <div>{JSON.stringify(modal.record) || 'undefined'}</div>
            <Button
                type="primary"
                onClick={() => {
                    modal.open({ id: 1, data: 'I am data!' });
                }}
            >
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                visible={modal.visible}
                onOk={modal.close}
                onCancel={modal.close}
            >
                <p>{JSON.stringify(modal.record)}</p>
            </Modal>
        </>
    );
};
