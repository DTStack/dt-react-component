import React, { useEffect } from 'react';
import { DrawerProps, Drawer } from 'antd';
import classNames from 'classnames';

interface DragDrawerProps extends DrawerProps {
    draggable?: boolean;
    minWidth?: number;
    maxWidth?: number;
    onDrag?: Function;
}

const prefixCls = 'dtc-drag-drawer';
const DragDrawer: React.FC<DragDrawerProps> = function (props) {
    const {
        visible,
        draggable = true,
        closable = false,
        mask = false,
        minWidth = 720,
        maxWidth = 1256,
        bodyStyle = { padding: 0 },
        width: defaultWidth = 1000,
        children = '',
        onDrag,
        className = '',
    } = props;

    const assertWidth = (width) => {
        if (width > maxWidth) return maxWidth;
        if (width < minWidth) return minWidth;
        return width;
    };

    useEffect(() => {
        if (!visible || !draggable) return;
        document.addEventListener('drag', (e) => {
            if (e.clientX < 0) return;
            onDrag?.(e);
            const width = assertWidth(document.body.clientWidth - e.clientX);
            e['path'][6]['style']['width'] = `${width}px`;
            // document.getElementsByClassName('ant-drawer-content-wrapper')[0]['style']['width'] = `${width}px`;
        });
    }, [visible]);

    return (
        <Drawer
            mask={mask}
            bodyStyle={bodyStyle}
            width={defaultWidth}
            closable={closable}
            className={classNames(prefixCls, className)}
            {...props}
            placement="right"
        >
            {draggable && (
                <div className={classNames(prefixCls, className)}>
                    <img
                        id="dragDrawerIcon"
                        draggable
                        className={`${prefixCls}-icon`}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABICAYAAADCvBSdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDctMThUMTk6MjI6MzkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA3LTE5VDE0OjIxOjMxKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA3LTE5VDE0OjIxOjMxKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmVkNjQ1NjkxLTZjZTItNGE1OC05MTE1LTczNWMyYzAwYjM2MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDplZDY0NTY5MS02Y2UyLTRhNTgtOTExNS03MzVjMmMwMGIzNjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplZDY0NTY5MS02Y2UyLTRhNTgtOTExNS03MzVjMmMwMGIzNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkNjQ1NjkxLTZjZTItNGE1OC05MTE1LTczNWMyYzAwYjM2MCIgc3RFdnQ6d2hlbj0iMjAyMi0wNy0xOFQxOToyMjozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bdP3LgAAAS1JREFUSIntlbFKxEAQhr/Zu7M4rtJCsJE0ioUPIL6DjW/hA1wrWGrtW9j4EPoM4ZqAoI0oIoeNuL9FNqeEuJsUgsj+S5jNsN/MZLPMWrm4K4FNYEfSo5ndA1NgG3ilpTFQAGvAKPi2gnXtxY3zOcx9sG/B6idgkDKQgQxkYJjGsWBdjSmW4b0zSgRYIhWG7RtfI/UNG0inBjRPCqgwjnE6xAmcksASQJ4L78H7dIYRdVc/cGLX9SgJmt0yzkW6pJUER5LtDfrTZlz+9lmykyHAtRllH2ACYGZzKX5aAT6oy7710gLSwKyOzry5hVNAgbhCdmNYL+BJ0pm+3fExYIZZFQKvFNulSZczlsFbh/MP9qUMZCAD/w9Yb8HTYLvaEg6ogBfq1g7wEN59F/AJW+9JSRQA9PAAAAAASUVORK5CYII="
                        alt=""
                    />
                </div>
            )}

            {children}
        </Drawer>
    );
};

export default DragDrawer;
