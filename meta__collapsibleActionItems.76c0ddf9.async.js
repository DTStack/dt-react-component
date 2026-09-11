"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[8804],{95967:(function(T,s,n){n.r(s),n.d(s,{demos:function(){return K}});var P=n(57704),v=n.n(P),B=n(55472),D=n.n(B),g=n(65788),S=n.n(g),x=n(30758),K={"collapsibleactionitems-demo-0":{component:x.memo(x.lazy(S()(v()().mark(function h(){var d,t,m,I,c,o,i,l,p,u;return v()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(n.t.bind(n,30758,19));case 2:return d=a.sent,t=d.default,m=d.useState,a.next=7,Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(4562),n.e(8578),n.e(9389),n.e(7205),n.e(954),n.e(411),n.e(153),n.e(1186),n.e(1127),n.e(7820),n.e(6881),n.e(8765),n.e(1143),n.e(9259),n.e(6557),n.e(9010),n.e(4401),n.e(2071)]).then(n.bind(n,10589));case 7:return I=a.sent,c=I.CollapsibleActionItems,a.next=11,Promise.all([n.e(8848),n.e(1585),n.e(1073),n.e(8998),n.e(6217),n.e(7413),n.e(5619),n.e(9275),n.e(954),n.e(4314),n.e(7858),n.e(6023),n.e(6858)]).then(n.bind(n,56858));case 11:return o=a.sent,i=o.Table,l=o.message,p=o.Popconfirm,u=o.Button,a.abrupt("return",{default:function(){var A=m([{id:1,name:"\u6211\u662F\u6D4B\u8BD5\u6570\u636E"},{id:2,name:"\u6211\u662F\u6837\u672C\u6570\u636E"}]),y=D()(A,2),f=y[0],O=y[1],M=function(r){switch(r){case"edit":l.info("\u7F16\u8F91\u88AB\u70B9\u51FB");break;case"close":l.info("\u5173\u95ED\u88AB\u70B9\u51FB");break;case"open":l.info("\u5F00\u542F\u88AB\u70B9\u51FB");default:break}},C=[{title:"id",dataIndex:"id"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u64CD\u4F5C",dataIndex:"",width:230,render:function(){var r=[{key:"edit",name:"\u7F16\u8F91"},{key:"delete",name:"\u5220\u9664",render:function(){return t.createElement(p,{title:"\u786E\u8BA4\u5220\u9664\uFF1F"},t.createElement(u,{type:"link",style:{color:"red"}},"\u5220\u9664"))}},{key:"close",name:"\u5173\u95ED"},{key:"open",name:"\u5F00\u542F",disabled:!0}];return t.createElement(c,{maxCount:3,actionItems:r,onItemClick:M})}}];return t.createElement(i,{rowKey:"id",dataSource:f,columns:C})}});case 17:case"end":return a.stop()}},h)})))),asset:{type:"BLOCK",id:"collapsibleactionitems-demo-0",refAtomIds:["collapsibleActionItems"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { CollapsibleActionItems } from 'dt-react-component';
import { Table, message, Popconfirm, Button } from 'antd';

export default () => {
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: '\u6211\u662F\u6D4B\u8BD5\u6570\u636E',
        },
        {
            id: 2,
            name: '\u6211\u662F\u6837\u672C\u6570\u636E',
        },
    ]);

    const handleClick = (key) => {
        switch (key) {
            case 'edit':
                message.info('\u7F16\u8F91\u88AB\u70B9\u51FB');
                break;
            case 'close':
                message.info('\u5173\u95ED\u88AB\u70B9\u51FB');
                break;
            case 'open':
                message.info('\u5F00\u542F\u88AB\u70B9\u51FB');
            default:
                break;
        }
    };

    const cols = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '\u540D\u79F0',
            dataIndex: 'name',
        },
        {
            title: '\u64CD\u4F5C',
            dataIndex: '',
            width: 230,
            render: () => {
                const actions = [
                    { key: 'edit', name: '\u7F16\u8F91' },
                    {
                        key: 'delete',
                        name: '\u5220\u9664',
                        render: () => (
                            <Popconfirm title="\u786E\u8BA4\u5220\u9664\uFF1F">
                                <Button type="link" style={{ color: 'red' }}>
                                    \u5220\u9664
                                </Button>
                            </Popconfirm>
                        ),
                    },
                    { key: 'close', name: '\u5173\u95ED' },
                    { key: 'open', name: '\u5F00\u542F', disabled: true },
                ];
                return (
                    <CollapsibleActionItems
                        maxCount={3}
                        actionItems={actions}
                        onItemClick={handleClick}
                    />
                );
            },
        },
    ];

    return <Table rowKey="id" dataSource={dataSource} columns={cols} />;
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"}},entry:"index.jsx",title:"\u8868\u683C\u5185\u4F7F\u7528"},routeId:"components/collapsibleActionItems/index",context:void 0,renderOpts:void 0},"collapsibleactionitems-demo-1":{component:x.memo(x.lazy(S()(v()().mark(function h(){var d,t,m,I,c,o,i,l,p,u,E;return v()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,30758,19));case 2:return d=e.sent,t=d.default,m=d.useState,e.next=7,Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(4896),n.e(3069),n.e(9495),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(4562),n.e(8578),n.e(9389),n.e(7205),n.e(954),n.e(411),n.e(153),n.e(1186),n.e(1127),n.e(7820),n.e(6881),n.e(8765),n.e(1143),n.e(9259),n.e(6557),n.e(9010),n.e(4401),n.e(2071)]).then(n.bind(n,10589));case 7:return I=e.sent,c=I.CollapsibleActionItems,e.next=11,Promise.all([n.e(8848),n.e(1585),n.e(1073),n.e(8998),n.e(6217),n.e(7413),n.e(5619),n.e(9275),n.e(954),n.e(4314),n.e(7858),n.e(6023),n.e(6858)]).then(n.bind(n,56858));case 11:return o=e.sent,i=o.Table,l=o.message,p=o.Popconfirm,e.next=17,n.e(5150).then(n.bind(n,12769));case 17:return u=e.sent,E=u.DownOutlined,e.abrupt("return",{default:function(){var y=m([{id:1,name:"\u6211\u662F\u6D4B\u8BD5\u6570\u636E"}]),f=D()(y,2),O=f[0],M=f[1],C=[{title:"id",dataIndex:"id"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u64CD\u4F5C",dataIndex:"",width:230,render:function(){var r=[{key:"edit",name:"\u7F16\u8F91"},{key:"delete",name:"\u5220\u9664"},{key:"close",name:"\u5173\u95ED"},{key:"open",name:"\u5F00\u542F"}];return t.createElement(c,{maxCount:3,actionItems:r,divider:t.createElement("span",{style:{color:"#eee"}},"-"),collapseIcon:t.createElement(E,{style:{marginLeft:16}})})}}];return t.createElement(i,{rowKey:"id",dataSource:O,columns:C})}});case 20:case"end":return e.stop()}},h)})))),asset:{type:"BLOCK",id:"collapsibleactionitems-demo-1",refAtomIds:["collapsibleActionItems"],dependencies:{"index.jsx":{type:"FILE",value:`import React, { useState } from 'react';
import { CollapsibleActionItems } from 'dt-react-component';
import { Table, message, Popconfirm } from 'antd';
import { DownOutlined } from '@dtinsight/react-icons';

export default () => {
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: '\u6211\u662F\u6D4B\u8BD5\u6570\u636E',
        },
    ]);

    const cols = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: '\u540D\u79F0',
            dataIndex: 'name',
        },
        {
            title: '\u64CD\u4F5C',
            dataIndex: '',
            width: 230,
            render: () => {
                const actions = [
                    { key: 'edit', name: '\u7F16\u8F91' },
                    { key: 'delete', name: '\u5220\u9664' },
                    { key: 'close', name: '\u5173\u95ED' },
                    { key: 'open', name: '\u5F00\u542F' },
                ];
                return (
                    <CollapsibleActionItems
                        maxCount={3}
                        actionItems={actions}
                        divider={<span style={{ color: '#eee' }}>-</span>}
                        collapseIcon={<DownOutlined style={{ marginLeft: 16 }} />}
                    />
                );
            },
        },
    ];

    return <Table rowKey="id" dataSource={dataSource} columns={cols} />;
};`},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"},antd:{type:"NPM",value:"4.24.16"},"@dtinsight/react-icons":{type:"NPM",value:"1.68.0"}},entry:"index.jsx",title:"\u81EA\u5B9A\u4E49\u5206\u5272\u7B26\u4E0E\u4E0B\u62C9\u56FE\u6807"},routeId:"components/collapsibleActionItems/index",context:void 0,renderOpts:void 0}}}),56567:(function(T,s,n){n.r(s);const P=[{value:"\u5F53\u64CD\u4F5C\u9879\u8FC7\u591A\u65F6\uFF0C\u5C06\u591A\u4F59\u7684\u64CD\u4F5C\u9879\u5C55\u793A\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\uFF0C\u4E00\u822C\u7528\u4E8E\u8868\u683C\u7684\u64CD\u4F5C\u680F",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"actionItems",paraId:1,tocIndex:6},{value:"\u64CD\u4F5C\u9879",paraId:1,tocIndex:6},{value:"ActionItem",paraId:2,tocIndex:6},{value:"[]",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"maxCount",paraId:1,tocIndex:6},{value:"\u6700\u5927\u5C55\u793A\u6570\u91CF\uFF0C\u8D85\u51FA\u90E8\u5206\u4F1A\u6298\u53E0\u81F3\u4E0B\u62C9\u83DC\u5355\u4E2D",paraId:1,tocIndex:6},{value:"number",paraId:1,tocIndex:6},{value:"3",paraId:1,tocIndex:6},{value:"divider",paraId:1,tocIndex:6},{value:"\u64CD\u4F5C\u9879\u5206\u5272\u7B26",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"<Divider type='vertical'/>",paraId:1,tocIndex:6},{value:"collapseIcon",paraId:1,tocIndex:6},{value:"\u4E0B\u62C9\u83DC\u5355\u6298\u53E0\u56FE\u6807",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"<EllipsisOutlined />",paraId:1,tocIndex:6},{value:"dropdownProps",paraId:1,tocIndex:6},{value:"\u6298\u53E0\u83DC\u5355\u989D\u5916\u7684 Props, \u8BE6\u7EC6\u8BF7\u53C2\u8003 antd \u7684",paraId:1,tocIndex:6},{value:"Dropdown",paraId:1,tocIndex:6},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:6},{value:"DropDownProps",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"buttonProps",paraId:1,tocIndex:6},{value:"\u6309\u94AE\u989D\u5916\u7684 Props, \u8BE6\u7EC6\u8BF7\u53C2\u8003 antd \u7684",paraId:1,tocIndex:6},{value:"Button",paraId:1,tocIndex:6},{value:"\u7EC4\u4EF6",paraId:1,tocIndex:6},{value:"ButtonProps",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"onItemClick",paraId:1,tocIndex:6},{value:"\u64CD\u4F5C\u9879\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:6},{value:"(key: React.Key) => void",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"key",paraId:3,tocIndex:7},{value:"\u552F\u4E00\u6807\u8BC6",paraId:3,tocIndex:7},{value:"React.Key",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"name",paraId:3,tocIndex:7},{value:"\u663E\u793A\u7684\u540D\u79F0",paraId:3,tocIndex:7},{value:"string",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7},{value:"disabled",paraId:3,tocIndex:7},{value:"\u662F\u5426\u7981\u7528",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"false",paraId:3,tocIndex:7},{value:"render",paraId:3,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\uFF0C\u672A\u6298\u53E0\u7684\u64CD\u4F5C\u9879\u9ED8\u8BA4\u4F1A\u4EE5",paraId:3,tocIndex:7},{value:"link",paraId:3,tocIndex:7},{value:"\u7C7B\u578B\u7684 ",paraId:3,tocIndex:7},{value:"Button",paraId:3,tocIndex:7},{value:"\u5F62\u5F0F\u5C55\u793A",paraId:3,tocIndex:7},{value:"() => React.ReactNode",paraId:3,tocIndex:7},{value:"-",paraId:3,tocIndex:7}];n.d(s,["texts",0,P])})}]);
