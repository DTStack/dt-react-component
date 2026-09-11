"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1023],{56298:(function(e,n,t){t.r(n),t.d(n,{demos:function(){return d}});var o=t(30758),d={"tooltip-demo-basic":{component:o.memo(o.lazy(function(){return Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(3322)]).then(t.bind(t,27044))})),asset:{type:"BLOCK",id:"tooltip-demo-basic",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:t(70410).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528",description:"Tooltip \u7684\u57FA\u672C\u4F7F\u7528\u3002"},routeId:"components/tooltip/index",context:void 0,renderOpts:void 0},"tooltip-demo-scroll":{component:o.memo(o.lazy(function(){return Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(3322)]).then(t.bind(t,98357))})),asset:{type:"BLOCK",id:"tooltip-demo-scroll",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:t(1749).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u957F\u5185\u5BB9\u6EDA\u52A8",description:"\u5F53 Tooltip \u5185\u5BB9\u8D85\u8FC7 400px \u65F6\uFF0C\u6D6E\u5C42\u5185\u90E8\u6EDA\u52A8\u3002"},routeId:"components/tooltip/index",context:void 0,renderOpts:void 0},"tooltip-demo-customheight":{component:o.memo(o.lazy(function(){return Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(3322)]).then(t.bind(t,61194))})),asset:{type:"BLOCK",id:"tooltip-demo-customheight",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:t(98564).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",description:"\u901A\u8FC7 overlayInnerStyle \u81EA\u5B9A\u4E49 Tooltip \u6D6E\u5C42\u5185\u5BB9\u9AD8\u5EA6\u3002"},routeId:"components/tooltip/index",context:void 0,renderOpts:void 0},"tooltip-demo-maxwidth":{component:o.memo(o.lazy(function(){return Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(3322)]).then(t.bind(t,43716))})),asset:{type:"BLOCK",id:"tooltip-demo-maxwidth",refAtomIds:["tooltip"],dependencies:{"index.tsx":{type:"FILE",value:t(36710).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u6700\u5927\u5BBD\u5EA6",description:"Tooltip \u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6\u4E3A 400px\uFF0C\u957F\u5185\u5BB9\u81EA\u52A8\u6362\u884C\u3002"},routeId:"components/tooltip/index",context:void 0,renderOpts:void 0}}}),38470:(function(e,n,t){t.r(n);const o=[{value:"\u7528\u4E8E\u5C55\u793A\u7B80\u5355\u6587\u5B57\u63D0\u793A\u3002\u7EC4\u4EF6\u57FA\u4E8E antd Tooltip \u5C01\u88C5\uFF0C\u6D6E\u5C42\u5185\u5BB9\u6700\u5927\u9AD8\u5EA6\u4E3A 400px\uFF0C\u8D85\u8FC7\u540E\u53EF\u6EDA\u52A8\u67E5\u770B\u3002",paraId:0,tocIndex:1},{value:"Tooltip \u7EC4\u4EF6\u652F\u6301 antd Tooltip \u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u8BE6\u89C1 ",paraId:1,tocIndex:8},{value:"Ant Design Tooltip API",paraId:1,tocIndex:8},{value:"\u3002",paraId:1,tocIndex:8}];t.d(n,["texts",0,o])}),70410:(function(e,n){n.A=`import React from 'react';
import { Tooltip } from 'dt-react-component';

export default function Basic() {
    return (
        <Tooltip title="\u8FD9\u662F\u4E00\u6BB5\u7B80\u5355\u7684\u63D0\u793A\u6587\u6848">
            <span>\u9ED8\u8BA4 Tooltip</span>
        </Tooltip>
    );
}
`}),98564:(function(e,n){n.A=`import React from 'react';
import { Tooltip } from 'dt-react-component';

const content = Array.from({ length: 12 }, (_, index) => (
    <div key={index}>\u8FD9\u662F\u7B2C {index + 1} \u884C\u81EA\u5B9A\u4E49\u9AD8\u5EA6\u7684\u63D0\u793A\u5185\u5BB9</div>
));

export default function CustomHeight() {
    return (
        <Tooltip
            title={<div>{content}</div>}
            overlayInnerStyle={{
                maxHeight: 160,
                overflowY: 'auto',
            }}
        >
            <span>\u70B9\u51FB\u67E5\u770B\u81EA\u5B9A\u4E49\u9AD8\u5EA6 Tooltip</span>
        </Tooltip>
    );
}
`}),36710:(function(e,n){n.A=`import React from 'react';
import { Tooltip } from 'dt-react-component';

export default function MaxWidth() {
    return (
        <Tooltip title="\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9\u6587\u5B57\u63D0\u793A\u4EC5\u5C55\u793A\u6587\u672C\u5185\u5BB9">
            <span>\u6700\u5927\u5BBD\u5EA6 Tooltip</span>
        </Tooltip>
    );
}
`}),1749:(function(e,n){n.A=`import React from 'react';
import { Tooltip } from 'dt-react-component';

const content = Array.from({ length: 30 }, (_, index) => (
    <div key={index}>\u8FD9\u662F\u7B2C {index + 1} \u884C\u8F83\u957F\u7684\u63D0\u793A\u5185\u5BB9</div>
));

export default function Scroll() {
    return (
        <Tooltip title={<div>{content}</div>} trigger="click">
            <span>\u70B9\u51FB\u67E5\u770B\u957F\u5185\u5BB9 Tooltip</span>
        </Tooltip>
    );
}
`})}]);
