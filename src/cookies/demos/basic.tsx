import React, { useEffect } from 'react';
import { Cookies } from 'dt-react-component';
import { Button, message } from 'antd';

export default () => {
    useEffect(() => {
        document.cookie = 'dt_token=im_old_token;';
    }, []);

    return (
        <>
            <p>
                <Button onClick={() => (document.cookie = `dt_token=im_new_token_${Date.now()};`)}>
                    修改Cookie值
                </Button>
            </p>
            <p>监听页面 Cookie 信息变更</p>
            <Cookies
                // 当页面cookie如下字段的值发生变更时触发onFieldsChanged事件
                watchFields={['dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id']}
                onFieldsChanged={(fields) => {
                    console.log('cookie fields hasChanged', fields);
                    if (fields.length) {
                        message.info(
                            '监听到以下Cookie值变更：' +
                                fields.map((field) => `${field.key} : ${field.value}`).join(',')
                        );
                    }
                }}
                onChanged={(oldCookie, newCookie) => {
                    console.log(`原Cookie '${oldCookie}' 变更为 '${newCookie}'`);
                }}
            />
        </>
    );
};
