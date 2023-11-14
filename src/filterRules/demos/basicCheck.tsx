import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';

import { INIT_DATA, INIT_ROW_VALUES, IRow } from './constants';

const MyInput = ({ rowValues: { input }, rowKey, disabled, onChange }: IComponentProps<IRow>) => (
    <Input
        value={input}
        onChange={(e) => onChange?.(rowKey, { input: e.target.value })}
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
                    initValues={INIT_ROW_VALUES}
                />
            </Form.Item>
        </Form>
    );
};
