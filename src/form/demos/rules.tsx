import React, { useEffect, useState } from 'react';
import { Button, Input, message } from 'antd';
import { EllipsisText, Form } from 'dt-react-component';

import getMockData from './data';

export default () => {
    const [form] = Form.useForm();

    const [loading, setLoading] = useState(false);

    const getData = () => {
        setLoading(true);
        getMockData()
            .then((values) => {
                form.setFieldValue('data', values);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Form form={form} layout="vertical" style={{ height: 400 }}>
            <Form.Table
                name="data"
                loading={loading}
                scroll={{
                    y: 280,
                }}
                columns={[
                    {
                        key: 'name',
                        title: 'Name',
                        dataIndex: 'name',
                        required: true,
                        rules: [
                            {
                                required: true,
                                message: 'Please Input Name!',
                            },
                        ],
                        render: () => <Input placeholder="Name" />,
                    },
                    {
                        key: 'gender',
                        title: 'gender',
                        dataIndex: 'gender',
                        render: () => <EllipsisText maxWidth="95%" />,
                    },
                    {
                        key: 'address',
                        title: 'Address',
                        dataIndex: 'address',
                        required: true,
                        rules: [
                            ({ getFieldValue }, [name]) => ({
                                required: getFieldValue(['data', name, 'gender']) === 'male',
                                message: 'address is Required for male',
                            }),
                        ],
                        render: () => <Input placeholder="Address" />,
                    },
                    {
                        key: 'company',
                        title: 'Company',
                        dataIndex: 'company',
                        render: () => <Input placeholder="Company" />,
                    },
                    {
                        key: 'op',
                        title: 'Configuration',
                        render: ({ name }) => (
                            <Button
                                type="link"
                                onClick={() =>
                                    message.info(JSON.stringify(form.getFieldValue(['data', name])))
                                }
                            >
                                Configuration
                            </Button>
                        ),
                    },
                ]}
            />
        </Form>
    );
};
