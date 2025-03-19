import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import classNames from 'classnames';

import { SendIcon } from '../icon';
import './index.scss';

interface IInputProps extends Omit<TextAreaProps, 'value' | 'onChange' | 'onSubmit'> {
    value?: string;
    button?: {
        disabled?: boolean;
    };
    onChange?: (str?: string) => void;
    onPressShiftEnter?: TextAreaProps['onPressEnter'];
    onSubmit?: (str?: string) => void;
}

export default function Input({
    onChange,
    onPressEnter,
    onPressShiftEnter,
    onSubmit,
    button,
    className,
    ...rest
}: IInputProps) {
    const handleChange: TextAreaProps['onChange'] = (e) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="dtc__chat__textarea__container">
            <AntdInput.TextArea
                className={classNames('dtc__chat__textarea', className)}
                {...rest}
                onChange={handleChange}
                onPressEnter={(e) => {
                    e.persist();
                    e.preventDefault();
                    if (e.shiftKey) {
                        onChange?.(rest.value + '\n');
                        onPressShiftEnter?.(e);
                    } else {
                        onPressEnter?.(e);
                    }
                }}
                autoSize={{
                    minRows: 2,
                    maxRows: 7,
                }}
            />
            <SendIcon
                gradient={!button?.disabled}
                className={classNames(
                    'dtc__chat__textarea__send',
                    button?.disabled && 'dtc__chat__textarea__send--disabled'
                )}
                onClick={() => !button?.disabled && onSubmit?.(rest.value)}
            />
        </div>
    );
}
