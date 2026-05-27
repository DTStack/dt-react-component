"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[5115],{65223:function(o,e,n){n.r(e),n.d(e,{demos:function(){return a}});var t=n(75271),a={"float-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(4916),n.e(9057)]).then(n.bind(n,56989))})),asset:{type:"BLOCK",id:"float-demo-basic",refAtomIds:["float"],dependencies:{"index.tsx":{type:"FILE",value:n(22872).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"float-demo-backtop":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(4916),n.e(9057)]).then(n.bind(n,19266))})),asset:{type:"BLOCK",id:"float-demo-backtop",refAtomIds:["float"],dependencies:{"index.tsx":{type:"FILE",value:n(71957).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u8FD4\u56DE\u9876\u90E8"},context:void 0,renderOpts:void 0}}},64590:function(o,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u60AC\u6D6E\u5728\u9875\u9762\u4E0A\u4E14\u652F\u6301\u62D6\u62FD\u81F3\u4EFB\u610F\u4F4D\u7F6E\u7684\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u5B9E\u73B0\u5168\u5C40\u6E32\u67D3\uFF0C\u60AC\u6D6E\u5728\u9875\u9762\u4E0A\u4EFB\u610F\u4F4D\u7F6E\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"className",paraId:2,tocIndex:5},{value:"\u7C7B\u540D",paraId:2,tocIndex:5},{value:"string",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"style",paraId:2,tocIndex:5},{value:"\u6837\u5F0F",paraId:2,tocIndex:5},{value:"CSSProperties",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"draggable",paraId:2,tocIndex:5},{value:"\u62D6\u62FD\u914D\u7F6E",paraId:2,tocIndex:5},{value:"boolean | DraggableProps",paraId:2,tocIndex:5},{value:"false",paraId:2,tocIndex:5},{value:"position",paraId:2,tocIndex:5},{value:"\u4F4D\u7F6E",paraId:2,tocIndex:5},{value:"{x: number, y: number}",paraId:2,tocIndex:5},{value:"\u5DE6\u4E0A\u89D2",paraId:2,tocIndex:5},{value:"onChange",paraId:2,tocIndex:5},{value:"\u62D6\u62FD\u7ED3\u675F\u540E\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:5},{value:"Function",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u5176\u4E2D ",paraId:3,tocIndex:5},{value:"DraggableProps",paraId:3,tocIndex:5},{value:" \u7C7B\u578B\u5177\u4F53\u53C2\u8003 ",paraId:3,tocIndex:5},{value:"draggable-api",paraId:3,tocIndex:5},{value:"\u3002",paraId:3,tocIndex:5}]},71957:function(o,e){e.Z=`import React, { HTMLAttributes, useState } from 'react';
import { Float, Resize } from 'dt-react-component';

export default function () {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    return (
        <Resize onResize={() => setSize({ width: window.innerWidth, height: window.innerHeight })}>
            <section>
                {Array.from({ length: 1000 }).map((_, idx) => (
                    <div key={idx}>{idx}. This is the segment</div>
                ))}
            </section>
            <Float draggable={false} position={{ y: size.height - 64, x: size.width - 64 }}>
                <div
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0,0,0,.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <UpToLineIcon style={{ fontSize: 24, lineHeight: 0, color: '#fff' }} />
                </div>
            </Float>
        </Resize>
    );
}

function UpToLineIcon(props: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span {...props}>
            <svg
                className="icon"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 3.88672C4 4.30093 4.34112 4.63672 4.7619 4.63672H19.2381C19.6589 4.63672 20 4.30093 20 3.88672C20 3.47251 19.6589 3.13672 19.2381 3.13672H4.7619C4.34112 3.13672 4 3.47251 4 3.88672Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0026 7.82525L7.18185 13.5648H10.6324V20.1141H13.3752V13.5648H16.8233L12.0026 7.82525ZM11.1411 6.51864C11.5907 5.98337 12.4144 5.98337 12.864 6.51864L18.4894 13.2162C19.1042 13.9481 18.5838 15.0648 17.628 15.0648H14.8752V20.1141C14.8752 20.9426 14.2036 21.6141 13.3752 21.6141H10.6324C9.80398 21.6141 9.13241 20.9426 9.13241 20.1141V15.0648H6.37715C5.42129 15.0648 4.90094 13.9481 5.5157 13.2162L11.1411 6.51864Z"
                        fill="currentColor"
                    />
                </g>
            </svg>
        </span>
    );
}
`},22872:function(o,e){e.Z=`import React, { useState } from 'react';
import { Float, Image } from 'dt-react-component';

export default function () {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    return (
        <Float
            draggable={{ bounds: 'body' }}
            position={position}
            onChange={(_, { x, y }) => setPosition({ x, y })}
        >
            <Image
                height={200}
                width={200}
                src="https://dtstack.github.io/dt-react-component/static/empty_overview.43b0eedf.png"
                style={{ borderColor: 'red' }}
            />
        </Float>
    );
}
`}}]);
