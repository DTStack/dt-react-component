import React from 'react';
import { Checkbox, Dropdown, Button, Divider } from 'antd';
import { isEqual } from 'lodash';
import classNames from 'classnames';
import useLocale, { Locale } from '../locale/useLocale';

interface Opts {
    label?: string;
    value?: string | number;
    disabled?: boolean;
}
interface MulSelectDropdownProps {
    className?: string;
    popupContainer?: any;
    onChange?: (checked) => void;
    options: Opts[];
    value: any[];
    onOk: (sel) => void;
    renderNode: Function;
    cancelText?: string;
    okText?: string;
    locale?: Locale['MulSelectDropdown'];
}

interface MulSelectDropdownStates {
    visible: boolean;
    selectVal: any[];
    allKeys: Array<string | number>;
    disabledKeys: Array<string | number>;
    indeterminate: boolean;
}

class MulSelectDropdown extends React.Component<
    MulSelectDropdownProps,
    MulSelectDropdownStates
> {
    state: MulSelectDropdownStates = {
        visible: false,
        selectVal: [],
        allKeys: [],
        indeterminate: false,
        disabledKeys: [],
    };

    componentDidMount() {
        const { options, value } = this.props;
        const allKeys = [];
        const disabledKeys = [];
        options.forEach((item: any) => {
            allKeys.push(item.value);
            item.disabled && disabledKeys.push(item.value);
        });
        this.setState(
            {
                allKeys,
                disabledKeys,
            },
            () => {
                this.handleCheckboxChange(value);
            }
        );
    }

    componentDidUpdate(preProps) {
        const { value } = this.props;
        if (!isEqual(value, preProps.value)) {
            this.handleCheckboxChange(value);
        }
    }

    handleCheckboxChange = (checkedValue: any) => {
        const { allKeys } = this.state;
        this.setState({
            selectVal: checkedValue,
            indeterminate: Boolean(checkedValue.length && checkedValue.length !== allKeys.length),
        });
        this.props.onChange && this.props.onChange(checkedValue);
    };

    handleCheckAllChange = () => {
        const { allKeys, selectVal, disabledKeys } = this.state;
        const newSelectVal = selectVal.length === allKeys.length ? disabledKeys : [...allKeys];
        this.setState({
            selectVal: newSelectVal,
            indeterminate: false,
        });
        this.props.onChange && this.props.onChange(newSelectVal);
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleOk = () => {
        const { selectVal } = this.state;
        this.handleCancel();
        this.props.onOk(selectVal);
    };

    handleOpen = () => {
        this.setState({
            visible: true,
        });
    };

    render() {
        const {
            popupContainer = () => document.body,
            options = [],
            className = '',
            locale,
            renderNode:propRenderNode,
            cancelText,
            okText,
        } = this.props;
        const { visible, selectVal, indeterminate, allKeys } = this.state;
        const defaultRenderNode = (openFun) => <span onClick={openFun}>{locale.open}</span>;
        const renderNode = propRenderNode || defaultRenderNode;

        const overlay = (
            <div className="dtc-option-select-overlay">
                <Checkbox.Group onChange={this.handleCheckboxChange} value={selectVal}>
                    <div className="dtc-option-select-overlay-menu">
                        {options.map((item: Opts) => (
                            <div className="dtc-option-select-overlay-row" key={item.value}>
                                <Checkbox disabled={item.disabled} value={item.value}>
                                    {item.label}
                                </Checkbox>
                            </div>
                        ))}
                    </div>
                </Checkbox.Group>
                <Divider />
                <div className="dtc-option-select-overlay-row footer-box">
                    <Checkbox
                        onChange={this.handleCheckAllChange}
                        checked={selectVal.length === allKeys.length}
                        indeterminate={indeterminate}
                    >
                        {locale.selectAll}
                    </Checkbox>
                    <span>
                        <Button
                            size="small"
                            style={{ marginRight: 8 }}
                            data-testid="select_cancel_btn"
                            onClick={this.handleCancel}
                        >
                            {cancelText || locale.cancel}
                        </Button>
                        <Button
                            type="primary"
                            size="small"
                            data-testid="select_ok_btn"
                            onClick={this.handleOk}
                        >
                            {okText || locale.okText}
                        </Button>
                    </span>
                </div>
            </div>
        );
        return (
            <Dropdown
                visible={visible}
                trigger={['click']}
                overlay={overlay}
                overlayClassName={classNames('dtc-mul-select-dropdown', className)}
                getPopupContainer={popupContainer}
                onVisibleChange={(visible) => {
                    !visible && this.handleCancel();
                }}
            >
                {renderNode(this.handleOpen)}
            </Dropdown>
        );
    }
}


const MulSelectDropdownWrapper = (props: Omit<MulSelectDropdownProps, 'locale'>) => {
    const locale = useLocale("MulSelectDropdown");
    return <MulSelectDropdown {...props} locale={locale} />;
};

export default MulSelectDropdownWrapper;
