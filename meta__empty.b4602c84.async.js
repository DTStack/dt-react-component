"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4313],{26844:(function(O,i,t){t.r(i),t.d(i,{demos:function(){return z}});var c=t(57704),h=t.n(c),D=t(55472),j=t.n(D),$=t(65788),S=t.n($),I=t(30758),z={"empty-demo-0":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a,f,e,s,y;return h()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=v.sent,n=l.default,m=l.useState,v.next=7,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 7:return o=v.sent,d=o.Empty,v.next=11,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 11:return a=v.sent,f=a.Radio,e=a.Space,s=[{label:"default",value:"default"},{label:"project",value:"project"},{label:"chart",value:"chart"},{label:"search",value:"search"},{label:"permission",value:"permission"},{label:"overview",value:"overview"}],y=function(x){switch(x){case"default":return n.createElement(d,{type:"default"});case"project":return n.createElement(d,{type:"project",description:"\u7A7A\u9879\u76EE"});case"chart":return n.createElement(d,{type:"chart",description:"\u56FE\u8868\u7A7A\u6570\u636E"});case"search":return n.createElement(d,{type:"search",description:"\u641C\u7D22\u65E0\u6570\u636E"});case"permission":return n.createElement(d,{type:"permission",description:"\u65E0\u6743\u9650"});case"overview":return n.createElement(d,{type:"overview",description:"description"});default:return null}},v.abrupt("return",{default:function(){var x=m("default"),g=j()(x,2),C=g[0],M=g[1];return n.createElement(n.Fragment,null,n.createElement(e,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(f.Group,{defaultValue:"default",optionType:"button",options:s,onChange:function(u){return M(u.target.value)}}),y(C)))}});case 17:case"end":return v.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-0",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Radio, Space } from 'antd';

const options = [
    { label: 'default', value: 'default' },
    { label: 'project', value: 'project' },
    { label: 'chart', value: 'chart' },
    { label: 'search', value: 'search' },
    { label: 'permission', value: 'permission' },
    { label: 'overview', value: 'overview' },
];

const getEmpty = (type) => {
    switch (type) {
        case 'default':
            return <Empty type="default" />;
        case 'project':
            return <Empty type="project" description="\u7A7A\u9879\u76EE" />;
        case 'chart':
            return <Empty type="chart" description="\u56FE\u8868\u7A7A\u6570\u636E" />;
        case 'search':
            return <Empty type="search" description="\u641C\u7D22\u65E0\u6570\u636E" />;
        case 'permission':
            return <Empty type="permission" description="\u65E0\u6743\u9650" />;
        case 'overview':
            return <Empty type="overview" description="description" />;
        default:
            return null;
    }
};

export default () => {
    const [emptyType, setEmptyType] = useState('default');
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Radio.Group
                    defaultValue="default"
                    optionType="button"
                    options={options}
                    onChange={(e) => setEmptyType(e.target.value)}
                />
                {getEmpty(emptyType)}
            </Space>
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"}},entry:"index.jsx",title:"\u4F7F\u7528\u5185\u7F6E\u72B6\u6001"},routeId:"components/empty/index",context:void 0,renderOpts:void 0},"empty-demo-1":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 6:return m=e.sent,o=m.Empty,e.next=10,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 10:return d=e.sent,a=d.Divider,e.abrupt("return",{default:function(){return n.createElement(o,{image:"https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg"})}});case 13:case"end":return e.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-1",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"}},entry:"index.jsx",title:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u7247"},routeId:"components/empty/index",context:void 0,renderOpts:void 0},"empty-demo-2":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a;return h()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=e.sent,n=l.default,e.next=6,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 6:return m=e.sent,o=m.Empty,e.next=10,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 10:return d=e.sent,a=d.Divider,e.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(o,{description:"\u4F7F\u7528 size: default, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 80"}),n.createElement(o,{size:"large",description:"\u4F7F\u7528 size: large, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 100"}),n.createElement(o,{imageStyle:{height:160},description:"\u4F7F\u7528 imageStyle, \u8BBE\u7F6E\u5176\u4ED6\u9AD8\u5EA6\u4EE5\u53CA\u5C5E\u6027"}))}});case 13:case"end":return e.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-2",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty description="\u4F7F\u7528 size: default, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 80" />
            <Empty size="large" description="\u4F7F\u7528 size: large, \u9ED8\u8BA4\u5927\u5C0F\u4E3A 100" />
            <Empty
                imageStyle={{ height: 160 }}
                description="\u4F7F\u7528 imageStyle, \u8BBE\u7F6E\u5176\u4ED6\u9AD8\u5EA6\u4EE5\u53CA\u5C5E\u6027"
            />
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"}},entry:"index.jsx",title:"\u63A7\u5236\u56FE\u7247\u5927\u5C0F"},routeId:"components/empty/index",context:void 0,renderOpts:void 0},"empty-demo-3":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a,f,e;return h()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=y.sent,n=l.default,m=l.useState,y.next=7,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 7:return o=y.sent,d=o.Space,a=o.Switch,y.next=12,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 12:return f=y.sent,e=f.Empty,y.abrupt("return",{default:function(){var v=m(!1),P=j()(v,2),x=P[0],g=P[1];return n.createElement(d,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(a,{onChange:function(M){return g(M)},checkedChildren:"\u5C55\u793A\u5360\u4F4D\u7B26",unCheckedChildren:"\u5C55\u793A\u5185\u5BB9"}),n.createElement(e,{showEmpty:x},"More Data"))}});case 15:case"end":return y.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-3",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="\u5C55\u793A\u5360\u4F4D\u7B26"
                unCheckedChildren="\u5C55\u793A\u5185\u5BB9"
            />
            <Empty showEmpty={empty}>More Data</Empty>
        </Space>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx",title:"\u5224\u65AD\u5C55\u793A\u5185\u5BB9"},routeId:"components/empty/index",context:void 0,renderOpts:void 0},"empty-demo-4":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a,f,e,s;return h()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=E.sent,n=l.default,m=l.useState,E.next=7,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 7:return o=E.sent,d=o.Button,a=o.Space,f=o.Switch,E.next=13,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 13:return e=E.sent,s=e.Empty,E.abrupt("return",{default:function(){var P=m(!1),x=j()(P,2),g=x[0],C=x[1];return n.createElement(a,{direction:"vertical",style:{width:"100%"},size:16},n.createElement(f,{onChange:function(R){return C(R)},checkedChildren:"\u5C55\u793A\u5360\u4F4D\u7B26",unCheckedChildren:"\u5C55\u793A\u5185\u5BB9"}),n.createElement(s,{showEmpty:g,extra:n.createElement(d,null,"\u6DFB\u52A0")},"More Data"))}});case 16:case"end":return E.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-4",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="\u5C55\u793A\u5360\u4F4D\u7B26"
                unCheckedChildren="\u5C55\u793A\u5185\u5BB9"
            />
            <Empty showEmpty={empty} extra={<Button>\u6DFB\u52A0</Button>}>
                More Data
            </Empty>
        </Space>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx",title:"\u5C55\u793A antd Empty \u7EC4\u4EF6\u7684 children"},routeId:"components/empty/index",context:void 0,renderOpts:void 0},"empty-demo-5":{component:I.memo(I.lazy(S()(h()().mark(function p(){var l,n,m,o,d,a,f;return h()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(t.t.bind(t,30758,19));case 2:return l=s.sent,n=l.default,m=l.useState,s.next=7,Promise.all([t.e(8848),t.e(5808),t.e(1585),t.e(9495),t.e(444),t.e(3069),t.e(1073),t.e(5150),t.e(8998),t.e(5385),t.e(6217),t.e(2441),t.e(3900),t.e(7413),t.e(5619),t.e(9275),t.e(198),t.e(4562),t.e(8578),t.e(9389),t.e(7205),t.e(954),t.e(411),t.e(153),t.e(1186),t.e(1127),t.e(7820),t.e(6881),t.e(8765),t.e(1143),t.e(9259),t.e(6557),t.e(9010),t.e(4401),t.e(2071)]).then(t.bind(t,10589));case 7:return o=s.sent,d=o.Empty,s.next=11,Promise.all([t.e(8848),t.e(1585),t.e(1073),t.e(8998),t.e(6217),t.e(7413),t.e(5619),t.e(9275),t.e(954),t.e(4314),t.e(7858),t.e(6023),t.e(6858)]).then(t.bind(t,56858));case 11:return a=s.sent,f=a.Space,s.abrupt("return",{default:function(){return n.createElement(n.Fragment,null,n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",type:"search",active:!0}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",type:"search"}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",size:"large",type:"search",active:!0}),n.createElement(d,{description:"\u641C\u7D22\u65E0\u6570\u636E",size:"large",type:"search"}))}});case 14:case"end":return s.stop()}},p)})))),asset:{type:"BLOCK",id:"empty-demo-5",refAtomIds:["empty"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Space } from 'antd';

export default () => {
    return (
        <>
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" type="search" active={true} />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" type="search" />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" size="large" type="search" active={true} />
            <Empty description="\u641C\u7D22\u65E0\u6570\u636E" size="large" type="search" />
        </>
    );
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"}},entry:"index.jsx",title:"\u4F7F\u7528\u52A8\u6001\u7684\u641C\u7D22\u56FE\u7247"},routeId:"components/empty/index",context:void 0,renderOpts:void 0}}}),36636:(function(O,i,t){t.r(i);const c=[{value:"\u5F53\u76EE\u524D\u6CA1\u6709\u6570\u636E\u65F6\uFF0C\u7528\u4E8E\u663E\u5F0F\u7684\u7528\u6237\u63D0\u793A\u3002",paraId:0,tocIndex:1},{value:"\u521D\u59CB\u5316\u573A\u666F\u65F6\u7684\u5F15\u5BFC\u521B\u5EFA\u6D41\u7A0B\u3002",paraId:0,tocIndex:1},{value:"\u5185\u7F6E 6 \u79CD\u7A7A\u72B6\u6001\u7C7B\u578B\u3002",paraId:0,tocIndex:1},{value:"\u7528\u4E8E\u4E09\u5143\u8868\u8FBE\u5F0F\u6765\u5224\u65AD\u5C55\u793A ",paraId:0,tocIndex:1},{value:"<Empty />",paraId:0,tocIndex:1},{value:" \u8FD8\u662F ",paraId:0,tocIndex:1},{value:"<OtherComponent />",paraId:0,tocIndex:1},{value:"\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:9},{value:"\u8BF4\u660E",paraId:1,tocIndex:9},{value:"\u7C7B\u578B",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:9},{value:"type",paraId:1,tocIndex:9},{value:"\u9ED8\u8BA4\u5C55\u793A\u56FE\u7247\u7684\u7C7B\u578B",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"project",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"chart",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"search",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"permission",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"overview",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:"size",paraId:1,tocIndex:9},{value:"\u56FE\u7247\u5927\u5C0F",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:" | ",paraId:1,tocIndex:9},{value:"large",paraId:1,tocIndex:9},{value:"default",paraId:1,tocIndex:9},{value:"showEmpty",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A Empty \u7EC4\u4EF6",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"true",paraId:1,tocIndex:9},{value:"children",paraId:1,tocIndex:9},{value:"\u5C55\u793A\u5185\u5BB9",paraId:1,tocIndex:9},{value:"React.ReactNode",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"extra",paraId:1,tocIndex:9},{value:"\u66FF\u6362 antd Empty \u7684 children",paraId:1,tocIndex:9},{value:" React.ReactNode",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"active",paraId:1,tocIndex:9},{value:"\u662F\u5426\u5C55\u793A\u52A8\u6001\u7684\u56FE\u7247",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"true",paraId:1,tocIndex:9},{value:"\u5176\u4F59\u5C5E\u6027",paraId:2},{value:"\u7EE7\u627F antd4.x \u7684 Empty",paraId:2}];t.d(i,["texts",0,c])})}]);
