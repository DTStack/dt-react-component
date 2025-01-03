import React from 'react';
import { Input, message } from 'antd';
import { Locale } from '../configProvider';
import useLocale from '../locale/useLocale';
export interface EditInputProps {
    value?: string | number;
    onChange?: (e) => void;
    max?: number;
    locale?: Locale['EditInput'];
    [propName: string]: any;
}

export interface EditInputPropsStates {
    value: string | number;
}
class EditInput extends React.PureComponent<EditInputProps, EditInputPropsStates> {
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
        const { locale } = this.props;
        const value = e.target.value;
        const { max = 64 } = this.props;
        if (value && max && value.length > max) {
            message.warning(locale.description);
            this.setState({
                value: value.substring(0, max),
            });
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

const EditInputWrapper = (props: Omit<EditInputProps, 'locale'>) => {
    const locale = useLocale('EditInput');
    return <EditInput {...props} locale={locale} />;
};

export default EditInputWrapper;
