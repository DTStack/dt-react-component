"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5748],{57453:function(o,d,t){t.r(d),t.d(d,{demos:function(){return e}});var n=t(75271),e={"src-use-measure-demo-basic":{component:n.memo(n.lazy(function(){return Promise.all([t.e(9048),t.e(4180),t.e(5385),t.e(8251),t.e(4877),t.e(8704),t.e(653),t.e(3028),t.e(3496),t.e(32),t.e(9520),t.e(7402),t.e(9448),t.e(4843),t.e(7868),t.e(2643),t.e(5572),t.e(4019),t.e(3607),t.e(6205),t.e(219),t.e(1082),t.e(27),t.e(1094),t.e(9200),t.e(7955),t.e(6566),t.e(1087),t.e(1969),t.e(2433)]).then(t.bind(t,80171))})),asset:{type:"BLOCK",id:"src-use-measure-demo-basic",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(5544).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0}}},23436:function(o,d,t){t.r(d),t.d(d,{texts:function(){return n}});const n=[{value:"\u9700\u8981\u83B7\u53D6\u5143\u7D20\u5C3A\u5BF8",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"ref",paraId:1,tocIndex:5},{value:"DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"rect",paraId:1,tocIndex:5},{value:"DOMRect",paraId:1,tocIndex:5},{value:"UseMeasureRect",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"getElement",paraId:1,tocIndex:5},{value:"\u83B7\u53D6 DOM \u5B9E\u4F8B",paraId:1,tocIndex:5},{value:"() => HTMLDivElement",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5}]},5544:function(o,d){d.Z=`import React from 'react';
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
`}}]);
