import React, { useState } from 'react';
import { Dropdown, DropdownProps, Form, Input, Tabs } from 'antd';
import { BlockHeader, EllipsisText } from 'dt-react-component';
import { IBlockHeaderProps } from 'dt-react-component/blockHeader';

import { ITreeNode } from '../useTreeData';
import { CatalogIcon, CloseIcon, DragIcon, EllipsisIcon, SearchIcon } from './icon';
import CatalogueTree, { ICatalogueTree } from './tree';

interface Tab {
    readonly key: string;
    readonly title: React.ReactNode;
}

type readOnlyTab = readonly Tab[];

type TabKey<T extends readOnlyTab> = T[number]['key'];

interface NormalCatalogueProps<U extends Record<string, any> = {}>
    extends Partial<Pick<IBlockHeaderProps, 'tooltip' | 'addonAfter' | 'addonBefore' | 'title'>>,
        ICatalogueTree<U> {
    showSearch?: boolean;
    edit?: boolean;
    placeholder?: string;
    loading?: boolean;
    onCancelSave?: (item: ITreeNode<U>) => void;
    overlay?: (item: ITreeNode<U>) => DropdownProps['overlay'];
    onSearch?: (value: string) => void;
    onSave?: (data: ITreeNode<U>, value: string) => Promise<string | void>;
}
interface TabsCatalogueProps<U extends Record<string, any>, T extends readOnlyTab>
    extends NormalCatalogueProps<U> {
    tabList?: T;
    activeTabKey?: TabKey<T>;
    defaultTabKey?: TabKey<T>;
    onTabChange?: (key: TabKey<T>) => void;
}

export type CatalogueProps<U extends Record<string, any> = {}, T extends readOnlyTab = any> =
    | TabsCatalogueProps<U, T>
    | NormalCatalogueProps<U>;

function isTabMode<U extends Record<string, any> = {}, T extends readOnlyTab = any>(
    props: CatalogueProps<U, T>
): props is TabsCatalogueProps<U, T> {
    return 'tabList' in props;
}

const Catalogue = <U extends Record<string, any> = {}, T extends readOnlyTab = any>(
    props: CatalogueProps<U, T>
) => {
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
        titleRender,
        overlay,
        onSearch,
        onSave,
        onCancelSave,
        ...rest
    } = props;

    const [tabSearch, setTabSearch] = useState(false);

    const [form] = Form.useForm();

    const defaultTitleRender = (item: ITreeNode<U>) => {
        if (item.edit) {
            return (
                <Form form={form} preserve={false} className="tree__title--input">
                    <Form.Item name="catalog_input" initialValue={item?.title as string}>
                        <Input
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
            );
        }
        return (
            <div className="tree__title">
                <div className="tree__title--text">
                    <EllipsisText value={item.title} watchParentSizeChange maxWidth="100%" />
                </div>
                {edit && renderNodeHover(item)}
            </div>
        );
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

    const handleInputSubmit = (item: ITreeNode<U>, value: string) => {
        if (!value) {
            return onCancelSave?.(item);
        }
        onSave?.(item, value).then((msg) => {
            form.setFields([{ name: 'catalog_input', errors: msg ? [msg] : [] }]);
        });
    };

    const renderNodeHover = (item: ITreeNode<U>) => {
        return (
            <div
                className="tree__title--operation"
                onClick={(e) => {
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
                treeData={treeData}
                draggable={draggable ? { icon: false } : false}
                titleRender={titleRender || defaultTitleRender}
                {...rest}
            />
        </div>
    );
};

export default Catalogue;
