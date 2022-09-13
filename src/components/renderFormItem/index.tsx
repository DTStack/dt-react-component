import React from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';

const FormItem = Form.Item;

interface ItemType {
    item?: {
        label?: React.ReactNode;
        key: string | number;
        required?: boolean;
        component?: React.ReactNode;
        tooltip?: React.ReactNode | string;
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
    } = item;
    const {
        validateFirst = false,
        validateTrigger = 'onChange',
        valuePropName,
        normalize,
    } = options;
    return (
        <FormItem
            key={key}
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
        >
            {component || <Input data-testid="test-input" />}
        </FormItem>
    );
}
