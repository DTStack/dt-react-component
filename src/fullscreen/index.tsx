import React, { CSSProperties, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@dtinsight/react-icons';

import Button from '../button';
import KeyEventListener from '../keyEventListener';
import useLocale from '../locale/useLocale';
import './index.scss';

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
    extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    target?: string;
    iconStyle?: CSSProperties;
    fullIcon?: ReactNode;
    exitFullIcon?: ReactNode;
    onFullscreen?: (isFullScreen: boolean) => void;
}

export default function Fullscreen({
    target,
    fullIcon,
    exitFullIcon,
    iconStyle,
    onFullscreen,
    ...other
}: IFullscreenProps) {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const locale = useLocale('Fullscreen');

    const customIcon = isFullScreen ? exitFullIcon : fullIcon;

    useEffect(() => {
        const propsDom = document.getElementById(target);
        const domEle = propsDom || document.body;
        const isFullScreen = getIsFullScreen();
        isFullScreen && setIsFullScreen(isFullScreen);
        const handleFullChangeCallback = () => {
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
        };
        handleFullChange(domEle, handleFullChangeCallback, 'add');
        return () => {
            handleFullChange(domEle, handleFullChangeCallback, 'remove');
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
        callBack: () => any,
        type: 'add' | 'remove'
    ) => {
        const isAdd = type === 'add';
        if (domEle.requestFullscreen) {
            isAdd
                ? domEle.addEventListener('fullscreenchange', callBack, false)
                : domEle.removeEventListener('fullscreenchange', callBack, false);
        } else if (domEle.msRequestFullscreen) {
            // IE
            isAdd
                ? domEle.addEventListener('msfullscreenchange', callBack, false)
                : domEle.removeEventListener('msfullscreenchange', callBack, false);
        } else if (domEle.mozRequestFullscreen) {
            // Firefox (Gecko)
            isAdd
                ? domEle.addEventListener('mozfullscreenchange', callBack, false)
                : domEle.removeEventListener('mozfullscreenchange', callBack, false);
        } else if (domEle.webkitRequestFullscreen) {
            // Webkit
            isAdd
                ? domEle.addEventListener('webkitfullscreenchange', callBack, false)
                : domEle.removeEventListener('webkitfullscreenchange', callBack, false);
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
        <div className="dtc-fullscreen">
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
                    <Button
                        onClick={handleFullScreen}
                        icon={
                            isFullScreen ? (
                                <FullscreenExitOutlined style={iconStyle} />
                            ) : (
                                <FullscreenOutlined style={iconStyle} />
                            )
                        }
                    >
                       {isFullScreen ? locale.exitFull : locale.full}
                    </Button>
                )}
            </KeyCombiner>
        </div>
    );
}
