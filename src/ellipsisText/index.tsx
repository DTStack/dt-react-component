import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    ReactNode,
    CSSProperties,
} from 'react';
import { Tooltip } from 'antd';
import { AbstractTooltipProps, RenderFunction } from 'antd/lib/tooltip';
import classNames from 'classnames';
import Resize from '../resize';
import './style.scss';

export interface IEllipsisTextProps extends AbstractTooltipProps {
    /**
     * 文本内容
     */
    value: string | number | ReactNode | RenderFunction;
    /**
     * 提示内容
     * @default value
     */
    title?: string | ReactNode | RenderFunction;
    /**
     * 类名
     */
    className?: string;
    /**
     * 可视区宽度
     */
    maxWidth?: string | number;
    /**
     * 监听父元素大小的改变
     */
    isWatchParent?: boolean;
    /**
     * antd Tooltip
     */
    [propName: string]: any;
}

export interface NewHTMLElement extends HTMLElement {
    currentStyle?: CSSStyleDeclaration;
}

const DEFAULT_MAX_WIDTH = 120;

const EllipsisText = (props: IEllipsisTextProps) => {
    const {
        value,
        title = value,
        className,
        maxWidth,
        isWatchParent = false,
        ...otherProps
    } = props;

    const ellipsisRef = useRef<HTMLSpanElement>(null);
    const observerEle =
        isWatchParent && ellipsisRef.current?.parentElement
            ? ellipsisRef.current?.parentElement
            : null;

    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState<number | string>(DEFAULT_MAX_WIDTH);
    const [cursor, setCursor] = useState('default');

    useLayoutEffect(() => {
        onResize();
    }, [value, maxWidth]);

    /**
     * @description: 根据属性名，获取dom的属性值
     * @param {NewHTMLElement} dom
     * @param {string} attr
     * @return {*}
     */
    const getStyle = (dom: NewHTMLElement, attr: string) => {
        // Compatible width IE8
        // @ts-ignore
        return window.getComputedStyle(dom)[attr] || dom.currentStyle[attr];
    };

    /**
     * @description: 根据属性名，获取dom的属性值为number的属性。如： height、width。。。
     * @param {NewHTMLElement} dom
     * @param {string} attr
     * @return {*}
     */
    const getNumTypeStyleValue = (dom: NewHTMLElement, attr: string) => {
        return parseInt(getStyle(dom, attr));
    };

    /**
     * @description: 10 -> 10,
     * @description: 10px -> 10,
     * @description: 90% -> ele.width * 0.9
     * @description: calc(100% - 32px) -> ele.width - 32
     * @param {*} ele
     * @param {string & number} maxWidth
     * @return {*}
     */
    const transitionWidth = (ele: HTMLElement, maxWidth: string | number) => {
        const eleWidth = getActualWidth(ele);

        if (typeof maxWidth === 'number') {
            return maxWidth > eleWidth ? eleWidth : maxWidth; // 如果父元素的宽度小于传入的最大宽度，返回父元素的宽度
        }

        const numMatch = maxWidth.match(/^(\d+)(px)?$/);
        if (numMatch) {
            return +numMatch[1] > eleWidth ? eleWidth : +numMatch[1]; // 如果父元素的宽度小于传入的最大宽度，返回父元素的宽度
        }

        const percentMatch = maxWidth.match(/^(\d+)%$/);
        if (percentMatch) {
            return eleWidth * (parseInt(percentMatch[1]) / 100);
        }

        const relativeMatch = maxWidth.match(/^calc\(100% - (\d+)px\)$/);
        if (relativeMatch) {
            return eleWidth - parseInt(relativeMatch[1]);
        }

        return eleWidth;
    };

    const hideEleContent = (node: HTMLElement) => {
        node.style.display = 'none';
    };

    const showEleContent = (node: HTMLElement) => {
        node.style.display = 'inline-block';
    };

    /**
     * @description: 获取能够得到宽度的最近父元素宽度。行内元素无法获得宽度，需向上查找父元素
     * @param {HTMLElement} ele
     * @return {*}
     */
    const getContainerWidth = (ele: HTMLElement): number | string => {
        if (!ele) return DEFAULT_MAX_WIDTH;

        const { scrollWidth, parentElement } = ele;

        // 如果是行内元素，获取不到宽度，则向上寻找父元素
        if (scrollWidth === 0) {
            return getContainerWidth(parentElement!);
        }
        // 如果设置了最大宽度，则直接返回宽度
        if (maxWidth) {
            return transitionWidth(ele, maxWidth);
        }

        hideEleContent(ellipsisRef.current!);

        const availableWidth = getAvailableWidth(ele);

        return availableWidth < 0 ? 0 : availableWidth;
    };

    /**
     * @description: 获取dom元素的内容宽度
     * @param {HTMLElement} ele
     * @return {*}
     */
    const getRangeWidth = (ele: HTMLElement): any => {
        const range = document.createRange();
        range.selectNodeContents(ele);
        const rangeWidth = range.getBoundingClientRect().width;

        return rangeWidth;
    };

    /**
     * @description: 获取元素不包括 padding 的宽度
     * @param {HTMLElement} ele
     * @return {*}
     */
    const getActualWidth = (ele: HTMLElement) => {
        const width = ele.getBoundingClientRect().width;
        const paddingLeft = getNumTypeStyleValue(ele, 'paddingLeft');
        const paddingRight = getNumTypeStyleValue(ele, 'paddingRight');
        return width - paddingLeft - paddingRight;
    };

    /**
     * @description: 获取dom的可用宽度
     * @param {HTMLElement} ele
     * @return {*}
     */
    const getAvailableWidth = (ele: HTMLElement) => {
        const width = getActualWidth(ele);
        const contentWidth = getRangeWidth(ele);
        const ellipsisWidth = width - contentWidth;
        return ellipsisWidth;
    };

    /**
     * @description: 计算父元素的宽度是否满足内容的大小
     * @return {*}
     */
    const onResize = () => {
        const ellipsisNode = ellipsisRef.current!;
        const parentElement = ellipsisNode.parentElement!;
        const rangeWidth = getRangeWidth(ellipsisNode);
        const containerWidth = getContainerWidth(parentElement);
        const visible = rangeWidth > containerWidth;
        setVisible(visible);
        setWidth(containerWidth);
        const parentCursor = getStyle(parentElement, 'cursor');
        if (parentCursor !== 'default') {
            // 继承父元素的 hover 手势
            setCursor(parentCursor);
        } else {
            // 截取文本时，则改变 hover 手势为 pointer
            visible && setCursor('pointer');
        }
        showEleContent(ellipsisNode);
    };

    const renderText = useCallback(() => {
        const style: CSSProperties = {
            maxWidth: width,
            cursor,
        };
        return (
            <span
                ref={ellipsisRef}
                className={classNames('dtc-ellipsis-text', className)}
                style={style}
            >
                {typeof value === 'function' ? value() : value}
            </span>
        );
    }, [width, cursor, value]);

    return (
        <Resize onResize={onResize} observerEle={observerEle}>
            {visible ? (
                <Tooltip title={title} mouseEnterDelay={0} mouseLeaveDelay={0} {...otherProps}>
                    {renderText()}
                </Tooltip>
            ) : (
                renderText()
            )}
        </Resize>
    );
};

export default EllipsisText;
