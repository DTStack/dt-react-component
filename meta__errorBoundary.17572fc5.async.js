"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1188],{82165:(function(o,e,n){n.r(e),n.d(e,{demos:function(){return t}});var r=n(30758),t={"errorboundary-demo-basic":{component:r.memo(r.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(3497)]).then(n.bind(n,97521))})),asset:{type:"BLOCK",id:"errorboundary-demo-basic",refAtomIds:["errorBoundary"],dependencies:{"index.tsx":{type:"FILE",value:n(46625).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},routeId:"components/errorBoundary/index",context:void 0,renderOpts:void 0},"errorboundary-demo-customerrorpage":{component:r.memo(r.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(3497)]).then(n.bind(n,8179))})),asset:{type:"BLOCK",id:"errorboundary-demo-customerrorpage",refAtomIds:["errorBoundary"],dependencies:{"index.tsx":{type:"FILE",value:n(34699).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u9875\u9762",description:"\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6E32\u67D3\u9519\u8BEF\u5904\u7406\u9875\u9762"},routeId:"components/errorBoundary/index",context:void 0,renderOpts:void 0}}}),87329:(function(o,e,n){n.r(e);const r=[{value:"\u9519\u8BEF\u8FB9\u754C\u53EF\u4EE5\u6355\u83B7\u5B50\u7EC4\u4EF6\u7684\u6E32\u67D3\u3001\u751F\u547D\u5468\u671F\u51FD\u6570\u4EE5\u53CA\u6784\u9020\u51FD\u6570\u5185\u7684\u9519\u8BEF\uFF0C\u8BB0\u5F55\u9519\u8BEF\u65E5\u5FD7\u5E76\u5728\u9519\u8BEF\u53D1\u751F\u65F6\uFF0C \u5C55\u793A LoadError \u9875\u9762\uFF0C\u4EE5\u907F\u514D\u56E0\u4E3A\u5C40\u90E8\u7EC4\u4EF6\u9519\u8BEF\u800C\u5BFC\u81F4\u7684\u6574\u4E2A\u7EC4\u4EF6\u6811\u5D29\u6E83\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"children",paraId:1,tocIndex:5},{value:"\u5B50\u7EC4\u4EF6",paraId:1,tocIndex:5},{value:"React.ReactNode",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"errorPage",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u9519\u8BEF\u5C55\u793A\u9875\u9762",paraId:1,tocIndex:5},{value:"React.ReactNode",paraId:1,tocIndex:5},{value:"<LoadError />",paraId:1,tocIndex:5},{value:"onError",paraId:1,tocIndex:5},{value:"\u53D1\u751F\u9519\u8BEF\u6355\u83B7\u65F6\u89E6\u53D1",paraId:1,tocIndex:5},{value:"(error: Error) => void",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}];n.d(e,["texts",0,r])}),46625:(function(o,e){e.A=`import React, { useState } from 'react';
import { message } from 'antd';
import { ErrorBoundary } from 'dt-react-component';

const ThrowError = () => {
    const [count, setCount] = useState(0);
    if (count % 2) throw new Error('test error');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 60,
            }}
        >
            <button
                style={{
                    border: 'none',
                    backgroundColor: '#1890ff',
                    cursor: 'pointer',
                    height: 32,
                    borderRadius: 4,
                }}
                onClick={() => setCount((count) => count + 1)}
            >
                \u89E6\u53D1\u5F02\u5E38
            </button>
            <h2>hello, dt-react-component</h2>
        </div>
    );
};

export default () => {
    return (
        <ErrorBoundary onError={(err) => message.error('\u6355\u83B7\u5230\u9519\u8BEF\uFF1A' + err.message)}>
            <ThrowError />
        </ErrorBoundary>
    );
};
`}),34699:(function(o,e){e.A=`import React, { useState } from 'react';
import { message } from 'antd';
import { ErrorBoundary } from 'dt-react-component';

const ThrowError = () => {
    const [count, setCount] = useState(0);
    if (count % 2) throw new Error('test error');
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 60,
            }}
        >
            <button
                style={{
                    border: 'none',
                    backgroundColor: '#1890ff',
                    cursor: 'pointer',
                    height: 32,
                    borderRadius: 4,
                }}
                onClick={() => setCount((count) => count + 1)}
            >
                \u89E6\u53D1\u5F02\u5E38
            </button>
            <h2>hello, dt-react-component</h2>
        </div>
    );
};

const ErrorPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>\u8FD9\u662F\u81EA\u5B9A\u4E49\u6355\u83B7\u5F02\u5E38\u9875\u9762</h2>
        </div>
    );
};

export default () => {
    return (
        <ErrorBoundary
            onError={(err) => message.error('\u6355\u83B7\u5230\u9519\u8BEF\uFF1A' + err.message)}
            errorPage={<ErrorPage />}
        >
            <ThrowError />
        </ErrorBoundary>
    );
};
`})}]);
