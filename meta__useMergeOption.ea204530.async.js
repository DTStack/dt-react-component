"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6635],{633:function(a,t,n){n.r(t),n.d(t,{demos:function(){return o}});var e=n(75271),o={"src-use-merge-option-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(4877),n.e(8704),n.e(653),n.e(3028),n.e(3496),n.e(32),n.e(9520),n.e(7402),n.e(9448),n.e(4843),n.e(7868),n.e(2643),n.e(5572),n.e(4019),n.e(3607),n.e(6205),n.e(219),n.e(1082),n.e(27),n.e(1094),n.e(9200),n.e(7955),n.e(6566),n.e(1087),n.e(1969),n.e(2433)]).then(n.bind(n,76409))})),asset:{type:"BLOCK",id:"src-use-merge-option-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(3053).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},43640:function(a,t,n){n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:"\u9700\u8981\u5408\u5E76\u914D\u7F6E\u9879",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"disabled",paraId:1,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"options",paraId:1,tocIndex:5},{value:"\u5408\u5E76\u540E\u7684\u914D\u7F6E\u9879",paraId:1,tocIndex:5},{value:"T extends Record<string, any>",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}]},3053:function(a,t){t.Z=`import React, { useState } from 'react';
import { Segmented } from 'antd';
import { useMergeOption } from 'dt-react-component';
import type { MergeOption } from 'dt-react-component/useMergeOption';

type ExampleState = MergeOption<{ day?: boolean }>;

export default function Basic() {
    const [state, setState] = useState<ExampleState>(false);

    const merged = useMergeOption(state, { day: true });

    const getValue = () => {
        if (state === false) return 0;
        if (state === true) return 2;
        return 1;
    };
    const setValue = (value: number) => {
        setState([false, { day: false }, true][value]);
    };

    return (
        <>
            <label>Change value:</label>
            <Segmented
                value={getValue()}
                options={[
                    {
                        label: 'false',
                        value: 0,
                    },
                    {
                        label: \`{ day: false }\`,
                        value: 1,
                    },
                    {
                        label: 'true',
                        value: 2,
                    },
                ]}
                onChange={(val) => setValue(val as number)}
            />
            <pre style={{ marginTop: 8, border: '1px solid #eee', padding: 8 }}>
                {JSON.stringify(merged, null, 2)}
            </pre>
        </>
    );
}
`}}]);
