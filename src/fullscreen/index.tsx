import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import KeyEventListener from '../keyEventListener';
import MyIcon from './icon';

const { KeyCombiner } = KeyEventListener;
declare let document: any;

interface DocumentElementWithFullscreen extends HTMLElement {
    requestFullscreen: any;
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullscreen?: () => void;
    mozRequestFullscreen?: () => void;
    onmsfullscreenchange?: (() => void) | null;
    onmozfullscreenchange?: (() => void) | null;
    onwebkitfullscreenchange?: (() => void) | null;
}
interface DocumentWithFullscreen extends Document {
    fullscreenElement: Element | null;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
}

export interface FullscreenProps {
    themeDark?: boolean;
    target?: string;
    iconStyle?: object;
    fullIcon?: React.ReactNode;
    exitFullIcon?: React.ReactNode;
    [propName: string]: any;
}
export interface FullscreenState {
    isFullScreen: boolean;
}
export default function Fullscreen({
    themeDark,
    target,
    fullIcon,
    exitFullIcon,
    iconStyle,
    ...other
}: FullscreenProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { onFullscreen } = other;
    const customIcon = isFullScreen ? exitFullIcon : fullIcon;
    useEffect(() => {
        const propsDom = document.getElementById(target);
        const domEle = propsDom || document.body;
        const isFullScreen = getIsFullScreen();
        isFullScreen && setIsFullScreen(isFullScreen);
        onFullChange(domEle, () => {
            let node: any;
            const doc: DocumentWithFullscreen = document;
            if (domEle.requestFullscreen) {
                node = doc.fullscreenElement;
            } else if (domEle.msRequestFullscreen) {
                // IE
                node = doc.msFullscreenElement;
            } else if (domEle.mozRequestFullscreen) {
                // Firefox (Gecko)
                node = doc.mozFullScreenElement;
            } else if (domEle.webkitRequestFullscreen) {
                // Webkit
                node = doc.webkitFullscreenElement;
            }
            setIsFullScreen(!!node);
            dispatchResizeEvent();
        });
        return () => {
            onFullChange(domEle, null);
        };
    }, []);
    /**
     * 在一定情况下chrome不会触发resize事件，所以手动触发一下resize。
     */
    const dispatchResizeEvent = () => {
        const event = new Event('resize');
        window.dispatchEvent(event);
    };
    /**
     * @description 键盘按下执行的回调函数
     * @param evt
     */
    const keyPressFullScreen = (evt: React.KeyboardEvent) => {
        evt.preventDefault();
        fullScreen();
    };

    const fullScreen = (): void => {
        onFullscreen?.(isFullScreen);
        if (isFullScreen) {
            exitFullscreen();
        } else {
            const propsDom = document.getElementById(target);
            const domEle = propsDom || document.body;
            requestFullscreen(domEle);
        }
    };
    /**
     * @returns 是否是全屏模式
     */
    const getIsFullScreen = (): boolean => {
        return !!(
            document.fullscreen ||
            document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.webkitFullScreen ||
            document.msFullScreen
        );
    };
    const onFullChange = (domEle: DocumentElementWithFullscreen, callBack: (() => any) | null) => {
        if (domEle.requestFullscreen) {
            domEle.addEventListener('fullscreenchange', () => callBack?.());
        } else if (domEle.msRequestFullscreen) {
            // IE
            domEle.addEventListener('msfullscreenchange', () => callBack?.());
        } else if (domEle.mozRequestFullscreen) {
            // Firefox (Gecko)
            domEle.addEventListener('mozfullscreenchange', () => callBack?.());
        } else if (domEle.webkitRequestFullscreen) {
            // Webkit
            domEle.addEventListener('webkitfullscreenchange', () => callBack?.());
        }
    };
    /**
     * 用于请求从全屏模式切换到窗口模式;
     */
    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            // 用于请求从全屏模式切换到窗口模式;
            document.exitFullscreen();
        } else if (document.mozExitFullscreen) {
            document.mozExitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };
    /**
     * @description 请求浏览器将特定元素置为全屏模式;
     * @param domEle
     */
    const requestFullscreen = (domEle: DocumentElementWithFullscreen) => {
        if (domEle.requestFullscreen) {
            domEle.requestFullscreen();
        } else if (domEle.msRequestFullscreen) {
            // IE
            domEle.msRequestFullscreen();
        } else if (domEle.mozRequestFullscreen) {
            // Firefox (Gecko)
            domEle.mozRequestFullscreen();
        } else if (domEle.webkitRequestFullscreen) {
            // Webkit
            domEle.webkitRequestFullscreen();
        }
    };

    return (
        <KeyCombiner
            onTrigger={keyPressFullScreen}
            keyMap={{
                70: true,
                91: true,
                16: true,
            }}
        >
            {customIcon ? (
                <span {...other} onClick={fullScreen}>
                    {customIcon}
                </span>
            ) : (
                <Button {...other} onClick={fullScreen}>
                    <MyIcon style={iconStyle} type={isFullScreen} themeDark={themeDark} />
                    {isFullScreen ? '退出全屏' : '全屏'}
                </Button>
            )}
        </KeyCombiner>
    );
}
