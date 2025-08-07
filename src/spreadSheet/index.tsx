import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { CopyUtils } from '@dtinsight/dt-utils';
import type { HotTableProps } from '@handsontable/react';
import { HotTable } from '@handsontable/react';
import classNames from 'classnames';
import 'handsontable/languages/zh-CN.js';

import useLocale from '../locale/useLocale';
import 'handsontable/dist/handsontable.full.css';
import './style.scss';

type ICopyType = 'copyData' | 'copyHeaders' | 'copyHeadersAndData';

type IOptions = HotTableProps & {
    // 右键菜单中展示的选项 复制值/复制列名/复制列名和值 按钮 */
    copyTypes?: ICopyType[];
};

export interface ISpreadSheetProps {
    data: Array<Array<string | number | null>>;
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
    ref?: any;
}

const SpreadSheet: React.FC<ISpreadSheetProps> = forwardRef(
    ({ data, columns = [], className, options, columnTypes = [] }, ref) => {
        const tableRef = useRef<any>(null);
        const copyUtils = new CopyUtils();
        const _timer = useRef<NodeJS.Timeout>();
        const { copyTypes = [], ...restProps } = options || {};

        useImperativeHandle(ref, () => tableRef.current);
        const locale = useLocale('SpreadSheet');

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

        const getShowData = () => {
            let showData = data;
            if (!showData?.length) {
                const emptyArr = new Array(columns.length).fill('', 0, columns.length);
                emptyArr[0] = locale.description;
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

        /**
         * 去除格式化
         */
        const beforeCopy = (arr: Array<Array<any>>) => {
            const value = arr
                .map((row: any[]) => {
                    return row.join('\t');
                })
                .join('\n');

            copyUtils.copy(value);
            return false;
        };

        const getContextMenu = () => {
            // 获取值
            const getCopyData = () => {
                // 调用的是 handsontable 的方法（在 handsontable.d.ts）
                const selectedIndexArr = tableRef.current?.hotInstance?.getSelected();
                let dataArr: Array<any> = [];

                if (Array.isArray(selectedIndexArr)) {
                    selectedIndexArr.forEach((arr, index) => {
                        const [r, c, r2, c2] = arr || [];
                        const colData: [] =
                            tableRef.current?.hotInstance?.getData(r, c, r2, c2) || [];
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
            const getCopyHeaders = (selection: Array<any>) => {
                let headerArr: Array<any> = [];
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
                name: locale.copy,
                callback: function (_key: string) {
                    const copyDataArr = getCopyData();
                    beforeCopy(copyDataArr);
                },
            };
            const copyHeadersItem = {
                name: locale.copyCol,
                callback: function (_key: string, selection: Array<any>) {
                    const copyHeaders = getCopyHeaders(selection);
                    beforeCopy([copyHeaders]);
                },
            };
            const copyHeadersAndDataItem = {
                name: locale.copyAll,
                callback: function (_key: string, selection: Array<any>) {
                    const copyDataArr = getCopyData();
                    const copyHeaders = getCopyHeaders(selection);
                    beforeCopy([copyHeaders, ...copyDataArr]);
                },
            };

            // 目前 items 在 https://github.com/handsontable/handsontable/blob/6.2.2/handsontable.d.ts#L779，自定义方法也可以被执行
            const items: Partial<Record<ICopyType, any>> = {};
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
        };

        return (
            <HotTable
                ref={tableRef}
                className={classNames('dtc-handsontable-no-border', className)}
                language="zh-CN"
                // 空数组情况，不显示colHeaders，否则colHeaders默认会按照 A、B...显示
                // 具体可见 https://handsontable.com/docs/7.1.1/Options.html#colHeaders
                colHeaders={(index) => {
                    if (!columns?.length) return false;
                    // handsontable 不支持 renderCustomHeader，所以只能用 html string 实现 tooltip
                    const fieldTypeStr = columnTypes?.[index as number]?.type;
                    const title = fieldTypeStr
                        ? `${columns?.[index as number]}: ${fieldTypeStr}`
                        : columns?.[index as number];
                    return `<span title="${title}">${title}</span>`;
                }}
                data={getShowData()}
                mergeCells={getMergeCells()}
                cell={getCell()}
                readOnly
                rowHeaders // 数字行号
                fillHandle={false} // 拖动复制单元格
                manualRowResize // 拉伸功能
                manualColumnResize // 拉伸功能
                autoColumnSize
                colWidths={200}
                beforeCopy={beforeCopy}
                beforeCut={() => false}
                columnHeaderHeight={25}
                contextMenu={getContextMenu()}
                stretchH="all" // 填充空白区域
                {...restProps}
            />
        );
    }
);

export default SpreadSheet;
