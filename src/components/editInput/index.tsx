import React from 'react';
import { Input, message } from 'antd';
export interface EditInputProps {
    value?: string | number;
    onChange?: (e) => void;
    max?: number;
    [propName: string]: any;
}

export interface EditInputPropsStates {
    value: string | number;
}
export default class EditInput extends React.PureComponent<EditInputProps, EditInputPropsStates> {
    constructor(props: EditInputProps) {
        super(props);
        this.state = {
            value: '',
        };
    }
    componentDidMount() {
        this.setState({
            value: this.props.value,
        });
    }
    componentDidUpdate(preProps: EditInputProps) {
        const { value } = this.props;
        if (value != preProps.value) {
            this.setState({
                value,
            });
        }
    }
    onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e);
    };
    onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        const { max } = this.props;
        if (value && max && value.length > max) {
            message.warning(`字符长度不可超过${max}`);
        } else {
            this.setState({
                value,
            });
        }
    };
    render() {
        const { value } = this.state;
        return (
            <Input
                className="input"
                {...this.props}
                value={value}
                onChange={this.onChangeValue}
                onBlur={this.onChangeInput}
                data-testid="test-input"
            />
        );
    }
}
