import React from 'react';
import { Input, type InputProps } from 'antd';

export interface IInternalInputProps extends InputProps {
    onPressEnterNative?: InputProps['onPressEnter'];
}

export default function InternalInput({
    onPressEnterNative,
    onPressEnter,
    ...rest
}: IInternalInputProps) {
    return (
        <Input
            {...rest}
            onPressEnter={(e) => {
                if (e.keyCode === 13) {
                    onPressEnter?.(e);
                }
                onPressEnterNative?.(e);
            }}
        />
    );
}
