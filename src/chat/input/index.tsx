import React from 'react';
import { SendFilled } from '@dtinsight/react-icons';
import { Input as AntdInput } from 'antd';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import classNames from 'classnames';

import { SendColored } from '../icon';
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
                autoSize={{
                    maxRows: 7,
                }}
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
            />
            {button?.disabled ? (
                <SendFilled disabled className="dtc__chat__textarea__send" />
            ) : (
                <SendColored
                    className={classNames('dtc__chat__textarea__send')}
                    onClick={() => onSubmit?.(rest.value)}
                />
            )}
        </div>
    );
}
