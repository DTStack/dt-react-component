import React from 'react';
import type { HotTableProps } from '@handsontable/react';
import { HotTable } from '@handsontable/react';
import classNames from 'classnames';
import 'handsontable/languages/zh-CN.js';

import CopyUtils from '../utils/copy';
import 'handsontable/dist/handsontable.full.css';

type IOptions = HotTableProps & {
    // 右击右键菜单中展示的选项 复制值/复制列名/复制列名和值 按钮 */
    copyTypes?: Array<'copyData' | 'copyHeaders' | 'copyHeadersAndData'>;
};

export interface ISpreadSheetProps {
    data: Array<Array<string | null | number>>;
    columns: any;
    className?: string;
    options?: IOptions;
    /** 结果数据每一列的字段类型，由服务端返回 */
    columnTypes?: Array<{
        /** 字段名称 */
        name: string;
        /** 字段类型 */
        type: string;
    }>;
    hotTableInstanceRef?: (instance: any) => void;
}

class SpreadSheet extends React.PureComponent<ISpreadSheetProps, any> {
    tableRef: any = React.createRef();
    copyUtils = new CopyUtils();
    _renderTimer: any;

    componentDidMount() {
        this.props.hotTableInstanceRef?.(this.tableRef.current);
    }

    componentDidUpdate(prevProps: any, _prevState: any) {
        if (prevProps != this.props) {
            if (this.tableRef) {
                this.removeRenderClock();
                this._renderTimer = setTimeout(() => {
                    this.tableRef.current.hotInstance.render();
                }, 100);
            }
        }
    }
    removeRenderClock() {
        if (this._renderTimer) {
            clearTimeout(this._renderTimer);
        }
    }
    componentWillUnmount() {
        this.removeRenderClock();
    }
    getShowData() {
        const { data, columns = [] } = this.props;
        let showData = data;
        if (!showData || !showData.length) {
            const emptyArr = new Array(columns.length).fill('', 0, columns.length);
            emptyArr[0] = '暂无数据';
            showData = [emptyArr];
        }
        return showData;
    }
    getMergeCells() {
        const { data, columns = [] } = this.props;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, rowspan: 1, colspan: columns.length }];
        }
        return null;
    }
    getCell() {
        const { data } = this.props;
        if (!data || !data.length) {
            return [{ row: 0, col: 0, className: 'htCenter htMiddle' }];
        }
        return null;
    }

    /**
     * 去除格式化
     */
    beforeCopy(arr: Array<Array<any>>) {
        const value = arr
            .map((row: any) => {
                return row.join('\t');
            })
            .join('\n');

        this.copyUtils.copy(value);
        return false;
    }
    getContextMenu() {
        const that = this;
        const { columns = [], options } = this.props;
        const { copyTypes = [] } = options || {};

        // 获取值
        const getCopyData = (_that) => {
            // _that 调用的是 handsontable 的方法（在 handsontable.d.ts）， this/that 调用的是当前文件的方法
            const selectedIndexArr = _that.getSelected();
            let dataArr = [];

            if (Array.isArray(selectedIndexArr)) {
                selectedIndexArr.forEach((arr, index) => {
                    const [r, c, r2, c2] = arr || [];
                    const colData: [] = _that.getData(r, c, r2, c2) || [];
                    if (index === 0) {
                        dataArr.push(...colData);
                    } else {
                        dataArr = dataArr.map((item: any[], index: number) => {
                            return item.concat(colData[index]);
                        });
                    }
                });
            }
            return dataArr;
        };
        // 获取列名
        const getCopyHeaders = (selection) => {
            // _that 调用的是 handsontable 的方法（在 handsontable.d.ts）， this/that 调用的是当前文件的方法
            let headerArr = [];
            if (Array.isArray(selection)) {
                selection.forEach((it) => {
                    const columnStart = it.start?.col;
                    const columnEnd = it.end?.col;
                    if (columnStart !== undefined && columnEnd !== undefined) {
                        headerArr = headerArr.concat(columns.slice(columnStart, columnEnd + 1));
                    }
                });
            }
            return headerArr;
        };

        const copyDataItem = {
            name: '复制值',
            callback: function (_key) {
                const copyDataArr = getCopyData(this);
                that.beforeCopy(copyDataArr);
            },
        };
        const copyHeadersItem = {
            name: '复制列名',
            callback: function (_key, selection) {
                const copyHeaders = getCopyHeaders(selection);
                that.beforeCopy([copyHeaders]);
            },
        };
        const copyHeadersAndDataItem = {
            name: '复制列名和值',
            callback: function (_key, selection) {
                const copyDataArr = getCopyData(this);
                const copyHeaders = getCopyHeaders(selection);
                that.beforeCopy([copyHeaders, ...copyDataArr]);
            },
        };

        // 目前 items 在 https://github.com/handsontable/handsontable/blob/6.2.2/handsontable.d.ts#L779，自定义方法也可以被执行
        const items = {};
        if (Array.isArray(copyTypes) && copyTypes?.length) {
            // 复制值
            if (copyTypes.includes('copyData')) {
                items['copyData'] = copyDataItem;
            }
            // 复制列名
            if (copyTypes.includes('copyHeaders')) {
                items['copyHeaders'] = copyHeadersItem;
            }
            // 复制列名和值
            if (copyTypes.includes('copyHeadersAndData')) {
                items['copyHeadersAndData'] = copyHeadersAndDataItem;
            }
        } else {
            items['copyData'] = copyDataItem;
        }

        return { items } as any;
    }
    render() {
        const { columns = [], className = '', options, columnTypes = [] } = this.props;
        const { trimWhitespace = true, ...restOptions } = options || {};
        const showData = this.getShowData();
        // 空数组情况，不显示colHeaders，否则colHeaders默认会按照 A、B...显示
        // 具体可见 https://handsontable.com/docs/7.1.1/Options.html#colHeaders
        let isShowColHeaders = false;
        if (columns && columns.length > 0) {
            isShowColHeaders = true;
        }
        return (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <HotTable
                ref={this.tableRef}
                className={classNames('dtc-handsontable-no-border', className)}
                style={{ width: '100%' }}
                language="zh-CN"
                colHeaders={(index) => {
                    if (!isShowColHeaders) return false;
                    // handsontable 不支持 renderCustomHeader，所以只能用 html string 实现 tooltip
                    const fieldTypeStr = columnTypes?.[index]?.type;
                    const title = fieldTypeStr
                        ? `${columns?.[index]}: ${fieldTypeStr}`
                        : columns?.[index];
                    return `<span title="${title}">${title}</span>`;
                }}
                data={showData}
                mergeCells={this.getMergeCells()}
                cell={this.getCell()}
                readOnly
                rowHeaders // 数字行号
                fillHandle={false} // 拖动复制单元格
                manualRowResize // 拉伸功能
                manualColumnResize // 拉伸功能
                colWidths={200}
                trimWhitespace={trimWhitespace} // false 表示不去除内容里的空格
                beforeCopy={this.beforeCopy.bind(this)}
                beforeCut={() => false}
                columnHeaderHeight={25}
                contextMenu={this.getContextMenu()}
                stretchH="all" // 填充空白区域
                {...restOptions}
            />
        );
    }
}
export default SpreadSheet;
