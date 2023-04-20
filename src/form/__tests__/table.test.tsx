import React from 'react';
import { render } from '@testing-library/react';
import { Input } from 'antd';
import Form from '../';

describe('Test Form.Table Component', () => {
    it('Should match snapshot', () => {
        const { asFragment } = render(
            <Form
                layout="vertical"
                style={{ height: 400 }}
                initialValues={{
                    data: [{ name: 'dtstack' }],
                }}
            >
                <Form.Table
                    name="data"
                    columns={[
                        {
                            key: 'name',
                            title: 'Name',
                            dataIndex: 'name',
                            required: true,
                            render: () => <Input placeholder="Name" />,
                        },
                    ]}
                />
            </Form>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('Should support dependencies', () => {
        const { getByTestId } = render(
            <Form
                layout="vertical"
                style={{ height: 400 }}
                initialValues={{
                    data: [
                        { name: 'dtstack', age: 12 },
                        { name: 'mmm', age: 10 },
                    ],
                }}
            >
                <Form.Table
                    name="data"
                    columns={[
                        {
                            key: 'name',
                            title: 'Name',
                            dataIndex: 'name',
                            required: true,
                            render: () => <Input placeholder="Name" />,
                        },
                        {
                            key: 'age',
                            title: 'Age',
                            dataIndex: 'age',
                            dependencies: ([name]) => ['data', name, 'name'],
                            render: ({ name }, _, form) => {
                                return form?.getFieldValue?.(['data', name, 'name']) ===
                                    'dtstack' ? (
                                    <span data-testid={`age-${name}`}>--</span>
                                ) : (
                                    <Input data-testid={`age-${name}`} placeholder="age" />
                                );
                            },
                        },
                    ]}
                />
            </Form>
        );

        expect(getByTestId('age-0').innerHTML).toBe('--');
        expect(getByTestId('age-1').innerHTML).not.toBe('--');
    });

    it('Should support multiple dependencies', () => {
        const { getByTestId } = render(
            <Form
                layout="vertical"
                style={{ height: 400 }}
                initialValues={{
                    data: [
                        { name: 'dtstack', age: 12 },
                        { name: 'dtstack', age: 8 },
                    ],
                }}
            >
                <Form.Table
                    name="data"
                    columns={[
                        {
                            key: 'name',
                            title: 'Name',
                            dataIndex: 'name',
                            required: true,
                            render: () => <Input placeholder="Name" />,
                        },
                        {
                            key: 'age',
                            title: 'Age',
                            dataIndex: 'age',
                            render: () => <Input placeholder="Age" />,
                        },
                        {
                            key: 'test',
                            title: 'test',
                            dependencies: ['name', 'age'],
                            render: ({ name }, _, form) => {
                                return (
                                    <span data-testid={`test-${name}`}>
                                        {form?.getFieldValue?.(['data', name, 'name']) ===
                                            'dtstack' &&
                                        form?.getFieldValue?.(['data', name, 'age']) > 10
                                            ? 'larger'
                                            : 'smaller'}
                                    </span>
                                );
                            },
                        },
                    ]}
                />
            </Form>
        );

        expect(getByTestId('test-0').innerHTML).toBe('larger');
        expect(getByTestId('test-1').innerHTML).toBe('smaller');
    });

    it("Should render required on columns' title", () => {
        const { container } = render(
            <Form
                layout="vertical"
                style={{ height: 400 }}
                initialValues={{
                    data: [{ name: 'dtstack' }],
                }}
            >
                <Form.Table
                    name="data"
                    columns={[
                        {
                            key: 'name',
                            title: 'Name',
                            dataIndex: 'name',
                            required: true,
                            render: () => <Input placeholder="Name" />,
                        },
                        {
                            key: 'age',
                            title: 'Age',
                            dataIndex: 'age',
                            render: () => <Input placeholder="age" />,
                        },
                        {
                            key: 'sex',
                            title: 'Sex',
                            dataIndex: 'sex',
                            rules: [{ required: true }],
                            render: () => <Input placeholder="sex" />,
                        },
                        {
                            key: 'sex',
                            title: 'Sex',
                            dataIndex: 'sex',
                            rules: [
                                ({ getFieldValue }, [name]) => ({
                                    required: getFieldValue(['data', name, 'name']) === 'dtstack',
                                }),
                            ],
                            render: () => <Input placeholder="sex" />,
                        },
                    ]}
                />
            </Form>
        );

        const rows = container.querySelectorAll('th.ant-table-cell');
        expect(rows.length).toBe(4);
        expect(rows[0].querySelector('.dtc-form__table__column--required')).not.toBeNull();
        expect(rows[1].querySelector('.dtc-form__table__column--required')).toBeNull();
        expect(rows[2].querySelector('.dtc-form__table__column--required')).not.toBeNull();
        expect(rows[3].querySelector('.dtc-form__table__column--required')).toBeNull();
    });
});
