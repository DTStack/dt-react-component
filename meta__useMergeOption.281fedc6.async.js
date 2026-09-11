"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8058],{11357:(function(o,t,n){n.r(t),n.d(t,{demos:function(){return a}});var e=n(30758),a={"src-use-merge-option-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(8578),n.e(9389),n.e(7205),n.e(411),n.e(1186),n.e(1127),n.e(8765),n.e(3501),n.e(6023),n.e(1586),n.e(9010),n.e(4401),n.e(1917)]).then(n.bind(n,24047))})),asset:{type:"BLOCK",id:"src-use-merge-option-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(36279).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/useMergeOption/index",context:void 0,renderOpts:void 0}}}),43825:(function(o,t,n){n.r(t);const e=[{value:"\u9700\u8981\u5408\u5E76\u914D\u7F6E\u9879",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"disabled",paraId:1,tocIndex:5},{value:"\u662F\u5426\u7981\u7528",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"options",paraId:1,tocIndex:5},{value:"\u5408\u5E76\u540E\u7684\u914D\u7F6E\u9879",paraId:1,tocIndex:5},{value:"T extends Record<string, any>",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}];n.d(t,["texts",0,e])}),36279:(function(o,t){t.A=`import React, { useState } from 'react';
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
`})}]);
