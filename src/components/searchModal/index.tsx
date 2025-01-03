import React from 'react';

import { Modal, AutoComplete, Input, Row, Col } from 'antd';
import { Locale } from '../configProvider';
import useLocale from '../locale/useLocale';

export interface SearchModalProps {
    visible: boolean;
    dataSource: any[];
    title?: string | null;
    placeholder?: string;
    prefixRender?: React.ReactNode;
    locale?: Locale['SearchModal'];
    onChange?: (value: string) => void;
    onSelect?: (value: string, option: Object) => void;
    onCancel?: () => void;
    [propName: string]: any;
}
class SearchModal extends React.Component<SearchModalProps, any> {
    onCancel = () => {
        this.props.onCancel();
    };

    onChange = (value: any) => {
        const { onChange } = this.props;
        onChange?.(value);
    };

    onSelect = (value: any, option: Object) => {
        this.props?.onSelect(value, option);
    };

    render() {
        const {
            visible,
            title,
            prefixRender,
            dataSource = [],
            // bodyStyle,
            placeholder,
            locale,
            ...rest
        } = this.props;
        return (
            <Modal
                {...rest}
                visible={visible}
                onCancel={this.onCancel}
                footer={null}
                title={title || locale.title}
            >
                <Row align="middle" justify="center">
                    {prefixRender && (
                        <Col span={6} style={{ paddingRight: '12px' }}>
                            {prefixRender}
                        </Col>
                    )}
                    <Col span={prefixRender ? 18 : 24}>
                        <AutoComplete
                            dataSource={dataSource}
                            style={{ width: '100%', margin: '8px 0' }}
                            onSelect={this.onSelect}
                            onSearch={this.onChange}
                        >
                            <Input.Search placeholder={placeholder || locale.placeholder} />
                        </AutoComplete>
                    </Col>
                </Row>
            </Modal>
        );
    }
}

const SearchModalWrapper = (props: Omit<SearchModalProps, 'locale'>) => {
    const locale = useLocale('SearchModal');
    const { visible, dataSource, ...reset } = props;
    return <SearchModal {...reset} visible={visible} dataSource={dataSource} locale={locale} />;
};

export default SearchModalWrapper;
