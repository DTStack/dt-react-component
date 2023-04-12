import React from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';

const FormItem = Form.Item;

interface ItemType {
    item?: {
        label?: React.ReactNode;
        key: string | number | (string | number)[];
        required?: boolean;
        component?: React.ReactNode;
        tooltip?: React.ReactNode;
        extra?: React.ReactNode;
        options?: {
            className?: string;
            validateFirst?: boolean;
            validateTrigger?: string[];
            valuePropName?: string;
            normalize?: any;
        };
        rules?: Rule[];
        initialValue?: any;
    };
    layout?: {};
}

export default function RenderFormItem({ item, layout }: ItemType) {
    const {
        label,
        key,
        required,
        component,
        options = {},
        rules,
        initialValue,
        tooltip,
        extra,
    } = item;
    const {
        validateFirst = false,
        validateTrigger = 'onChange',
        valuePropName,
        normalize,
    } = options;
    return (
        <FormItem
            name={key}
            label={label}
            {...layout}
            initialValue={initialValue}
            className={options.className}
            rules={rules || [{ required, message: `${label} 为空` }]}
            validateFirst={validateFirst}
            validateTrigger={validateTrigger}
            valuePropName={valuePropName}
            normalize={normalize}
            tooltip={tooltip}
            extra={extra}
        >
            {component || <Input data-testid="test-input" />}
        </FormItem>
    );
}
