import * as React from 'react';
import { Tooltip, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import useLocale from '../locale/useLocale';
import { Locale } from '../configProvider';

export interface CopyIconProps {
    text: string;
    style?: React.CSSProperties;
    title?: string;
    customRender?: React.ReactNode;
    locale?: Locale['CopyIcon'];
}

class CopyIcon extends React.Component<CopyIconProps, any> {
    fakeHandlerCallback: () => void;
    fakeHandler: EventListener | void;
    fakeElem: HTMLTextAreaElement;

    componentWillUnmount() {
        this.removeFake();
    }

    copy = (value: any) => {
        this.removeFake();

        this.fakeHandlerCallback = () => this.removeFake();
        this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback);

        this.fakeElem = this.createTextareaElement(value);

        document.body.appendChild(this.fakeElem);
        this.fakeElem.select();

        this.copyText();
    };

    createTextareaElement = (value: string) => {
        const textareaDOm = document.createElement('textarea');
        // Prevent zooming on iOS
        textareaDOm.style.fontSize = '12pt';

        // Reset box model
        textareaDOm.style.border = '0';
        textareaDOm.style.padding = '0';
        textareaDOm.style.margin = '0';

        // Move element out of screen horizontally
        textareaDOm.style.position = 'absolute';
        textareaDOm.style.left = '-9999px';

        // Move element to the same position vertically
        const yPosition = window.pageYOffset || document.documentElement.scrollTop;

        textareaDOm.style.top = `${yPosition}px`;

        textareaDOm.setAttribute('readonly', '');
        textareaDOm.value = value;
        return textareaDOm;
    };

    removeFake() {
        if (this.fakeHandler) {
            document.body.removeEventListener('click', this.fakeHandlerCallback);
            this.fakeHandler = null;
            this.fakeHandlerCallback = null;
        }

        if (this.fakeElem) {
            document.body.removeChild(this.fakeElem);
            this.fakeElem = null;
        }
    }

    copyText() {
        let succeeded;

        try {
            succeeded = document.execCommand('copy');
        } catch (err) {
            succeeded = false;
        }

        this.handleResult(succeeded);
    }

    handleResult(succeeded: any) {
        const { locale } = this.props;
        if (succeeded) {
            message.success(locale.copied);
        } else {
            message.error(locale.notSupport);
        }
    }

    render() {
        let { customRender, text, style, title, locale, ...rest } = this.props;

        style = {
            cursor: 'pointer',
            fontSize: '13px',
            ...style,
        };

        return customRender ? (
            <span onClick={this.copy.bind(this, text)}>{customRender}</span>
        ) : (
            <Tooltip placement="right" title={title || locale.copy}>
                <CopyOutlined
                    {...rest}
                    className="c-copyIcon"
                    onClick={this.copy.bind(this, text)}
                    style={style}
                />
            </Tooltip>
        );
    }
}

const CopyIconWrapper = (props: Omit<CopyIconProps, 'locale'>) => {
    const locale = useLocale('CopyIcon');
    return <CopyIcon {...props} locale={locale} />;
};

export default CopyIconWrapper;
