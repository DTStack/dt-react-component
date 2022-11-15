import React from 'react';

export interface TextMarkProps {
    text?: string;
    markText?: string;
    className?: string;
    [propName: string]: any;
}
class TextMark extends React.Component<TextMarkProps, any> {
    renderMark(text = '', markText = ''): React.ReactNode | string {
        const markTextIndex = text.indexOf(markText);
        if (markTextIndex !== -1) {
            return (
                <span>
                    {text.substring(0, markTextIndex)}
                    <mark>{markText}</mark>
                    {text.substring(markTextIndex + markText.length, text.length)}
                </span>
            );
        } else {
            return text;
        }
    }

    render() {
        const { text, markText, className = '', ...others } = this.props;
        return (
            <span className={className} {...others}>
                {this.renderMark(text, markText)}
            </span>
        );
    }
}

export default TextMark;
