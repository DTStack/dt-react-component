"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[9309],{50640:function(d,t,n){n.r(t),n.d(t,{demos:function(){return l}});var e=n(75271),l={"fullscreen-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(8704),n.e(3496),n.e(5910),n.e(5048)]).then(n.bind(n,83771))})),asset:{type:"BLOCK",id:"fullscreen-demo-basic",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(66604).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528"},context:void 0,renderOpts:void 0},"fullscreen-demo-local":{component:e.memo(e.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(8704),n.e(3496),n.e(5910),n.e(5048)]).then(n.bind(n,42397))})),asset:{type:"BLOCK",id:"fullscreen-demo-local",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(69552).Z},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u5C40\u90E8\u5168\u5C4F"},context:void 0,renderOpts:void 0},"fullscreen-demo-custom":{component:e.memo(e.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(5385),n.e(8251),n.e(8704),n.e(3496),n.e(5910),n.e(5048)]).then(n.bind(n,45800))})),asset:{type:"BLOCK",id:"fullscreen-demo-custom",refAtomIds:["fullscreen"],dependencies:{"index.tsx":{type:"FILE",value:n(83834).Z},react:{type:"NPM",value:"18.3.1"},"@dtinsight/react-icons":{type:"NPM",value:"1.5.0"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807"},context:void 0,renderOpts:void 0}}},8040:function(d,t,n){n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:"\u5168\u5C4F\u5207\u6362\u64CD\u4F5C",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"target",paraId:1,tocIndex:6},{value:"\u5168\u5C40\u64CD\u4F5C\u4F5C\u7528\u4E8E\u6307\u5B9A\u76EE\u6807\u5BF9\u8C61",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"iconStyle",paraId:1,tocIndex:6},{value:"\u56FE\u6807\u5143\u7D20\u6837\u5F0F",paraId:1,tocIndex:6},{value:"CSSProperties",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"fullIcon",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"exitFullIcon",paraId:1,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u9000\u51FA\u5168\u5C4F\u56FE\u6807",paraId:1,tocIndex:6},{value:"React.ReactNode",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6}]},66604:function(d,t){t.Z=`import React from 'react';
import { Fullscreen } from 'dt-react-component';

export default () => {
    return <Fullscreen />;
};
`},83834:function(d,t){t.Z=`import React from 'react';
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
`},69552:function(d,t){t.Z=`import React from 'react';
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
`}}]);
