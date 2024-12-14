import React, { useState } from 'react';
import { Dropdown, DropdownProps, Form, Input, Tabs } from 'antd';
import { BlockHeader } from 'dt-react-component';
import { IBlockHeaderProps } from 'dt-react-component/blockHeader';

import { InputMode, ITreeNode, useTreeData } from '../useTreeData';
import { CatalogIcon, CloseIcon, DragIcon, EllipsisIcon, SearchIcon } from './icon';
import CatalogueTree, { ICatalogueTree } from './tree';

interface Tab {
    readonly key: string;
    readonly title: React.ReactNode;
}

type readOnlyTab = readonly Tab[];

type TabKey<T extends readOnlyTab> = T[number]['key'];

interface NormalCatalogueProps
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
interface TabsCatalogueProps<T extends readOnlyTab> extends NormalCatalogueProps {
    tabList?: T;
    activeTabKey?: TabKey<T>;
    defaultTabKey?: TabKey<T>;
    onTabChange?: (key: TabKey<T>) => void;
}

export type CatalogueProps<T extends readOnlyTab = any> =
    | TabsCatalogueProps<T>
    | NormalCatalogueProps;

function isTabMode<T extends readOnlyTab>(
    props: CatalogueProps<T>
): props is TabsCatalogueProps<T> {
    return 'tabList' in props;
}

const Catalogue = <T extends readOnlyTab>(props: CatalogueProps<T>) => {
    const {
        title,
        addonBefore = <CatalogIcon style={{ fontSize: 20 }} />,
        tooltip = false,
        showSearch = false,
        placeholder = '搜索目录名称',
        addonAfter,
        edit = true,
        treeData,
        draggable,
        overlay,
        onChange,
        onSearch,
        onSave,
        ...rest
    } = props;

    const [tabSearch, setTabSearch] = useState(false);

    const [form] = Form.useForm();

    const loopTree = (data: ITreeNode[]): ITreeNode[] => {
        return data?.map((item) => {
            const newItem = {
                ...item,
                editable: item?.editable === undefined ? true : item?.editable,
                addable: item?.addable === undefined ? true : item?.addable,
                deletable: item?.deletable === undefined ? true : item?.deletable,
            };
            if (item.children) {
                return {
                    ...newItem,
                    title: renderTitle(newItem),
                    children: loopTree(item.children),
                };
            }
            return {
                ...newItem,
                title: renderTitle(newItem),
                children: undefined,
            };
        });
    };

    const renderHeader = () => {
        if (!title) return null;
        return (
            <div className="dt-catalogue__header">
                <BlockHeader
                    title={title}
                    tooltip={tooltip}
                    background={false}
                    addonBefore={addonBefore}
                    addonAfter={addonAfter}
                    spaceBottom={12}
                />
            </div>
        );
    };

    const renderSearch = () => {
        if (!showSearch || (isTabMode(props) && !tabSearch)) return null;
        return (
            <div className="dt-catalogue__search">
                <Input.Search placeholder={placeholder} onSearch={onSearch} />
                {isTabMode(props) && (
                    <CloseIcon className="close" style={{}} onClick={() => setTabSearch(false)} />
                )}
            </div>
        );
    };

    const renderTab = () => {
        if (!isTabMode(props) || tabSearch) return null;
        const { activeTabKey, tabList, onTabChange } = props;
        return (
            <Tabs
                className="dt-catalogue__tabs"
                size="small"
                tabBarExtraContent={
                    <SearchIcon className="search" onClick={() => setTabSearch(true)} />
                }
                activeKey={activeTabKey}
                onChange={onTabChange}
            >
                {tabList?.map((tab: { key: string; title: React.ReactNode }) => (
                    <Tabs.TabPane tab={tab.title} key={tab.key} />
                ))}
            </Tabs>
        );
    };

    const handleInputSubmit = (item: ITreeNode, value: string) => {
        if (!value) {
            return onChange?.(undefined, undefined);
        }
        // item 为当前编辑的数据，对于 Append 的情况需要传入父级的 key
        if (item.inputMode === InputMode.Append) {
            const findAppendParents = (data: ITreeNode[], item: ITreeNode): ITreeNode | null => {
                let result: ITreeNode | null = null;
                function traverse(node: ITreeNode, parent: ITreeNode | null): void {
                    if (node.inputMode === 'append' && node.key === item.key && parent) {
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
                onSave?.({ ...parentItem, inputMode: InputMode.Append }, value).then((msg) => {
                    form.setFields([{ name: 'catalog_input', errors: msg ? [msg] : [] }]);
                })
            );
        }
        onSave?.(item, value).then((msg) => {
            form.setFields([{ name: 'catalog_input', errors: msg ? [msg] : [] }]);
        });
    };

    const renderInput = (item: ITreeNode) => {
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
        if (item.inputMode) {
            return renderInput(item);
        }
        return (
            <div className="tree__title">
                <div className="tree__title--text">{item.title}</div>
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
            {renderHeader()}
            {renderSearch()}
            {renderTab()}
            <CatalogueTree
                treeData={loopTree(treeData)}
                draggable={draggable ? { icon: false } : false}
                {...rest}
            />
        </div>
    );
};

export default Catalogue;
