import React, { useEffect, useState } from 'react';
import { EllipsisText, Form } from 'dt-react-component';
import { Button, Input, message, Select } from 'antd';
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
                        required: true,
                        render: () => (
                            <Select
                                options={[
                                    { label: 'female', value: 'female' },
                                    {
                                        label: 'male',
                                        value: 'male',
                                    },
                                ]}
                            />
                        ),
                    },
                    {
                        key: 'weight',
                        title: 'weight',
                        dataIndex: 'weight',
                        dependencies: ([name]) => [['data', name, 'gender']],
                        render: ({ name }, _, form) => {
                            return form?.getFieldValue?.(['data', name, 'gender']) === 'female' ? (
                                '--'
                            ) : (
                                <EllipsisText maxWidth="95%" />
                            );
                        },
                    },
                    {
                        key: 'address',
                        title: 'Address',
                        dataIndex: 'address',
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
