"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[7402],{88461:(function(u,d,n){n.r(d),n.d(d,{demos:function(){return y}});var m=n(57704),s=n.n(m),v=n(65788),I=n.n(v),c=n(30758),y={"contextmenu-demo-0":{component:c.memo(c.lazy(I()(s()().mark(function i(){var r,t,x,l,f,a;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,30758,19));case 2:return r=e.sent,t=r.default,e.next=6,Promise.all([n.e(8848),n.e(1585),n.e(1073),n.e(8998),n.e(6217),n.e(7413),n.e(5619),n.e(9275),n.e(954),n.e(4314),n.e(7858),n.e(6023),n.e(6858)]).then(n.bind(n,56858));case 6:return x=e.sent,l=x.Tree,e.next=10,Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(1073),n.e(5150),n.e(8998),n.e(5385),n.e(6217),n.e(2441),n.e(3900),n.e(7413),n.e(5619),n.e(9275),n.e(198),n.e(4562),n.e(8578),n.e(9389),n.e(7205),n.e(954),n.e(411),n.e(153),n.e(1186),n.e(1127),n.e(7820),n.e(6881),n.e(8765),n.e(1143),n.e(9259),n.e(6557),n.e(9010),n.e(4401),n.e(2071)]).then(n.bind(n,10589));case 10:return f=e.sent,a=f.ContextMenu,e.abrupt("return",{default:function(){return t.createElement("div",{style:{position:"relative"}},t.createElement(l,{defaultExpandAll:!0},t.createElement(l.TreeNode,{key:"0-0",title:t.createElement(a,{data:[{key:"create",text:"\u65B0\u5EFA\u4EFB\u52A1",cb:function(){}},{key:"createFolder",text:"\u65B0\u5EFA\u6587\u4EF6\u5939",cb:function(){}},{key:"edit",text:"\u7F16\u8F91",cb:function(){}},{key:"remove",text:"\u5220\u9664",confirm:!0,confirmProps:{title:"\u786E\u5B9A\u5220\u9664\u8FD9\u4E2A\u8D44\u6E90\u5417",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){console.log("\u5220\u9664")}}}]},"folder"),className:"anchor-experiment-root"},t.createElement(l.TreeNode,{key:"0-0-0",title:t.createElement(a,{data:[{key:"edit",text:"\u7F16\u8F91",cb:function(){}},{key:"clone",text:"\u514B\u9686",cb:function(){}},{key:"remove",text:"\u5220\u9664",cb:function(){}}]},"file1"),className:"anchor-experiment-file"}),t.createElement(l.TreeNode,{key:"0-0-1",title:t.createElement(a,{data:[]},"file2"),className:"anchor-experiment-file"}))))}});case 13:case"end":return e.stop()}},i)})))),asset:{type:"BLOCK",id:"contextmenu-demo-0",refAtomIds:["contextMenu"],dependencies:{"index.jsx":{type:"FILE",value:`import React from 'react';
import { Tree } from 'antd';
import { ContextMenu } from 'dt-react-component';

export default () => {
    return (
        <div style={{ position: 'relative' }}>
            <Tree defaultExpandAll>
                <Tree.TreeNode
                    key="0-0"
                    title={
                        <ContextMenu
                            data={[
                                {
                                    key: 'create',
                                    text: '\u65B0\u5EFA\u4EFB\u52A1',
                                    cb: () => {},
                                },
                                {
                                    key: 'createFolder',
                                    text: '\u65B0\u5EFA\u6587\u4EF6\u5939',
                                    cb: () => {},
                                },
                                {
                                    key: 'edit',
                                    text: '\u7F16\u8F91',
                                    cb: () => {},
                                },
                                {
                                    key: 'remove',
                                    text: '\u5220\u9664',
                                    confirm: true,
                                    confirmProps: {
                                        title: '\u786E\u5B9A\u5220\u9664\u8FD9\u4E2A\u8D44\u6E90\u5417',
                                        okText: '\u786E\u5B9A',
                                        cancelText: '\u53D6\u6D88',
                                        onConfirm: () => {
                                            console.log('\u5220\u9664');
                                        },
                                    },
                                },
                            ]}
                        >
                            folder
                        </ContextMenu>
                    }
                    className="anchor-experiment-root"
                >
                    <Tree.TreeNode
                        key="0-0-0"
                        title={
                            <ContextMenu
                                data={[
                                    {
                                        key: 'edit',
                                        text: '\u7F16\u8F91',
                                        cb: () => {},
                                    },
                                    {
                                        key: 'clone',
                                        text: '\u514B\u9686',
                                        cb: () => {},
                                    },
                                    {
                                        key: 'remove',
                                        text: '\u5220\u9664',
                                        cb: () => {},
                                    },
                                ]}
                            >
                                file1
                            </ContextMenu>
                        }
                        className="anchor-experiment-file"
                    />
                    <Tree.TreeNode
                        key="0-0-1"
                        title={<ContextMenu data={[]}>file2</ContextMenu>}
                        className="anchor-experiment-file"
                    />
                </Tree.TreeNode>
            </Tree>
        </div>
    );
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.jsx"},routeId:"components/contextMenu/index",context:void 0,renderOpts:void 0}}}),55553:(function(u,d,n){n.r(d);const m=[{value:"\u4EFB\u52A1\u680F\u53F3\u952E\u83DC\u5355\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"data",paraId:1,tocIndex:2},{value:"\u83DC\u5355\u9879\u914D\u7F6E",paraId:1,tocIndex:2},{value:"IMenuProps[]",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"wrapperClassName",paraId:1,tocIndex:2},{value:"\u5916\u5C42\u7EC4\u4EF6\u7684 class \u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u5176\u4F59\u5C5E\u6027\u53C2\u8003 ant-design \u7684 Dropdown \u7EC4\u4EF6",paraId:2}];n.d(d,["texts",0,m])})}]);
