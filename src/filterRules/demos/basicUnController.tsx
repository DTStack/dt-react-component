import React from 'react';
import { Button, Form, Input } from 'antd';
import { FilterRules } from 'dt-react-component';
import { IComponentProps } from 'dt-react-component/filterRules';
import shortid from 'shortid';

const INIT_ROW_VALUES = {
    input: '',
};

const INIT_DATA = {
    key: shortid(),
    level: 0,
    rowValues: {
        ...INIT_ROW_VALUES,
    },
};

type IRow = typeof INIT_ROW_VALUES;

const MyInput = ({ name }: IComponentProps<IRow>) => (
    <Form.Item name={['condition', ...name, 'input']}>
        <Input />
    </Form.Item>
);

export default () => {
    const [form] = Form.useForm();

    return (
        <Form form={form}>
            <Button
                onClick={() => form.setFieldsValue({ condition: INIT_DATA })}
                style={{ marginBottom: 16 }}
            >
                添加数据
            </Button>
            <Form.Item name="condition">
                <FilterRules<IRow>
                    component={(props) => <MyInput {...props} />}
                    notEmpty={{ data: false }}
                    initValues={INIT_ROW_VALUES}
                />
            </Form.Item>
            <Button onClick={async () => console.log(await form.validateFields())}>
                控制台查看数据
            </Button>
        </Form>
    );
};
