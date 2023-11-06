import React, { useEffect, useState } from 'react';
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
    isEdit,
    onChange,
}: {
    input?: string;
    rowKey?: string;
    isEdit?: boolean;
    onChange?: (key: string, values: Partial<IRow>) => void;
}) => (
    <Input
        value={input}
        onChange={(e) => onChange?.(rowKey ?? '', { input: e.target.value })}
        disabled={!isEdit}
    />
);

export default () => {
    const [form] = Form.useForm();
    const [isEdit, useIsEdit] = useState(true);

    useEffect(() => {
        form.setFieldsValue({ condition: INIT_DATA });
    }, []);

    return (
        <Form form={form}>
            <Button style={{ marginBottom: 16 }} onClick={() => useIsEdit(!isEdit)}>
                {isEdit ? '查看' : '编辑'}状态
            </Button>
            <Form.Item name="condition">
                <FilterRules<IRow> component={<MyInput />} isEdit={isEdit} />
            </Form.Item>
        </Form>
    );
};
