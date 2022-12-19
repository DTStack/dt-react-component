import React, { PureComponent } from 'react';
import { Tooltip } from 'antd';
import Resize from '../resize';
import { AbstractTooltipProps, RenderFunction } from 'antd/lib/tooltip';

export interface EllipsisTextProps extends AbstractTooltipProps {
    value: string | number;
    title?: React.ReactNode | RenderFunction;
    className?: string;
    maxWidth?: string | number;
    [propName: string]: any;
}

const initialState = {
    visible: false,
    isEllipsis: false,
    // eslint-disable-next-line no-void
    actMaxWidth: void 0,
};

type State = Omit<typeof initialState, 'actMaxWidth'> & { actMaxWidth?: number };

export interface NewHTMLElement extends HTMLElement {
    currentStyle?: CSSStyleDeclaration;
}

const DEFAULT_MAX_WIDTH = 120;

export default class EllipsisText extends PureComponent<EllipsisTextProps, State> {
    ellipsisRef: HTMLElement | null = null;
    state = {
        ...initialState,
    };

    componentDidMount() {
        this.onResize();
    }

    componentDidUpdate(preProps: EllipsisTextProps) {
        const { value } = this.props;
        if (value !== preProps.value) {
            this.onResize();
        }
    }

    getRangeWidth = (ele: HTMLElement) => {
        const range = document.createRange();
        range.selectNodeContents(ele);
        const rangeWidth = range.getBoundingClientRect().width;
        return rangeWidth;
    };

    getStyle = (dom: NewHTMLElement, attr: any) => {
        // Compatible width IE8
        const stylePadding = window?.getComputedStyle(dom)[attr] || dom.currentStyle?.[attr] || '';

        return parseInt(stylePadding.replace('px', ''));
    };

    // The nearest block parent element
    getMaxWidth = (ele: HTMLElement): number => {
        // The default maximum width is 120px when the element does not exist
        if (!ele) return DEFAULT_MAX_WIDTH;
        const { scrollWidth, offsetWidth, parentElement } = ele;
        // If inline element, find the parent element
        if (scrollWidth === 0) {
            return this.getMaxWidth(parentElement!);
        }
        const ellipsisNode = this.ellipsisRef!;
        ellipsisNode.style.display = 'none';
        // Get the width of elements other than omitted text
        const rangeWidth = this.getRangeWidth(ele);
        const ellipsisWidth =
            offsetWidth -
            rangeWidth -
            this.getStyle(ele, 'paddingRight') -
            this.getStyle(ele, 'paddingLeft');

        return ellipsisWidth < 0 ? 0 : ellipsisWidth;
    };

    onResize = () => {
        const { maxWidth } = this.props;
        // if props has maxWidth don't have to calculate the text length
        if (maxWidth) return;
        const ellipsisNode = this.ellipsisRef!;
        const rangeWidth = this.getRangeWidth(ellipsisNode);
        const ellipsisWidth = this.getMaxWidth(ellipsisNode.parentElement!);
        ellipsisNode.style.display = 'inline-block';
        this.setState({
            actMaxWidth: ellipsisWidth,
            isEllipsis: rangeWidth > (maxWidth || ellipsisWidth),
        });
    };

    // handleVisibleChange = (visible: boolean) => {
    //   const { isEllipsis } = this.state;

    //   this.setState({
    //     visible: visible && isEllipsis
    //   });
    // };

    render() {
        const { actMaxWidth, isEllipsis } = this.state;
        const { title, value, className, maxWidth, ...other } = this.props;

        return (
            <Resize onResize={maxWidth ? undefined : this.onResize}>
                <Tooltip
                    title={title || value}
                    // visible={visible}
                    // onVisibleChange={this.handleVisibleChange}
                    {...other}
                >
                    <span
                        ref={(ref) => (this.ellipsisRef = ref)}
                        className={className}
                        style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'inline-block',
                            verticalAlign: 'bottom',
                            minWidth: '2em',
                            maxWidth: maxWidth || actMaxWidth,
                            cursor: isEllipsis ? 'pointer' : 'default',
                        }}
                    >
                        {value}
                    </span>
                </Tooltip>
            </Resize>
        );
    }
}
