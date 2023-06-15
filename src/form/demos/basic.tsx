import React, { useEffect, useState } from 'react';
import { EllipsisText, Form } from 'dt-react-component';
import { Button, Input, message, Space } from 'antd';
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

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            console.log(values);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Space direction="vertical" size={8} align="center" style={{ marginBottom: 8 }}>
            <Form form={form} layout="vertical">
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
                            titleTooltip: 'This is Name',
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
                                        message.info(
                                            JSON.stringify(form.getFieldValue(['data', name]))
                                        )
                                    }
                                >
                                    Configuration
                                </Button>
                            ),
                        },
                    ]}
                />
            </Form>
            <Button type="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Space>
    );
};
