"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[218],{53040:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var o=n(75271),d={"configprovider-demo-basic":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(32),n.e(9520),n.e(5572),n.e(9312),n.e(1082),n.e(4916),n.e(1094),n.e(3553),n.e(1795),n.e(6907),n.e(2339)]).then(n.bind(n,65280))})),asset:{type:"BLOCK",id:"configprovider-demo-basic",refAtomIds:["configProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(73497).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528",description:"ConfigProvider \u7684\u57FA\u672C\u7528\u6CD5\uFF0C\u901A\u8FC7\u5207\u6362\u8BED\u8A00\u73AF\u5883\uFF0C\u53EF\u4EE5\u770B\u5230\u7EC4\u4EF6\u7684\u6587\u6848\u4F1A\u968F\u4E4B\u53D8\u5316\u3002"},context:void 0,renderOpts:void 0},"configprovider-demo-nested":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(32),n.e(9520),n.e(5572),n.e(9312),n.e(1082),n.e(4916),n.e(1094),n.e(3553),n.e(1795),n.e(6907),n.e(2339)]).then(n.bind(n,45688))})),asset:{type:"BLOCK",id:"configprovider-demo-nested",refAtomIds:["configProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(17314).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u5D4C\u5957\u4F7F\u7528",description:"ConfigProvider \u652F\u6301\u5D4C\u5957\u4F7F\u7528\uFF0C\u5185\u5C42\u7684 ConfigProvider \u4F1A\u8986\u76D6\u5916\u5C42\u7684\u914D\u7F6E\u3002"},context:void 0,renderOpts:void 0},"configprovider-demo-custom":{component:o.memo(o.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(32),n.e(9520),n.e(5572),n.e(9312),n.e(1082),n.e(4916),n.e(1094),n.e(3553),n.e(1795),n.e(6907),n.e(2339)]).then(n.bind(n,28319))})),asset:{type:"BLOCK",id:"configprovider-demo-custom",refAtomIds:["configProvider"],dependencies:{"index.tsx":{type:"FILE",value:n(24112).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305",description:"\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55\u9ED8\u8BA4\u8BED\u8A00\u5305\u6765\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u8BED\u8A00\u914D\u7F6E\u3002"},context:void 0,renderOpts:void 0}}},40836:function(t,e,n){n.r(e),n.d(e,{texts:function(){return o}});const o=[{value:"ConfigProvider \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u7EC4\u4EF6\u5E93\u7684\u9ED8\u8BA4\u5C5E\u6027\uFF0C\u76EE\u524D\u4E3B\u8981\u7528\u4E8E\u914D\u7F6E\u56FD\u9645\u5316\u6587\u6848\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:7},{value:"\u8BF4\u660E",paraId:1,tocIndex:7},{value:"\u7C7B\u578B",paraId:1,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:7},{value:"locale",paraId:1,tocIndex:7},{value:"\u8BED\u8A00\u5305\u914D\u7F6E",paraId:1,tocIndex:7},{value:"Locale",paraId:2,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:"children",paraId:1,tocIndex:7},{value:"\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:7},{value:"ReactNode",paraId:1,tocIndex:7},{value:"-",paraId:1,tocIndex:7},{value:`interface Locale {
    locale: string;
    BlockHeader: { expand: string; collapse: string };
    Catalogue: { searchPlaceholder: string; inputPlaceholder: string };
    Chat: {
        stopped: string;
        stop: string;
        regenerate: string;
    };
    Copy: { copied: string; copy: string };
    Dropdown: { selectAll: string; resetText: string; okText: string };
    ErrorBoundary: {
        please: string;
        get: string;
        refresh: string;
        title: string;
    };
    // ... \u5176\u4ED6\u7EC4\u4EF6\u7684\u6587\u6848\u914D\u7F6E
}
`,paraId:3,tocIndex:8},{value:"\u7EC4\u4EF6\u5E93\u9ED8\u8BA4\u4F7F\u7528\u4E2D\u6587\uFF08zh-CN\uFF09\u8BED\u8A00\u5305\u3002",paraId:4,tocIndex:9},{value:"\u5F53\u7EC4\u4EF6\u4E0D\u5728 ConfigProvider \u5185\u65F6\uFF0C\u5C06\u4F7F\u7528\u9ED8\u8BA4\u7684\u4E2D\u6587\u8BED\u8A00\u5305\u3002",paraId:4,tocIndex:9},{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:4,tocIndex:9},{value:"useLocale",paraId:4,tocIndex:9},{value:" hook \u5728\u7EC4\u4EF6\u5185\u90E8\u83B7\u53D6\u5F53\u524D\u7684\u8BED\u8A00\u73AF\u5883\u3002",paraId:4,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305\u65F6\uFF0C\u53EF\u4EE5\u53EA\u8986\u76D6\u9700\u8981\u4FEE\u6539\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u8BED\u8A00\u5305\u3002",paraId:4,tocIndex:9}]},73497:function(t,e){e.Z=`import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import {
    BlockHeader,
    Button,
    ConfigProvider,
    Copy,
    enUS,
    Input,
    Modal,
    zhCN,
} from 'dt-react-component';

export default function Basic() {
    const [locale, setLocale] = useState(zhCN);

    const info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    };

    const handleDelete = () => {
        Modal.delete({
            title: 'This is a delete message',
            content: 'some messages...some messages...',
        });
    };

    return (
        <Space direction="vertical" size="large">
            <Radio.Group
                value={locale.locale}
                onChange={(e) => setLocale(e.target.value === 'zh-CN' ? zhCN : enUS)}
            >
                <Radio.Button value="zh-CN">\u4E2D\u6587</Radio.Button>
                <Radio.Button value="en-US">English</Radio.Button>
            </Radio.Group>

            <ConfigProvider locale={locale}>
                <Space direction="vertical" size="middle">
                    <div>
                        <h3>Copy \u7EC4\u4EF6</h3>
                        <Copy text="\u8FD9\u662F\u8981\u590D\u5236\u7684\u6587\u672C" />
                    </div>
                    <div>
                        <h3>BlockHeader \u7EC4\u4EF6</h3>
                        <BlockHeader title="\u6807\u9898" defaultExpand>
                            <p>\u5185\u5BB9\u533A\u57DF</p>
                        </BlockHeader>
                    </div>
                    <div>
                        <h3>Input.Match \u7EC4\u4EF6</h3>
                        <Input.Match />
                    </div>
                    <div>
                        <h3>Modal.method \u7EC4\u4EF6</h3>
                        <Button onClick={info} style={{ marginRight: 12 }}>
                            Info
                        </Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                </Space>
            </ConfigProvider>
        </Space>
    );
}
`},24112:function(t,e){e.Z=`import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import { BlockHeader, ConfigProvider, Copy, enUS, useLocale, zhCN } from 'dt-react-component';

// \u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F7F\u7528useLocale\u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u73AF\u5883
const LocaleConsumer = () => {
    const copyLocale = useLocale('Copy');
    const blockHeaderLocale = useLocale('BlockHeader');

    return (
        <div>
            <h4>\u5F53\u524D\u8BED\u8A00\u73AF\u5883</h4>
            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
                <p>
                    <strong>Copy\u7EC4\u4EF6:</strong>
                </p>
                <ul>
                    <li>copy: {copyLocale.copy}</li>
                    <li>copied: {copyLocale.copied}</li>
                </ul>

                <p>
                    <strong>BlockHeader\u7EC4\u4EF6:</strong>
                </p>
                <ul>
                    <li>expand: {blockHeaderLocale.expand}</li>
                    <li>collapse: {blockHeaderLocale.collapse}</li>
                </ul>
            </div>
        </div>
    );
};

export default function Custom() {
    // \u521B\u5EFA\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305
    const [customLocale, setCustomLocale] = useState({
        ...zhCN,
        locale: 'custom-zh',
        Copy: {
            copy: '\u70B9\u51FB\u590D\u5236',
            copied: '\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F',
        },
        BlockHeader: {
            expand: '\u5C55\u5F00\u5168\u90E8',
            collapse: '\u6536\u8D77\u5168\u90E8',
        },
    });

    const [localeType, setLocaleType] = useState('custom');

    const handleLocaleChange = (type: string) => {
        setLocaleType(type);
        if (type === 'zh-CN') {
            setCustomLocale(zhCN);
        } else if (type === 'en-US') {
            setCustomLocale(enUS);
        } else {
            // \u6062\u590D\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305
            setCustomLocale({
                ...zhCN,
                locale: 'custom-zh',
                Copy: {
                    copy: '\u70B9\u51FB\u590D\u5236',
                    copied: '\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F',
                },
                BlockHeader: {
                    expand: '\u5C55\u5F00\u5168\u90E8',
                    collapse: '\u6536\u8D77\u5168\u90E8',
                },
            });
        }
    };

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Radio.Group value={localeType} onChange={(e) => handleLocaleChange(e.target.value)}>
                <Radio.Button value="custom">\u81EA\u5B9A\u4E49\u8BED\u8A00</Radio.Button>
                <Radio.Button value="zh-CN">\u9ED8\u8BA4\u4E2D\u6587</Radio.Button>
                <Radio.Button value="en-US">\u9ED8\u8BA4\u82F1\u6587</Radio.Button>
            </Radio.Group>

            <ConfigProvider locale={customLocale}>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <div>
                        <h3>\u4F7F\u7528\u81EA\u5B9A\u4E49\u8BED\u8A00\u5305</h3>
                        <Copy text="\u8FD9\u662F\u8981\u590D\u5236\u7684\u6587\u672C" />
                    </div>

                    <div>
                        <h3>BlockHeader \u793A\u4F8B</h3>
                        <BlockHeader title="\u6807\u9898" defaultExpand>
                            <p>\u5185\u5BB9\u533A\u57DF</p>
                        </BlockHeader>
                    </div>

                    <LocaleConsumer />
                </Space>
            </ConfigProvider>
        </Space>
    );
}
`},17314:function(t,e){e.Z=`import React, { useState } from 'react';
import { Divider, Radio, Space } from 'antd';
import { ConfigProvider, Copy, enUS, useLocale, zhCN } from 'dt-react-component';

// \u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F7F\u7528useLocale\u83B7\u53D6\u5F53\u524D\u8BED\u8A00\u73AF\u5883
const LocaleDisplay = () => {
    const copyLocale = useLocale('Copy');
    return (
        <div>
            <p>\u5F53\u524DCopy\u7EC4\u4EF6\u7684\u6587\u6848\uFF1A</p>
            <ul>
                <li>copy: {copyLocale.copy}</li>
                <li>copied: {copyLocale.copied}</li>
            </ul>
        </div>
    );
};

export default function Nested() {
    const [outerLocale, setOuterLocale] = useState(zhCN);
    const [innerLocale, setInnerLocale] = useState(enUS);

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
                <h3>\u5916\u5C42ConfigProvider</h3>
                <Radio.Group
                    value={outerLocale.locale}
                    onChange={(e) => setOuterLocale(e.target.value === 'zh-CN' ? zhCN : enUS)}
                >
                    <Radio.Button value="zh-CN">\u4E2D\u6587</Radio.Button>
                    <Radio.Button value="en-US">English</Radio.Button>
                </Radio.Group>
            </div>

            <ConfigProvider locale={outerLocale}>
                <Space
                    direction="vertical"
                    style={{ width: '100%', border: '1px solid #eee', padding: '16px' }}
                >
                    <div>
                        <h4>\u5916\u5C42ConfigProvider\u7684\u7EC4\u4EF6</h4>
                        <Copy text="\u8FD9\u662F\u8981\u590D\u5236\u7684\u6587\u672C" />
                        <LocaleDisplay />
                    </div>

                    <Divider>\u5D4C\u5957\u7684ConfigProvider</Divider>

                    <div>
                        <h4>\u5185\u5C42ConfigProvider</h4>
                        <Radio.Group
                            value={innerLocale.locale}
                            onChange={(e) =>
                                setInnerLocale(e.target.value === 'zh-CN' ? zhCN : enUS)
                            }
                        >
                            <Radio.Button value="zh-CN">\u4E2D\u6587</Radio.Button>
                            <Radio.Button value="en-US">English</Radio.Button>
                        </Radio.Group>

                        <ConfigProvider locale={innerLocale}>
                            <div
                                style={{
                                    marginTop: '16px',
                                    border: '1px dashed #ccc',
                                    padding: '16px',
                                }}
                            >
                                <h4>\u5185\u5C42ConfigProvider\u7684\u7EC4\u4EF6</h4>
                                <Copy text="\u8FD9\u662F\u8981\u590D\u5236\u7684\u6587\u672C" />
                                <LocaleDisplay />
                            </div>
                        </ConfigProvider>
                    </div>
                </Space>
            </ConfigProvider>

            <div>
                <h3>\u65E0ConfigProvider\u7684\u7EC4\u4EF6</h3>
                <p>\u5F53\u7EC4\u4EF6\u4E0D\u5728ConfigProvider\u5185\u65F6\uFF0C\u5C06\u4F7F\u7528\u9ED8\u8BA4\u7684\u4E2D\u6587\u8BED\u8A00\u5305</p>
                <Copy text="\u8FD9\u662F\u8981\u590D\u5236\u7684\u6587\u672C" />
                <LocaleDisplay />
            </div>
        </Space>
    );
}
`}}]);
