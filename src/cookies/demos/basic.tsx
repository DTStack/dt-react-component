import React, { useEffect } from 'react';
import { useCookieListener } from 'dt-react-component';
import utils from 'dt-react-component/utils';
import { Button, message } from 'antd';

export default () => {
    useEffect(() => {
        utils.deleteCookie('dt_token');
        utils.deleteCookie('dt_userid');
        return () => utils.deleteAllCookies();
    }, []);

    useCookieListener(
        ({ changedFields }) => {
            console.log('cookie fields hasChanged', changedFields);
            if (changedFields?.length) {
                message.info(
                    '以下Cookie字段发生变更：' +
                        changedFields.map((field) => `${field.key} : ${field.value}`).join(',')
                );
            }
        },
        ['dt_token']
    );

    useCookieListener(({ prevCookies, nextCookies }) => {
        message.info(`监听到Cookie从 ${prevCookies} 变更为了 ${nextCookies} `);
    }, []);

    return (
        <div style={{ textAlign: 'center', paddingTop: 60 }}>
            <p>
                <Button
                    onClick={() => {
                        utils.setCookie('dt_token', `im_new_token_${Date.now()}`);
                        utils.setCookie('dt_userid', `im_new_userid_${Date.now()}`);
                    }}
                >
                    修改Cookie值
                </Button>
            </p>
            <p>监听页面 Cookie 信息变更</p>
        </div>
    );
};
