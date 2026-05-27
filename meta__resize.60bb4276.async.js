"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7610],{78368:function(d,n,e){e.r(n),e.d(n,{demos:function(){return a}});var t=e(75271),a={"resize-demo-basic":{component:t.memo(t.lazy(function(){return e.e(8281).then(e.bind(e,44974))})),asset:{type:"BLOCK",id:"resize-demo-basic",refAtomIds:["resize"],dependencies:{"index.tsx":{type:"FILE",value:e(85938).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528",description:"\u8BF7\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u4EE5\u67E5\u770B\u6548\u679C"},context:void 0,renderOpts:void 0},"resize-demo-observerele":{component:t.memo(t.lazy(function(){return e.e(8281).then(e.bind(e,13482))})),asset:{type:"BLOCK",id:"resize-demo-observerele",refAtomIds:["resize"],dependencies:{"index.tsx":{type:"FILE",value:e(6482).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u76D1\u542C\u81EA\u5B9A\u4E49\u5143\u7D20",description:"\u8BF7\u8C03\u6574\u5143\u7D20\u5927\u5C0F\u4EE5\u67E5\u770B\u6548\u679C\uFF0C\u901A\u8FC7\u8BBE\u7F6EobserverEle\u81EA\u5B9A\u4E49\u76D1\u542C\u5143\u7D20"},context:void 0,renderOpts:void 0}}},95870:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u7528\u4E8E\u76D1\u542C window \u6216\u8005\u662F\u5176\u4ED6\u5143\u7D20\u7684\u5C3A\u5BF8\u53D8\u5316",paraId:0,tocIndex:0},{value:"\u5143\u7D20\u5927\u5C0F\u81EA\u9002\u5E94\u8C03\u6574\uFF0C\u5E38\u7528\u4E8E\u56FE\u8868",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"children",paraId:2,tocIndex:6},{value:"\u5B50\u5143\u7D20",paraId:2,tocIndex:6},{value:"React.ReactNode",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"observerEle",paraId:2,tocIndex:6},{value:"\u76D1\u542C\u7684\u5143\u7D20,\u4F20\u5165\u5143\u7D20\u4E0D\u5B58\u5728\u9ED8\u8BA4\u76D1\u542C window",paraId:2,tocIndex:6},{value:"HTMLElement",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"onResize",paraId:2,tocIndex:6},{value:"\u91CD\u7F6E\u5143\u7D20\u5927\u5C0F\u7684\u51FD\u6570",paraId:2,tocIndex:6},{value:"() => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6}]},85938:function(d,n){n.Z=`import React, { useCallback, useState } from 'react';
import { Resize } from 'dt-react-component';

export default () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    const onResize = useCallback(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
    }, []);

    return (
        <Resize onResize={onResize}>
            <div>
                <pre>window\u9AD8\u5EA6: {innerWidth}</pre>
                <pre>window\u5BBD\u5EA6: {innerHeight}</pre>
            </div>
        </Resize>
    );
};
`},6482:function(d,n){n.Z=`import React, { useCallback, useRef, useState } from 'react';
import { Resize } from 'dt-react-component';

export default () => {
    const [clientWidth, setWidth] = useState(0);
    const [clientHegiht, setHegiht] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onResize = useCallback(() => {
        setWidth(textareaRef.current!.clientWidth);
        setHegiht(textareaRef.current!.clientHeight);
    }, []);

    return (
        <Resize onResize={onResize} observerEle={textareaRef.current}>
            <textarea
                ref={textareaRef}
                style={{
                    resize: 'both',
                    maxWidth: '100%',
                }}
            />
            <pre>\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: {clientWidth}</pre>
            <pre>\u5F53\u524D\u5143\u7D20\u7684\u53EF\u89C6\u5BBD: {clientHegiht}</pre>
        </Resize>
    );
};
`}}]);
