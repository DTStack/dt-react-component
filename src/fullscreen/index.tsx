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

export interface IFullscreenProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    themeDark?: boolean;
    target?: string;
    iconStyle?: object;
    fullIcon?: React.ReactNode;
    exitFullIcon?: React.ReactNode;
    onFullscreen?: (isFullScreen: boolean) => void;
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
    onFullscreen,
    ...other
}: IFullscreenProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const customIcon = isFullScreen ? exitFullIcon : fullIcon;
    useEffect(() => {
        const propsDom = document.getElementById(target);
        const domEle = propsDom || document.body;
        const isFullScreen = getIsFullScreen();
        isFullScreen && setIsFullScreen(isFullScreen);
        handleFullChange(domEle, () => {
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
            handleFullChange(domEle, null);
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
    const handlePressFullScreen = (evt: React.KeyboardEvent) => {
        evt.preventDefault();
        handleFullScreen();
    };

    const handleFullScreen = (): void => {
        onFullscreen?.(isFullScreen);
        if (isFullScreen) {
            handleExitFullscreen();
        } else {
            const propsDom = document.getElementById(target);
            const domEle = propsDom || document.body;
            handleRequestFullscreen(domEle);
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
    const handleFullChange = (
        domEle: DocumentElementWithFullscreen,
        callBack: (() => any) | null
    ) => {
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
    const handleExitFullscreen = () => {
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
    const handleRequestFullscreen = (domEle: DocumentElementWithFullscreen) => {
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
            onTrigger={handlePressFullScreen}
            keyMap={{
                70: true,
                91: true,
                16: true,
            }}
        >
            {customIcon ? (
                <span {...other} onClick={handleFullScreen}>
                    {customIcon}
                </span>
            ) : (
                <Button onClick={handleFullScreen}>
                    <MyIcon style={iconStyle} type={isFullScreen} themeDark={themeDark} />
                    {isFullScreen ? '退出全屏' : '全屏'}
                </Button>
            )}
        </KeyCombiner>
    );
}
