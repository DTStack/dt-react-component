import * as React from 'react'
const contextPrefix = 'dtc-context-menu';

export interface ContextMenuProps {
    targetClassName?: string;
    onChange?: Function;
    [propName: string]: any;
}

export class ContextMenuItem extends React.Component<any, any> {
    render () {
        return (
            <li {...this.props}
                className={`${contextPrefix}-context-list_li`}>
                <a className={`${contextPrefix}-context-list_a`}
                    data-value={this.props.value}>
                    {this.props.children}
                </a>
            </li>
        )
    }
}

export default class ContextMenu extends React.Component<ContextMenuProps, any> {
    constructor (props: any) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this)
        this.removeMenu = this.removeMenu.bind(this);
    }
    static ContextMenuItem = ContextMenuItem;

    _contextMenus: any = [];
    selfEle: any;

    componentDidMount () {
        document.addEventListener('contextmenu', this.toggleMenu, false);
        document.addEventListener('click', this.removeMenu, false);
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.removeMenu, false);
        document.removeEventListener('contextmenu', this.toggleMenu, false);
    }

    toggleMenu (evt: any) {
        const { targetClassName, onChange } = this.props
        const selfEle = this.selfEle
        if (!selfEle) return;
        const parent = this.findParent(evt.target, targetClassName);

        if (parent) {
            this.hideAll()

            let style = selfEle.style;
            style.display = 'block';

            const pointerY = evt.clientY;
            const pointerX = evt.clientX;
            const viewHeight = document.body.offsetHeight; // 可视区高度
            const distanceToBottom = viewHeight - pointerY;
            const menuHeight = selfEle.offsetHeight;
            const menuTop = distanceToBottom > menuHeight ? pointerY : pointerY - menuHeight;

            style.cssText = `
                top: ${menuTop}px;
                left: ${pointerX}px;
                display: block;
            `
            if (onChange) {
                onChange(parent)
            }
            evt.preventDefault();
        }
    }

    hideAll () {
        const allEles: any = document.querySelectorAll(`.${contextPrefix}`)
        for (let i = 0; i < allEles.length; i++) {
            allEles[i].style.display = 'none';
        }
    }

    closeMenu (evt: any) {
        if (!this.selfEle) return;
        const style = this.selfEle.style;
        style.display = 'none';
    }

    removeMenu (evt: any) {
        if (!this.selfEle) return
        const style = this.selfEle.style;
        style.display = 'none';
    }

    findParent (child: any, selector: any) {
        try {
            if (!selector || !child) return;
            selector = selector.toLowerCase();
            let node = child;
            while (node) {
                if (node.nodeType === 1) { // just hand dom element
                    const className = node.getAttribute('class');
                    if (className && className.includes(selector)) return node;
                }
                node = node.parentNode;
            }
        } catch (e) {
            throw new Error(e)
        }
        return null;
    }

    render () {
        return (
            <div ref={(e: any) => { this.selfEle = e } } className={contextPrefix} style={{ display: 'none' }}>
                <ul className={`${contextPrefix}-context-menu_list`}>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}
/* eslint-disable */
