import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item
interface ItemType {
    item?: {
        label?: React.ReactNode;
        key: string | number;
        required?: boolean;
        component?: React.ReactNode;
        options: {
            className?: string;
        };
        rules?: [];
    };
    layout?: {};
    getFieldDecorator: any;
}
export const RenderFormItem = ({ item, layout, getFieldDecorator }: ItemType) => {
    const { label, key, required, component, options = {}, rules } = item
    return (
        <FormItem key={key} label={label} colon {...layout} className={options.className} >
            {getFieldDecorator(key, {
                ...options,
                rules: rules || [{ required, message: `${label}为空` }]
            })(component || <Input data-testid='test-input' />)}
        </FormItem>
    )
}
