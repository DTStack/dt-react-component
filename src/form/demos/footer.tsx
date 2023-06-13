import React, { useMemo, useState } from 'react';
import { Form } from 'dt-react-component';
import { Button, Select } from 'antd';

export default () => {
    const [form] = Form.useForm();
    const data: { name?: number; [key: string]: any }[] = Form.useWatch('data', form) || [];

    const [rawOptions] = useState(
        new Array(10).fill(1).map((_, i) => ({ label: `test-${i}`, value: i }))
    );

    const options = useMemo(() => {
        const names = data.filter(Boolean).map((i) => i.name);
        return rawOptions.map((op) => ({
            ...op,
            disabled: names.includes(op.value),
        }));
    }, [
        data
            .filter(Boolean)
            .map((i) => i.name)
            .toString(),
    ]);

    return (
        <Form form={form} layout="vertical" initialValues={{ data: [{}] }} style={{ padding: 18 }}>
            <Form.Table
                bordered
                name="data"
                scroll={{
                    y: 280,
                }}
                columns={(_, { remove }) => [
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
                        render: () => <Select placeholder="Name" options={options} />,
                    },
                    {
                        key: 'op',
                        title: 'Configuration',
                        render: ({ name }) => (
                            <Button type="link" onClick={() => remove(name)}>
                                delete
                            </Button>
                        ),
                    },
                ]}
                size="small"
                footer={(_, { add }) => (
                    <Button type="link" onClick={() => add({})}>
                        add
                    </Button>
                )}
            />
        </Form>
    );
};
