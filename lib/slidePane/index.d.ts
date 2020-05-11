import * as React from 'react';
export interface SlidePaneProps {
    children: any;
    visible: boolean;
    left?: string | number;
    width?: string | number;
    className?: string;
    style?: object;
    onClose?<HTMLSpanElement, MouseEvent>(): void;
}
declare class SlidePane extends React.Component<SlidePaneProps, any> {
    constructor(props: any);
    render(): JSX.Element;
}
export default SlidePane;
