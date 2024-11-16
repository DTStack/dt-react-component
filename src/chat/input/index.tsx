import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import classNames from 'classnames';

interface IInputProps extends Omit<TextAreaProps, 'onChange'> {
    onChange?: (str: string) => void;
    onPressShiftEnter?: TextAreaProps['onPressEnter'];
}

export default function Input({
    onChange,
    onPressEnter,
    onPressShiftEnter,
    className,
    ...rest
}: IInputProps) {
    const handleChange: TextAreaProps['onChange'] = (e) => {
        onChange?.(e.target.value);
    };

    return (
        <AntdInput.TextArea
            className={classNames('aigc-textarea', className)}
            {...rest}
            onChange={handleChange}
            onPressEnter={(e) => {
                e.persist();
                e.preventDefault();
                if (e.shiftKey) {
                    onChange?.(rest.value + '\n');
                    onPressShiftEnter?.(e);
                }
                onPressEnter?.(e);
            }}
            autoSize={{
                minRows: 1,
                maxRows: 8,
            }}
        />
    );
}
