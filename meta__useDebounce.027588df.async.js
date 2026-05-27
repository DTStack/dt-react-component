"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7286],{94981:function(t,n,e){e.r(n),e.d(n,{demos:function(){return d}});var a=e(75271),d={"usedebounce-demo-basic":{component:a.memo(a.lazy(function(){return Promise.all([e.e(9048),e.e(4180),e.e(5385),e.e(9448),e.e(4019),e.e(6102),e.e(7772)]).then(e.bind(e,44981))})),asset:{type:"BLOCK",id:"usedebounce-demo-basic",refAtomIds:["useDebounce"],dependencies:{"index.tsx":{type:"FILE",value:e(23949).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},83498:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u7528\u4E8E\u63A5\u53E3\u8BF7\u6C42\u9632\u6296\uFF0C\u51FD\u6570\u9632\u6296",paraId:0,tocIndex:1},{value:"lodash.debounce",paraId:1,tocIndex:4},{value:" \u7684 ",paraId:1,tocIndex:4},{value:"hooks",paraId:1,tocIndex:4},{value:" \u5F62\u5F0F\uFF0C\u66F4\u591A\u8BE6\u89C1 ",paraId:1,tocIndex:4},{value:"debounce",paraId:1,tocIndex:4},{value:`const debouncedFn = useDebounce(
  func: (...args: any[]) => any,
  wait?: number,
  options?: Options
);
`,paraId:2,tocIndex:4},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"func",paraId:3,tocIndex:5},{value:"\u9700\u8981\u9632\u6296\u6267\u884C\u7684\u51FD\u6570",paraId:3,tocIndex:5},{value:"(...args: any[]) => any",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"wait",paraId:3,tocIndex:5},{value:"\u7B49\u5F85\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2",paraId:3,tocIndex:5},{value:"number",paraId:3,tocIndex:5},{value:"500",paraId:3,tocIndex:5},{value:"options",paraId:3,tocIndex:5},{value:"\u914D\u7F6E\u9879",paraId:3,tocIndex:5},{value:"Options",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u7C7B\u578B",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"leading",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5728\u5EF6\u8FDF\u5F00\u59CB\u524D\u8C03\u7528\u51FD\u6570",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"trailing",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5728\u5EF6\u8FDF\u5F00\u59CB\u540E\u8C03\u7528\u51FD\u6570",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"true",paraId:4,tocIndex:6},{value:"maxWait",paraId:4,tocIndex:6},{value:"\u6700\u5927\u7B49\u5F85\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},23949:function(t,n){n.Z=`import React, { useState } from 'react';
import { Select } from 'antd';
import { useDebounce } from 'dt-react-component';

export default () => {
    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

    const debounceSearch = useDebounce(
        (input: string) => {
            const newOptions = input ? [{ label: input, value: input }] : [];
            setOptions(newOptions);
        },
        500,
        {
            maxWait: 1000,
        }
    );

    return (
        <Select
            style={{ width: 430 }}
            showSearch
            placeholder="\u8BF7\u8F93\u5165\u8FDB\u884C\u641C\u7D22"
            options={options}
            onSearch={debounceSearch}
        />
    );
};
`}}]);
