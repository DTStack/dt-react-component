import React from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item
interface ItemType {
    item?: {
        label?: string;
        key: string;
        required?: boolean;
        component?: React.FC;
        options: {
            className?: string;
        };
        rules?: [];
    };
    layout?: {};
    getFieldDecorator: any;
}
export const renderFormItem = ({ item, layout, getFieldDecorator }: ItemType) => {
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
