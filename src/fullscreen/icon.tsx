import classNames from 'classnames';
import React from 'react';
import './style.scss';

export interface IconProps {
    themeDark?: boolean;
    type?: boolean;
    className?: string;
    alt?: string;
    [propName: string]: any;
}
export default class Icon extends React.Component<IconProps, any> {
    getBase64ImgSrc = (type: boolean | undefined, themeDark: boolean | undefined): string => {
        let src = '';
        if (themeDark) {
            // 全屏状态
            if (type) {
                src =
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDY4NzE5NzYyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk1NzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTUuOTQ0IDM3MS4wODJoMjM5LjQ4N2MxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWOTUuNTk0YzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIxMS40ODhIOTUuOTQ0Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzIgMCAxNy42NzIgMTQuMzI3IDMyIDMyIDMyek05NS45NDQgNzE2LjAxNmgyMTEuNDg3djIxMS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlY2ODguMDE2YzAtMTkuODUxLTE2LjE0OS0zNi0zNi0zNkg5NS45NDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnMxNC4zMjcgMzIgMzIgMzJ6TTY4NC41MTMgOTU5LjQwMmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWNzE1LjkxNUg5MjhjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMycy0xNC4zMjctMzItMzItMzJINjg4LjUxM2MtMTkuODUxIDAtMzYgMTYuMTQ5LTM2IDM2djIzOS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyek02ODguNTEzIDM3MS42MzlIOTI4YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMnMtMTQuMzI3LTMyLTMyLTMySDcxNi41MTNWOTYuMTUxYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIzOS40ODhjMCAxOS44NSAxNi4xNDkgMzYgMzYgMzZ6IiBmaWxsPSIjQURBREFEIiBwLWlkPSI5NTc5Ij48L3BhdGg+PC9zdmc+';
            } else {
                src =
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDcwODIxNTI3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzM5LjQzMiA2My41OTRIOTkuOTQ0Yy0xOS44NTEgMC0zNiAxNi4xNDktMzYgMzZ2MjM5LjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEyNy41OTRoMjExLjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzIgMC4wMDEtMTcuNjczLTE0LjMyNi0zMi0zMS45OTktMzJ6TTMzOS40MzIgODk1LjUwM0gxMjcuOTQ0VjY4NC4wMTZjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMycy0zMiAxNC4zMjctMzIgMzJ2MjM5LjQ4N2MwIDE5Ljg1MSAxNi4xNDkgMzYgMzYgMzZoMjM5LjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJzLTE0LjMyNi0zMi0zMS45OTktMzJ6TTkyOCA2NTEuOTE1Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MjExLjQ4N0g2ODQuNTEzYy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJzMTQuMzI3IDMyIDMyIDMySDkyNGMxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWNjgzLjkxNWMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6TTkyNCA2NC4xNTFINjg0LjUxM2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyczE0LjMyNyAzMiAzMiAzMkg4OTZ2MjExLjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEwMC4xNTFjMC0xOS44NTEtMTYuMTQ5LTM2LTM2LTM2eiIgZmlsbD0iI0FEQURBRCIgcC1pZD0iMzczOCI+PC9wYXRoPjwvc3ZnPg==';
            }
        } else {
            // 全屏状态
            if (type) {
                src =
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDY4NzE5NzYyIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijk1NzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTUuOTQ0IDM3MS4wODJoMjM5LjQ4N2MxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWOTUuNTk0YzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIxMS40ODhIOTUuOTQ0Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzIgMCAxNy42NzIgMTQuMzI3IDMyIDMyIDMyek05NS45NDQgNzE2LjAxNmgyMTEuNDg3djIxMS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyczMyLTE0LjMyNyAzMi0zMlY2ODguMDE2YzAtMTkuODUxLTE2LjE0OS0zNi0zNi0zNkg5NS45NDRjLTE3LjY3MyAwLTMyIDE0LjMyNy0zMiAzMnMxNC4zMjcgMzIgMzIgMzJ6TTY4NC41MTMgOTU5LjQwMmMxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJWNzE1LjkxNUg5MjhjMTcuNjczIDAgMzItMTQuMzI3IDMyLTMycy0xNC4zMjctMzItMzItMzJINjg4LjUxM2MtMTkuODUxIDAtMzYgMTYuMTQ5LTM2IDM2djIzOS40ODdjMCAxNy42NzMgMTQuMzI3IDMyIDMyIDMyek02ODguNTEzIDM3MS42MzlIOTI4YzE3LjY3MyAwIDMyLTE0LjMyNyAzMi0zMnMtMTQuMzI3LTMyLTMyLTMySDcxNi41MTNWOTYuMTUxYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMydjIzOS40ODhjMCAxOS44NSAxNi4xNDkgMzYgMzYgMzZ6IiBmaWxsPSIjNTE1MTUxIiBwLWlkPSI5NTc5Ij48L3BhdGg+PC9zdmc+';
            } else {
                src =
                    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMyMDcwODIxNTI3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM3MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzM5LjQzMiA2My41OTRIOTkuOTQ0Yy0xOS44NTEgMC0zNiAxNi4xNDktMzYgMzZ2MjM5LjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEyNy41OTRoMjExLjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzIgMC4wMDEtMTcuNjczLTE0LjMyNi0zMi0zMS45OTktMzJ6TTMzOS40MzIgODk1LjUwM0gxMjcuOTQ0VjY4NC4wMTZjMC0xNy42NzMtMTQuMzI3LTMyLTMyLTMycy0zMiAxNC4zMjctMzIgMzJ2MjM5LjQ4N2MwIDE5Ljg1MSAxNi4xNDkgMzYgMzYgMzZoMjM5LjQ4N2MxNy42NzMgMCAzMi0xNC4zMjcgMzItMzJzLTE0LjMyNi0zMi0zMS45OTktMzJ6TTkyOCA2NTEuOTE1Yy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJ2MjExLjQ4N0g2ODQuNTEzYy0xNy42NzMgMC0zMiAxNC4zMjctMzIgMzJzMTQuMzI3IDMyIDMyIDMySDkyNGMxOS44NTEgMCAzNi0xNi4xNDkgMzYtMzZWNjgzLjkxNWMwLTE3LjY3My0xNC4zMjctMzItMzItMzJ6TTkyNCA2NC4xNTFINjg0LjUxM2MtMTcuNjczIDAtMzIgMTQuMzI3LTMyIDMyczE0LjMyNyAzMiAzMiAzMkg4OTZ2MjExLjQ4OGMwIDE3LjY3MyAxNC4zMjcgMzIgMzIgMzJzMzItMTQuMzI3IDMyLTMyVjEwMC4xNTFjMC0xOS44NTEtMTYuMTQ5LTM2LTM2LTM2eiIgZmlsbD0iIzUxNTE1MSIgcC1pZD0iMzczOCI+PC9wYXRoPjwvc3ZnPg==';
            }
        }
        return src;
    };
    render() {
        const { themeDark, type, ...otherProps } = this.props;
        const cls = classNames('dtc-fullscreen-icon', otherProps.className);
        const src = this.getBase64ImgSrc(type, themeDark);
        return <img {...otherProps} className={cls} alt={otherProps.alt} src={src} />;
    }
}
