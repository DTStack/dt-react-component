import React from 'react';
import { EasySelect } from 'dt-react-component';
import { Divider } from 'antd';
import jsonp from 'fetch-jsonp';

export default () => {
    return (
        <>
            <EasySelect
                auto
                style={{ width: '100%' }}
                servise={(str) =>
                    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${str}`)
                        .then((response) => response.json())
                        .then((res: any) =>
                            res.result.map((item: any[]) => ({
                                label: item[0],
                                value: item[1],
                            }))
                        )
                }
                clearValueRequest
                autoValue={'111'}
                onChange={(val: any, option: any) => {
                    console.log(val, option);
                }}
            />
            <Divider />
            <p>前端本地模糊查询：</p>
            <EasySelect
                auto
                style={{ width: '100%' }}
                filterLocal
                servise={(str) =>
                    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${str}`)
                        .then((response) => response.json())
                        .then((res: any) =>
                            res.result.map((item: any[]) => ({
                                label: item[0],
                                value: item[1],
                            }))
                        )
                }
                autoValue={'111'}
                onChange={(val: any, option: any) => {
                    console.log(val, option);
                }}
            />
            <Divider />
            <p>非自动请求：</p>
            <EasySelect
                style={{ width: '100%' }}
                servise={(str) =>
                    jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${str}`)
                        .then((response) => response.json())
                        .then((res: any) =>
                            res.result.map((item: any[]) => ({
                                label: item[0],
                                value: item[1],
                            }))
                        )
                }
                onChange={(val: any, option: any) => {
                    console.log(val, option);
                }}
            />
        </>
    );
};
