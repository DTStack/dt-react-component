import React from 'react';
import { Button, Form, Input } from 'antd';
import shortid from 'shortid';

import FilterRules from '..';

const INIT_ROW_VALUES = {
    input: '',
};

const INIT_DATA = {
    key: shortid(),
    level: 0,
    formValues: {
        ...INIT_ROW_VALUES,
    },
};

type IRow = typeof INIT_ROW_VALUES;

const MyInput = ({
    input,
    rowKey,
    onChange,
}: {
    input?: string;
    rowKey?: string;
    onChange?: (key: string, values: Partial<IRow>) => void;
}) => <Input value={input} onChange={(e) => onChange?.(rowKey ?? '', { input: e.target.value })} />;

export default () => {
    const [form] = Form.useForm();

    return (
        <Form form={form}>
            <Button
                onClick={() => form.setFieldsValue({ condition: INIT_DATA })}
                style={{ marginBottom: 16 }}
            >
                添加数据
            </Button>
            <Form.Item name="condition">
                <FilterRules<IRow> component={<MyInput />} />
            </Form.Item>
            <Button onClick={async () => console.log(await form.validateFields())}>
                控制台查看数据
            </Button>
        </Form>
    );
};
