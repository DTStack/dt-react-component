import React from 'react';
import { Dropdown, DropdownProps, Form, Input, Spin } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { BlockHeader, EllipsisText, Empty } from 'dt-react-component';
import { IBlockHeaderProps } from 'dt-react-component/blockHeader';

import { InputStatus, ITreeNode, useTreeData } from '../useTreeData';
import { CatalogIcon, DragIcon, EllipsisIcon } from './icon';
import CatalogueTree, { ICatalogueTree } from './tree';

export interface ICatalogue
    extends Pick<IBlockHeaderProps, 'tooltip' | 'addonAfter' | 'addonBefore' | 'title'>,
        ICatalogueTree {
    showSearch?: boolean;
    edit?: boolean;
    placeholder?: string;
    loading?: boolean;
    onChange?: ReturnType<typeof useTreeData>['onChange'];
    overlay?: (item: ITreeNode) => DropdownProps['overlay'];
    onSearch?: (value: string) => void;
    onSave?: (data: ITreeNode, value: string) => Promise<string | void>;
}

const Catalogue = ({
    title,
    addonBefore = <CatalogIcon style={{ fontSize: 20 }} />,
    tooltip = false,
    showSearch = false,
    placeholder = '搜索目录名称',
    addonAfter,
    edit = true,
    loading = false,
    treeData,
    draggable,
    overlay,
    onChange,
    onSearch,
    onExpand,
    onSave,
    ...rest
}: ICatalogue) => {
    const [form] = Form.useForm();

    const loopTree = (data: ITreeNode[]): ITreeNode[] => {
        return data?.map((item) => {
            const reset: ITreeNode = {
                ...item,
                editable: item?.editable === undefined ? true : item?.editable,
                addable: item?.addable === undefined ? true : item?.addable,
                deletable: item?.deletable === undefined ? true : item?.deletable,
            };
            if (item.children) {
                return {
                    ...reset,
                    title: renderTitle(reset),
                    children: loopTree(item.children),
                };
            }
            return {
                ...reset,
                title: renderTitle(reset),
                children: undefined,
            };
        });
    };

    const renderHeader = () => {
        if (!title) return null;
        return (
            <BlockHeader
                title={title}
                tooltip={tooltip}
                background={false}
                addonBefore={addonBefore}
                addonAfter={addonAfter}
                spaceBottom={12}
            />
        );
    };

    const renderSearch = () => {
        if (!showSearch) return null;
        return (
            <Input.Search
                placeholder={placeholder}
                style={{ marginBottom: 12 }}
                onSearch={onSearch}
            />
        );
    };

    const renderTree = () => {
        const treeDataWithTitle = loopTree(treeData);
        if (!treeDataWithTitle.length) return <Empty style={{ marginTop: 130 }} />;
        return (
            <div className="dt-catalogue__tree">
                <Spin spinning={loading}>
                    <CatalogueTree
                        treeData={loopTree(treeData)}
                        draggable={draggable ? { icon: false } : false}
                        onExpand={onExpand}
                        {...rest}
                    />
                </Spin>
            </div>
        );
    };

    const handleInputSubmit = (item: ITreeNode, value: string) => {
        if (!value) {
            return onChange?.(undefined, undefined);
        }
        // item 为当前编辑的数据，对于 Append 的情况需要传入父级的 key
        if (item.type === InputStatus.Append) {
            const findAppendParents = (data: ITreeNode[], item: ITreeNode): ITreeNode | null => {
                let result: ITreeNode | null = null;
                function traverse(node: ITreeNode, parent: ITreeNode | null): void {
                    if (node.type === 'append' && node.key === item.key && parent) {
                        result = parent;
                    }
                    if (Array.isArray(node.children)) {
                        node.children.forEach((child) => traverse(child, node));
                    }
                }
                data.forEach((item) => traverse(item, null));
                return result;
            };
            const parentItem = findAppendParents(treeData, item);
            return (
                parentItem &&
                onSave?.({ ...parentItem, type: InputStatus.Append }, value).then((msg) => {
                    form.setFields([{ name: 'catalog_input', errors: msg ? [msg] : [] }]);
                })
            );
        }
        onSave?.(item, value).then((msg) => {
            form.setFields([{ name: 'catalog_input', errors: msg ? [msg] : [] }]);
        });
    };

    const renderInput = (item: DataNode) => {
        return (
            <div className="tree__title--input">
                <Form form={form} preserve={false}>
                    <Form.Item name="catalog_input">
                        <Input
                            defaultValue={item?.title as string}
                            size="small"
                            placeholder={`请输入${title}名称`}
                            maxLength={100}
                            autoFocus
                            onFocus={() => form.setFields([{ name: 'catalog_input', errors: [] }])}
                            onClick={(e) => e.stopPropagation()}
                            onBlur={({ target }) => handleInputSubmit(item, target.value)}
                            onPressEnter={({ target }) =>
                                handleInputSubmit(item, (target as any).value)
                            }
                        />
                    </Form.Item>
                </Form>
            </div>
        );
    };

    const renderTitle = (item: ITreeNode) => {
        if (item.type) {
            return renderInput(item);
        }
        return (
            <div className="tree__title">
                <EllipsisText
                    value={item.title as React.ReactNode}
                    maxWidth="100%"
                    className="tree__title--text"
                />
                {edit && renderNodeHover(item)}
            </div>
        );
    };

    const renderNodeHover = (item: ITreeNode) => {
        return (
            <div
                className="tree__title--operation"
                onMouseDown={(e) => {
                    e.stopPropagation();
                }}
            >
                {overlay && (
                    <Dropdown
                        overlay={overlay(item)}
                        placement="bottomRight"
                        arrow
                        destroyPopupOnHide
                        getPopupContainer={(triggerNode) =>
                            triggerNode.parentElement as HTMLElement
                        }
                    >
                        <EllipsisIcon onClick={(e) => e.stopPropagation()} />
                    </Dropdown>
                )}
                {draggable && <DragIcon />}
            </div>
        );
    };

    return (
        <div className="dt-catalogue">
            <div className="dt-catalogue__header">
                {renderHeader()}
                {renderSearch()}
            </div>
            {renderTree()}
        </div>
    );
};

export default Catalogue;
