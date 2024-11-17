import React, { useMemo } from 'react';
import { Dropdown, Form, Input, Menu, Spin } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { EllipsisText, Empty } from 'dt-react-component';
import BlockHeader, { IBlockHeaderProps } from 'dt-react-component/blockHeader';

import { InputStatus, ITreeNode, useTreeData } from '../useTreeData';
import { CatalogIcon, DeleteIcon, DragIcon, EditIcon, EllipsisIcon, PlusCircleIcon } from './icon';
import CatalogueTree, { ICatalogueTree } from './tree';

interface ICatalogue
    extends Pick<IBlockHeaderProps, 'tooltip' | 'addonAfter'>,
        Partial<Pick<ReturnType<typeof useTreeData>, 'onChange'>>,
        ICatalogueTree {
    icon?: React.ReactNode;
    title?: string;
    showSearch?: boolean;
    edit?: boolean;
    placeholder?: string;
    loading?: boolean;
    onSearch?: (value: string) => void;
    onSave?: (data: ITreeNode, value: string) => Promise<void>;
    onDelete?: (data: ITreeNode) => Promise<void>;
}

const Catalogue = ({
    title,
    icon = <CatalogIcon style={{ fontSize: 20 }} />,
    tooltip = false,
    showSearch = false,
    placeholder = '搜索目录名称',
    addonAfter,
    edit = true,
    loading = false,
    treeData,
    draggable,
    onChange,
    onSearch,
    onExpand,
    onSave,
    onDelete,
    ...rest
}: ICatalogue) => {
    const [form] = Form.useForm();

    const loopTree = (data: DataNode[]): DataNode[] => {
        return data?.map((item) => {
            if (item.children) {
                return {
                    ...item,
                    title: renderTitle(item),
                    children: loopTree(item.children),
                };
            }
            return {
                ...item,
                title: renderTitle(item),
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
                addonBefore={icon}
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
        if (!treeDataWithTitle.length) return <Empty style={{ marginTop: 130 }} />;
        return (
            <div className="dt-catalogue__tree">
                <Spin spinning={loading}>
                    <CatalogueTree
                        treeData={treeDataWithTitle}
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
            return parentItem && onSave?.({ ...parentItem, type: InputStatus.Append }, value);
        }
        onSave?.(item, value);
    };

    const renderInput = (item: DataNode) => {
        return (
            <div className="tree__title--input">
                <Form form={form}>
                    <Form.Item>
                        <Input
                            defaultValue={item?.title as string}
                            size="small"
                            placeholder={`请输入${title}名称`}
                            maxLength={100}
                            autoFocus
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

    const renderNodeHover = (item: DataNode) => {
        const menu = (
            <Menu
                className="tree__title--menu"
                onClick={({ domEvent }) => {
                    domEvent.stopPropagation();
                }}
            >
                <Menu.Item
                    key="add"
                    className="title__menu--item"
                    onClick={() => onChange?.(item, InputStatus.Append)}
                >
                    <PlusCircleIcon />
                    <span>新建目录</span>
                </Menu.Item>
                <Menu.Item
                    key="edit"
                    className="title__menu--item"
                    onClick={() => onChange?.(item, InputStatus.Edit)}
                >
                    <EditIcon />
                    <span>编辑</span>
                </Menu.Item>
                <Menu.Item
                    key="delete"
                    className="title__menu--item"
                    onClick={() => onDelete?.(item)}
                >
                    <DeleteIcon />
                    <span>删除</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div
                className="tree__title--operation"
                onMouseDown={(e) => {
                    e.stopPropagation();
                    // this.setState({ isSelected: false, draggable: false });
                }}
            >
                <Dropdown
                    overlay={menu}
                    trigger={['click']}
                    placement="bottomRight"
                    arrow
                    getPopupContainer={(triggerNode) => triggerNode.parentElement}
                >
                    <EllipsisIcon onClick={(e) => e.stopPropagation()} />
                </Dropdown>
                <DragIcon />
            </div>
        );
    };

    const treeDataWithTitle = useMemo(() => {
        return loopTree(treeData);
    }, [treeData]);

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
