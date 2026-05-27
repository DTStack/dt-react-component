"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[6843],{33806:function(t,n,e){e.r(n),e.d(n,{demos:function(){return d}});var o=e(75271),d={"usecookielistener-demo-basic":{component:o.memo(o.lazy(function(){return Promise.all([e.e(9048),e.e(4180),e.e(8251),e.e(9520),e.e(3484)]).then(e.bind(e,17342))})),asset:{type:"BLOCK",id:"usecookielistener-demo-basic",refAtomIds:["useCookieListener"],dependencies:{"index.tsx":{type:"FILE",value:e(62424).Z},react:{type:"NPM",value:"18.3.1"},"@dtinsight/dt-utils":{type:"NPM",value:"1.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u57FA\u672C\u4F7F\u7528",description:"\u5F53\u76D1\u542C\u7684Cookie\u5B57\u6BB5\u4E3A[]\u65F6\uFF0C\u5219Cookie\u6709\u53D8\u5316\u65F6\u5C31\u4F1A\u89E6\u53D1\uFF0C\u5373\u76D1\u542C\u6574\u4E2ACookie\u7684\u53D8\u5316"},context:void 0,renderOpts:void 0},"usecookielistener-demo-advanced":{component:o.memo(o.lazy(function(){return Promise.all([e.e(9048),e.e(4180),e.e(8251),e.e(9520),e.e(3484)]).then(e.bind(e,63926))})),asset:{type:"BLOCK",id:"usecookielistener-demo-advanced",refAtomIds:["useCookieListener"],dependencies:{"index.tsx":{type:"FILE",value:e(91235).Z},react:{type:"NPM",value:"18.3.1"},"@dtinsight/dt-utils":{type:"NPM",value:"1.3.1"},antd:{type:"NPM",value:"4.22.5"},"dt-react-component":{type:"NPM",value:"5.0.0"}},entry:"index.tsx",title:"\u9AD8\u7EA7\u914D\u7F6E",description:"\u901A\u8FC7immediately\u6765\u914D\u7F6E\u662F\u5426Cookie\u5B57\u6BB5\u65B0\u589E\u65F6\u4F1A\u89E6\u53D1\u53D8\u5316\uFF0C\u5982\u6709\u7279\u6B8A\u8981\u6C42\uFF0C\u8FD8\u53EF\u901A\u8FC7intervalTime\u6765\u914D\u7F6E\u8F6E\u8BAD\u6BD4\u8F83\u7684\u65F6\u95F4\u95F4\u9694"},context:void 0,renderOpts:void 0}}},15944:function(t,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u76D1\u542C\u67D0\u4E2A Cookie \u503C\u53D8\u66F4\uFF0C\u53D8\u66F4\u540E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5982 token \u53D8\u66F4\u8FDB\u884C\u767B\u51FA",paraId:0,tocIndex:1},{value:"\u5728\u591A\u4E2A tab \u9875\u4E0B Cookie \u503C\u53D8\u66F4\uFF0C\u5404 tab \u9875\u90FD\u9700\u8981\u53CA\u65F6\u540C\u6B65\u65F6\u4F7F\u7528",paraId:0,tocIndex:1},{value:"\u9700\u8981\u5C06\u8BE5 hook \u7528\u4E8E\u9876\u5C42\u7EC4\u4EF6\u4E2D\uFF0C\u5982 Routes",paraId:0,tocIndex:1},{value:`useCookieListener(
    handler: (params: {prevCookies: string, nextCookies: string, changedFields?: Fields[]}) => void,
    watchFields: string[],
    options?: ICookieOptions
)

`,paraId:1,tocIndex:5},{value:"\u53C2\u6570",paraId:2,tocIndex:6},{value:"\u8BF4\u660E",paraId:2,tocIndex:6},{value:"\u7C7B\u578B",paraId:2,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:6},{value:"handler",paraId:2,tocIndex:6},{value:"Cookie \u53D8\u5316\u65F6\u7684\u5904\u7406\u51FD\u6570",paraId:2,tocIndex:6},{value:"(params: {prevCookies: string, nextCookies: string, changedFields?: Fields[]}) => void",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"watchFields",paraId:2,tocIndex:6},{value:"\u76D1\u542C\u7684\u5177\u4F53 Cookie \u5B57\u6BB5",paraId:2,tocIndex:6},{value:"stirng[]",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"options",paraId:2,tocIndex:6},{value:"\u914D\u7F6E\u9879",paraId:2,tocIndex:6},{value:"CookieOptions",paraId:2,tocIndex:6},{value:"-",paraId:2,tocIndex:6},{value:"\u53C2\u6570",paraId:3,tocIndex:7},{value:"\u8BF4\u660E",paraId:3,tocIndex:7},{value:"\u7C7B\u578B",paraId:3,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:7},{value:"immediately",paraId:3,tocIndex:7},{value:"Cookie \u5B57\u6BB5\u4E3A\u65B0\u589E\u5B57\u6BB5\u65F6\u5426\u4F1A\u89E6\u53D1 handler\uFF0C\u9ED8\u8BA4\u4E0D\u89E6\u53D1",paraId:3,tocIndex:7},{value:"boolean",paraId:3,tocIndex:7},{value:"false",paraId:3,tocIndex:7},{value:"timeout",paraId:3,tocIndex:7},{value:"\u76D1\u542C\u8F6E\u8BAD\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u6BEB\u79D2",paraId:3,tocIndex:7},{value:"number",paraId:3,tocIndex:7},{value:"200",paraId:3,tocIndex:7},{value:"\u53C2\u6570",paraId:4,tocIndex:8},{value:"\u8BF4\u660E",paraId:4,tocIndex:8},{value:"\u7C7B\u578B",paraId:4,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:8},{value:"key",paraId:4,tocIndex:8},{value:"Cookie \u952E",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8},{value:"value",paraId:4,tocIndex:8},{value:"Cookie \u503C",paraId:4,tocIndex:8},{value:"string",paraId:4,tocIndex:8},{value:"-",paraId:4,tocIndex:8}]},91235:function(t,n){n.Z=`import React, { useEffect } from 'react';
import { Cookie } from '@dtinsight/dt-utils';
import { Button, message } from 'antd';
import { useCookieListener } from 'dt-react-component';

export default () => {
    useEffect(() => {
        Cookie.deleteCookie('dt_token');
        return () => Cookie.deleteAllCookies('', '');
    }, []);

    useCookieListener(
        ({ changedFields }) => {
            console.log('cookie fields hasChanged', changedFields);
            if (changedFields?.length) {
                message.info(
                    '\u4EE5\u4E0BCookie\u5B57\u6BB5\u53D1\u751F\u53D8\u66F4\uFF1A' +
                        changedFields.map((field) => \`\${field.key} : \${field.value}\`).join(',')
                );
            }
        },
        ['dt_token'],
        { immediately: true, timeout: 1000 }
    );

    return (
        <div style={{ textAlign: 'center', paddingTop: 60 }}>
            <p>
                <Button
                    onClick={() => {
                        Cookie.setCookie('dt_token', \`im_new_token_\${Date.now()}\`);
                    }}
                >
                    \u4FEE\u6539Cookie\u503C
                </Button>
            </p>
            <p>\u76D1\u542C\u9875\u9762 Cookie \u4FE1\u606F\u53D8\u66F4</p>
        </div>
    );
};
`},62424:function(t,n){n.Z=`import React, { useEffect } from 'react';
import { Cookie } from '@dtinsight/dt-utils';
import { Button, message } from 'antd';
import { useCookieListener } from 'dt-react-component';

export default () => {
    useEffect(() => {
        Cookie.deleteCookie('dt_token');
        Cookie.deleteCookie('dt_userid');
        return () => Cookie.deleteAllCookies('', '');
    }, []);

    useCookieListener(
        ({ changedFields }) => {
            console.log('cookie fields hasChanged', changedFields);
            if (changedFields?.length) {
                message.info(
                    '\u4EE5\u4E0BCookie\u5B57\u6BB5\u53D1\u751F\u53D8\u66F4\uFF1A' +
                        changedFields.map((field) => \`\${field.key} : \${field.value}\`).join(',')
                );
            }
        },
        ['dt_token']
    );

    useCookieListener(({ prevCookies, nextCookies }) => {
        message.info(\`\u76D1\u542C\u5230Cookie\u4ECE \${prevCookies} \u53D8\u66F4\u4E3A\u4E86 \${nextCookies} \`);
    }, []);

    return (
        <div style={{ textAlign: 'center', paddingTop: 60 }}>
            <p>
                <Button
                    onClick={() => {
                        Cookie.setCookie('dt_token', \`im_new_token_\${Date.now()}\`);
                        Cookie.setCookie('dt_userid', \`im_new_userid_\${Date.now()}\`);
                    }}
                >
                    \u4FEE\u6539Cookie\u503C
                </Button>
            </p>
            <p>\u76D1\u542C\u9875\u9762 Cookie \u4FE1\u606F\u53D8\u66F4</p>
        </div>
    );
};
`}}]);
