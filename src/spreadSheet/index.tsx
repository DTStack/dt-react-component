import React, { useEffect, useRef } from 'react';

import CopyUtils from '../utils/copy';
import { HotTable } from '@handsontable/react';
import type { HotTableProps } from '@handsontable/react';
import classNames from 'classnames';
import 'handsontable/dist/handsontable.full.css';
import 'handsontable/languages/zh-CN.js';
import './style.scss';

type IOptions = HotTableProps & {
    /** 是否展示复制值以及列名 */
    showCopyWithHeader?: boolean;
};

export interface ISpreadSheetProps {
    data: Array<Array<string | number | null>>;
    columns: any;
    className?: string;
    options?: IOptions;
}

const SpreadSheet: React.FC<ISpreadSheetProps> = ({ data, columns = [], className, options }) => {
    const tableRef = useRef<any>(null);
    const copyUtils = new CopyUtils();
    const _timer = useRef<NodeJS.Timeout>();
    const { trimWhitespace = true, showCopyWithHeader, ...restProps } = options || {};

    useEffect(() => {
        if (tableRef.current) {
            removeRenderClock();
            _timer.current = setTimeout(() => {
                tableRef.current.hotInstance.render();
            }, 100);
        }
        return () => {
            removeRenderClock();
        };
    }, [data, columns]);

    const removeRenderClock = () => {
        clearTimeout(_timer.current);
    };

    const getData = () => {
        let showData = data;
        if (!showData?.length) {
            const emptyArr = new Array(columns.length).fill('', 0, columns.length);
            emptyArr[0] = '暂无数据';
            showData = [emptyArr];
        }
        return showData;
    };

    const getMergeCells = () => {
        if (!data?.length) {
            return [{ row: 0, col: 0, rowspan: 1, colspan: columns.length }];
        }
    };

    const getCell = () => {
        if (!data || !data.length) {
            return [{ row: 0, col: 0, className: 'htCenter htMiddle' }];
        }
    };

    const beforeCopy = (arr: any[]) => {
        /**
         * 去除格式化
         */
        const value = arr
            .map((row: any[]) => {
                return row.join('\t');
            })
            .join('\n');
        copyUtils.copy(value);
        return false;
    };

    const getContextMenu = () => {
        const items: Record<string, { name: string; callback: Function }> = {
            copy: {
                name: '复制',
                callback: function (this: any, _key: any) {
                    const indexArr = this.getSelected();
                    // eslint-disable-next-line prefer-spread
                    const copyDataArr = this.getData.apply(this, indexArr[0]);
                    beforeCopy(copyDataArr);
                },
            },
        };
        if (showCopyWithHeader) {
            const copyWithHeaderItem = {
                name: '复制值以及列名',
                callback: function (this: any, _key: any, selection: any) {
                    const indexArr = this.getSelected();
                    // eslint-disable-next-line prefer-spread
                    let copyDataArr = this.getData.apply(this, indexArr[0]);
                    const columnStart = selection?.[0]?.start?.col;
                    const columnEnd = selection?.[0]?.end?.col;
                    let columnArr;
                    if (columnStart !== undefined && columnEnd !== undefined) {
                        columnArr = columns.slice(columnStart, columnEnd + 1);
                    }
                    if (columnArr) {
                        copyDataArr = [columnArr, ...copyDataArr];
                    }
                    beforeCopy(copyDataArr);
                },
            };
            // 目前版本不支持 copy_with_column_headers 暂时用 cut 代替，以达到与copy类似的表现
            items['cut'] = copyWithHeaderItem;
        }
        return {
            items,
        } as any;
    };

    return (
        <HotTable
            ref={tableRef}
            className={classNames('dtc-handsontable-no-border', className)}
            language="zh-CN"
            // 空数组情况，不显示colHeaders，否则colHeaders默认会按照 A、B...显示
            // 具体可见 https://handsontable.com/docs/7.1.1/Options.html#colHeaders
            colHeaders={columns?.length > 0 ? columns : false}
            data={getData()}
            mergeCells={getMergeCells()}
            cell={getCell()}
            readOnly
            rowHeaders // 数字行号
            fillHandle={false} // 拖动复制单元格
            manualRowResize // 拉伸功能
            manualColumnResize // 拉伸功能
            autoColumnSize
            colWidths={200}
            trimWhitespace={trimWhitespace} // false 表示不去除内容里的空格
            beforeCopy={beforeCopy}
            beforeCut={() => false}
            columnHeaderHeight={25}
            contextMenu={getContextMenu()}
            stretchH="all" // 填充空白区域
            {...restProps}
        />
    );
};

export default SpreadSheet;
