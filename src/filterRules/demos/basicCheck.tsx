import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import shortid from 'shortid';

import FilterRules, { IComponentProps } from '..';

const INIT_ROW_VALUES = {
    input: '',
};

const INIT_DATA = {
    key: shortid(),
    level: 0,
    rowValues: {
        ...INIT_ROW_VALUES,
    },
};

type IRow = typeof INIT_ROW_VALUES;

const MyInput = ({ rowValues: { input }, key, disabled, onChange }: IComponentProps<IRow>) => (
    <Input
        value={input}
        onChange={(e) => onChange?.(key ?? '', { input: e.target.value })}
        disabled={disabled}
    />
);

export default () => {
    const [form] = Form.useForm();
    const [disabled, useDisabled] = useState(false);

    useEffect(() => {
        form.setFieldsValue({ condition: INIT_DATA });
    }, []);

    return (
        <Form form={form}>
            <Button style={{ marginBottom: 16 }} onClick={() => useDisabled(!disabled)}>
                {disabled ? '编辑' : '查看'}状态
            </Button>
            <Form.Item name="condition">
                <FilterRules<IRow>
                    component={(props) => <MyInput {...props} />}
                    disabled={disabled}
                />
            </Form.Item>
        </Form>
    );
};
