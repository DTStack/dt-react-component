"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6683],{20536:function(t,e,n){n.r(e),n.d(e,{demos:function(){return d}});var a=n(75271),d={"spreadsheet-demo-basic":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(8251),n.e(9520),n.e(1333),n.e(5322)]).then(n.bind(n,70437))})),asset:{type:"BLOCK",id:"spreadsheet-demo-basic",refAtomIds:["spreadSheet"],dependencies:{"index.tsx":{type:"FILE",value:n(64731).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"spreadsheet-demo-changedata":{component:a.memo(a.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(8251),n.e(9520),n.e(1333),n.e(5322)]).then(n.bind(n,28730))})),asset:{type:"BLOCK",id:"spreadsheet-demo-changedata",refAtomIds:["spreadSheet"],dependencies:{"index.tsx":{type:"FILE",value:n(45259).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u6539\u53D8\u6570\u636E"},context:void 0,renderOpts:void 0}}},29346:function(t,e,n){n.r(e),n.d(e,{texts:function(){return a}});const a=[{value:"\u8868\u683C\u5185\u5BB9\u53F3\u952E\u53EF\u590D\u5236\uFF0C\u8868\u683C\u5927\u5C0F\u53EF\u62D6\u52A8",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"data",paraId:1,tocIndex:6},{value:"\u8868\u683C\u6570\u636E",paraId:1,tocIndex:6},{value:"Array(\u4E8C\u7EF4\u6570\u7EC4)",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"columns",paraId:1,tocIndex:6},{value:"\u5217\u540D",paraId:1,tocIndex:6},{value:"Array",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"\u5916\u5C42\u7EC4\u4EF6\u7684 class \u540D",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"options.copyTypes",paraId:1,tocIndex:6},{value:"\u53F3\u952E\u83DC\u5355\u4E2D\u5C55\u793A\u7684\u9009\u9879 \u590D\u5236\u503C/\u590D\u5236\u5217\u540D/\u590D\u5236\u5217\u540D\u548C\u503C \u6309\u94AE",paraId:1,tocIndex:6},{value:"Array<'copyData' | 'copyHeaders' | 'copyHeadersAndData'>",paraId:1,tocIndex:6},{value:`"['copyData']"`,paraId:1,tocIndex:6},{value:"options.trimWhitespace",paraId:1,tocIndex:6},{value:"\u662F\u5426\u53BB\u9664\u5185\u5BB9\u91CC\u7684\u7A7A\u683C",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"true",paraId:1,tocIndex:6}]},64731:function(t,e){e.Z=`import React from 'react';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    return (
        <>
            <span>\u53F3\u952E\u83DC\u5355\uFF1A\u590D\u5236\u503C\u3001\u590D\u5236\u5217\u540D</span>
            <SpreadSheet
                columns={['name', 'gender', 'age', 'address']}
                data={[
                    ['zhangsan', 'male', '20', 'xihu'],
                    ['lisi', 'male', '18', 'yuhang'],
                    ['   \u524D\u9762\u6709\u7A7A\u683C', '\u540E\u9762\u6709\u7A7A\u683C   ', '\u4E2D\u95F4\u6709  \u7A7A \u683C', 'yuhang'],
                ]}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders'],
                }}
            />

            <br />
            <span>\u53F3\u952E\u83DC\u5355\uFF1A\u590D\u5236\u503C\u3001\u590D\u5236\u5217\u540D\u3001\u590D\u5236\u5217\u540D\u548C\u503C</span>
            <SpreadSheet
                columns={['name', 'gender', 'age', 'address']}
                data={[
                    ['zhangsan', 'male', '20', 'xihu'],
                    ['lisi', 'male', '18', 'yuhang'],
                    ['   \u524D\u9762\u6709\u7A7A\u683C', '\u540E\u9762\u6709\u7A7A\u683C   ', '\u4E2D\u95F4\u6709  \u7A7A \u683C', 'yuhang'],
                ]}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders', 'copyHeadersAndData'],
                }}
            />
        </>
    );
};
`},45259:function(t,e){e.Z=`import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { SpreadSheet } from 'dt-react-component';

export default () => {
    const _columns = ['name', 'gender', 'age', 'address'];
    const _data = [
        ['zhangsan', 'male', '20', 'xihu'],
        ['lisi', 'male', '18', 'yuhang'],
        ['   \u524D\u9762\u6709\u7A7A\u683C', '\u540E\u9762\u6709\u7A7A\u683C   ', '\u4E2D\u95F4\u6709  \u7A7A \u683C', 'yuhang'],
    ];
    const [columns, setColumns] = useState(_columns);
    const [data, setData] = useState(_data);
    const hotTableInstanceRef = useRef<any>(null);

    const handleData = () => {
        setData(data?.length === 2 ? _data : _data.slice(0, 2));
    };

    const handleColumns = () => {
        setColumns(columns?.length === 3 ? _columns : _columns.slice(0, 3));
    };

    const handleRef = () => {
        console.log(hotTableInstanceRef?.current?.hotInstance?.getData());
    };

    return (
        <>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleColumns}>
                \u6539\u53D8\u5217
            </Button>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleData}>
                \u6539\u53D8\u6570\u636E
            </Button>
            <Button style={{ margin: '0 12px 12px 0' }} type="primary" onClick={handleRef}>
                \u4F7F\u7528 HotTable \u793A\u4F8B\uFF08\u6253\u5370\u6570\u636E\uFF09
            </Button>

            <SpreadSheet
                ref={hotTableInstanceRef}
                columns={columns}
                data={data}
                options={{
                    trimWhitespace: false,
                    copyTypes: ['copyData', 'copyHeaders', 'copyHeadersAndData'],
                }}
            />
        </>
    );
};
`}}]);
