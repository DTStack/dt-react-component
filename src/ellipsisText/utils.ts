export interface NewHTMLElement extends HTMLElement {
    currentStyle?: CSSStyleDeclaration;
}
type Nullable<T> = T | undefined | null;

/**
 * @description: 根据属性名，获取 dom 的属性值
 * @param {NewHTMLElement} dom
 * @param {string} attr
 * @return {*}
 */
export const getStyle = (dom: NewHTMLElement, attr: string) => {
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
export const getNumTypeStyleValue = (dom: NewHTMLElement, attr: string) => {
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
export const transitionWidth = (ele: HTMLElement, maxWidth: string | number) => {
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

/**
 * @description: 获取 dom 元素的内容宽度
 * @param {HTMLElement} ele
 * @return {*}
 */
export const getRangeWidth = (ele: HTMLElement): any => {
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
export const getActualWidth = (ele: HTMLElement) => {
    const width = ele.getBoundingClientRect().width;
    const paddingLeft = getNumTypeStyleValue(ele, 'paddingLeft');
    const paddingRight = getNumTypeStyleValue(ele, 'paddingRight');

    return width - paddingLeft - paddingRight;
};

/**
 * @description: 获取 dom 的可用宽度
 * @param {HTMLElement} ele
 * @return {*}
 */
export const getAvailableWidth = (ele: HTMLElement) => {
    const width = getActualWidth(ele);
    const contentWidth = getRangeWidth(ele);
    const ellipsisWidth = width - contentWidth;

    return ellipsisWidth;
};

/**
 * @description 获取/向上获取有效的父元素（非行内元素）
 * @param {Nullable<HTMLElement>} ele
 * @returns {Nullable<HTMLElement>}
 */
export const getValidContainerElement = (ele: Nullable<HTMLElement>): Nullable<HTMLElement> => {
    if (!ele) return ele;

    const { scrollWidth, parentElement } = ele;

    // 如果是行内元素，获取不到宽度，则向上寻找父元素
    if (scrollWidth === 0) {
        return getValidContainerElement(parentElement!);
    }

    return ele;
};
