"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[4305],{72156:(function(d,t,n){n.r(t),n.d(t,{demos:function(){return o}});var e=n(30758),o={"fullscreen-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(5150),n.e(6217),n.e(954),n.e(153),n.e(4194)]).then(n.bind(n,23124))})),asset:{type:"BLOCK",id:"fullscreen-demo-basic",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(826).A},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},routeId:"components/fullscreen/index",context:void 0,renderOpts:void 0},"fullscreen-demo-local":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(5150),n.e(6217),n.e(954),n.e(153),n.e(4194)]).then(n.bind(n,60755))})),asset:{type:"BLOCK",id:"fullscreen-demo-local",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(69451).A},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.24.16"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u5C40\u90E8\u5168\u5C4F"},routeId:"components/fullscreen/index",context:void 0,renderOpts:void 0},"fullscreen-demo-custom":{component:e.memo(e.lazy(function(){return Promise.all([n.e(8848),n.e(5808),n.e(1585),n.e(9495),n.e(444),n.e(3069),n.e(5150),n.e(6217),n.e(954),n.e(153),n.e(4194)]).then(n.bind(n,92867))})),asset:{type:"BLOCK",id:"fullscreen-demo-custom",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(54331).A},react:{type:"NPM",value:"18.3.1"},"@dtinsight/react-icons":{type:"NPM",value:"1.68.0"},"dt-react-component":{type:"NPM",value:"5.1.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807"},routeId:"components/fullscreen/index",context:void 0,renderOpts:void 0}}}),48180:(function(d,t,n){n.r(t);const e=[{value:"\u5168\u5C4F\u5207\u6362\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"target",paraId:1,tocIndex:6},{value:"\u5168\u5C40\u64CD\u4F5C\u4F5C\u7528\u4E8E\u6307\u5B9A\u76EE\u6807\u5BF9\u8C61",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"iconStyle",paraId:1,tocIndex:6},{value:"\u56FE\u6807\u5143\u7D20\u6837\u5F0F",paraId:1,tocIndex:6},{value:"CSSProperties",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"fullIcon",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"exitFullIcon",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u9000\u51FA\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}];n.d(t,["texts",0,e])}),826:(function(d,t){t.A=`import React from 'react';
import { Fullscreen } from 'dt-react-component';

export default () => {
    return <Fullscreen />;
};
`}),54331:(function(d,t){t.A=`import React from 'react';
import { FullscreenExitOutlined, FullscreenOutlined } from '@dtinsight/react-icons';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 5,
    };

    return (
        <Fullscreen
            iconStyle={iconStyle}
            fullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <FullscreenOutlined />
                    \u5168\u5C4F
                </div>
            }
            exitFullIcon={
                <div style={{ cursor: 'pointer' }}>
                    <FullscreenExitOutlined />
                    \u9000\u51FA\u5168\u5C4F
                </div>
            }
        />
    );
};
`}),69451:(function(d,t){t.A=`import React from 'react';
import { Card } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    return (
        <Card id="localContainer" style={{ background: '#fafafa' }}>
            <Fullscreen target="localContainer" />
            <div style={{ margin: '10px 0', textAlign: 'center' }}>Fullscreen in this</div>
        </Card>
    );
};
`})}]);
