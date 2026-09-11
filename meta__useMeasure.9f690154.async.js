"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7441],{25140:(function(o,d,t){t.r(d),t.d(d,{demos:function(){return e}});var n=t(30758),e={"src-use-measure-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(4896),t.e(3069),t.e(9495),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(8578),t.e(9389),t.e(7205),t.e(411),t.e(1186),t.e(1127),t.e(8765),t.e(3501),t.e(6023),t.e(1586),t.e(9010),t.e(4401),t.e(1917)]).then(t.bind(t,69728))})),asset:{type:"BLOCK",id:"src-use-measure-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(34054).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},routeId:"components/useMeasure/index",context:void 0,renderOpts:void 0}}}),69972:(function(o,d,t){t.r(d);const n=[{value:"\u9700\u8981\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"ref",paraId:1,tocIndex:5},{value:"DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"rect",paraId:1,tocIndex:5},{value:"DOMRect",paraId:1,tocIndex:5},{value:"UseMeasureRect",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"getElement",paraId:1,tocIndex:5},{value:"\u83B7\u53D6 DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"() => HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}];t.d(d,["texts",0,n])}),34054:(function(o,d){d.A=`import React from 'react';
import { useMeasure } from 'dt-react-component';

export default () => {
    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();
    return (
        <div ref={ref}>
            <div>x: {x}</div>
            <div>y: {y}</div>
            <div>width: {width}</div>
            <div>height: {height}</div>
            <div>top: {top}</div>
            <div>right: {right}</div>
            <div>bottom: {bottom}</div>
            <div>left: {left}</div>
        </div>
    );
};
`})}]);
