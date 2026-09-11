"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[1269],{31568:(function(e,t,n){n.r(t),n.d(t,{demos:function(){return d}});var o=n(30758),d={"popover-demo-basic":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(3268)]).then(n.bind(n,87978))})),asset:{type:"BLOCK",id:"popover-demo-basic",refAtomIds:["popover"],dependencies:{"index.tsx":{type:"FILE",value:n(13900).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528",description:"Popover \u7684\u57FA\u672C\u4F7F\u7528\u3002"},routeId:"components/popover/index",context:void 0,renderOpts:void 0},"popover-demo-notitle":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(3268)]).then(n.bind(n,13801))})),asset:{type:"BLOCK",id:"popover-demo-notitle",refAtomIds:["popover"],dependencies:{"index.tsx":{type:"FILE",value:n(3173).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u65E0\u6807\u9898\u5185\u5BB9",description:"\u4EC5\u5C55\u793A\u5185\u5BB9\u7684 Popover\u3002"},routeId:"components/popover/index",context:void 0,renderOpts:void 0},"popover-demo-scroll":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(3268)]).then(n.bind(n,29851))})),asset:{type:"BLOCK",id:"popover-demo-scroll",refAtomIds:["popover"],dependencies:{"index.tsx":{type:"FILE",value:n(59463).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u957F\u5185\u5BB9\u6EDA\u52A8",description:"\u5F53 Popover \u5185\u5BB9\u8D85\u8FC7 400px \u65F6\uFF0C\u6D6E\u5C42\u5185\u90E8\u6EDA\u52A8\u3002"},routeId:"components/popover/index",context:void 0,renderOpts:void 0},"popover-demo-customheight":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(3268)]).then(n.bind(n,74712))})),asset:{type:"BLOCK",id:"popover-demo-customheight",refAtomIds:["popover"],dependencies:{"index.tsx":{type:"FILE",value:n(27366).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u9AD8\u5EA6",description:"\u901A\u8FC7 CSS \u53D8\u91CF\u81EA\u5B9A\u4E49 Popover \u6D6E\u5C42\u5185\u5BB9\u6700\u5927\u9AD8\u5EA6\u3002"},routeId:"components/popover/index",context:void 0,renderOpts:void 0},"popover-demo-maxwidth":{component:o.memo(o.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(3268)]).then(n.bind(n,94822))})),asset:{type:"BLOCK",id:"popover-demo-maxwidth",refAtomIds:["popover"],dependencies:{"index.tsx":{type:"FILE",value:n(56948).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u6700\u5927\u5BBD\u5EA6",description:"Popover \u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6\u4E3A 400px\uFF0C\u957F\u5185\u5BB9\u81EA\u52A8\u6362\u884C\u3002"},routeId:"components/popover/index",context:void 0,renderOpts:void 0}}}),6224:(function(e,t,n){n.r(t);const o=[{value:"\u7528\u4E8E\u5C55\u793A\u66F4\u4E30\u5BCC\u7684\u6C14\u6CE1\u5185\u5BB9\u3002\u7EC4\u4EF6\u57FA\u4E8E antd Popover \u5C01\u88C5\uFF0C\u6D6E\u5C42\u5185\u5BB9\u6700\u5927\u9AD8\u5EA6\u4E3A 400px\uFF0C\u8D85\u8FC7\u540E\u53EF\u6EDA\u52A8\u67E5\u770B\u3002",paraId:0,tocIndex:1},{value:"Popover \u7EC4\u4EF6\u652F\u6301 antd Popover \u7EC4\u4EF6\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u8BE6\u89C1 ",paraId:1,tocIndex:9},{value:"Ant Design Popover API",paraId:1,tocIndex:9},{value:"\u3002",paraId:1,tocIndex:9}];n.d(t,["texts",0,o])}),13900:(function(e,t){t.A=`import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function Basic() {
    return (
        <Popover title="\u6807\u9898" content="\u8FD9\u662F\u4E00\u6BB5 Popover \u5185\u5BB9">
            <Button type="primary">Hover me</Button>
        </Popover>
    );
}
`}),27366:(function(e,t){t.A=`import React, { CSSProperties } from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

const content = Array.from({ length: 12 }, (_, index) => (
    <div key={index}>\u8FD9\u662F\u7B2C {index + 1} \u884C\u81EA\u5B9A\u4E49\u9AD8\u5EA6\u7684 Popover \u5185\u5BB9</div>
));

export default function CustomHeight() {
    return (
        <Popover
            title="\u81EA\u5B9A\u4E49\u9AD8\u5EA6"
            content={<div>{content}</div>}
            trigger="click"
            overlayStyle={{ '--max-height': '160px' } as CSSProperties}
        >
            <Button>\u70B9\u51FB\u67E5\u770B\u81EA\u5B9A\u4E49\u9AD8\u5EA6 Popover</Button>
        </Popover>
    );
}
`}),56948:(function(e,t){t.A=`import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function MaxWidth() {
    return (
        <Popover
            title="\u6700\u5927\u5BBD\u5EA6"
            content="\u8FD9\u662F\u4E00\u6BB5\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u975E\u5E38\u957F\u7684 Popover \u5185\u5BB9\uFF0C\u7528\u4E8E\u5C55\u793A\u6D6E\u5C42\u6700\u5927\u5BBD\u5EA6\u4E3A 400px \u65F6\u7684\u6362\u884C\u6548\u679C\u3002"
        >
            <Button>\u6700\u5927\u5BBD\u5EA6 Popover</Button>
        </Popover>
    );
}
`}),3173:(function(e,t){t.A=`import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

export default function NoTitle() {
    return (
        <Popover content="\u8FD9\u662F\u4E00\u6BB5\u6CA1\u6709\u6807\u9898\u7684 Popover \u5185\u5BB9">
            <Button>\u65E0\u6807\u9898 Popover</Button>
        </Popover>
    );
}
`}),59463:(function(e,t){t.A=`import React from 'react';
import { Button } from 'antd';
import { Popover } from 'dt-react-component';

const content = Array.from({ length: 30 }, (_, index) => (
    <div key={index}>\u8FD9\u662F\u7B2C {index + 1} \u884C\u8F83\u957F\u7684 Popover \u5185\u5BB9</div>
));

export default function Scroll() {
    return (
        <Popover title="\u957F\u5185\u5BB9" content={<div>{content}</div>} trigger="click">
            <Button>\u70B9\u51FB\u67E5\u770B\u957F\u5185\u5BB9 Popover</Button>
        </Popover>
    );
}
`})}]);
