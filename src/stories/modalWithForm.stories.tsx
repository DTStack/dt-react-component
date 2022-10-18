import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ModalWithForm from './components/modalWithForm';
import ExampleContainer from './components/exampleCode';
const stories = storiesOf('ModalWithForm 带表单的模态框', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'hideModalHandler',
        propType: 'Function',
        required: true,
        description: '控制模态框的显示影藏',
        defaultValue: '--'
    },
    {
        property: 'onSubmit',
        propType: 'Function',
        required: false,
        description:
            '点击确定按钮后，表单的值验证无误后的回调，接受两个参数value:表单的值，record:其他想要提交的值',
        defaultValue: '--'
    },
    {
        property: 'cancelText',
        propType: 'string',
        required: false,
        description: '模态框取消按钮的文本',
        defaultValue: '取消'
    },
    {
        property: 'okText',
        propType: 'string',
        required: false,
        description: '模态框确定按钮的文本',
        defaultValue: '确定'
    },
    {
        property: 'okType',
        propType: 'string',
        required: false,
        description: '确认按钮类型',
        defaultValue: 'primary'
    },
    {
        property: 'record',
        propType: 'string | number | object',
        required: false,
        description: '其他想要提交的参数',
        defaultValue: '--'
    },
    {
        property: 'visible',
        propType: 'boolean',
        required: false,
        description: '模态框显示隐藏的状态',
        defaultValue: '--'
    },
    {
        property: 'title',
        propType: 'React.ReactNode | string',
        required: false,
        description: '标题',
        defaultValue: '--'
    },
    {
        property: 'onCancel',
        propType: 'Function',
        required: false,
        description: '点击取消的回调',
        defaultValue: '--'
    },
    {
        property: 'width',
        propType: 'string | number',
        required: false,
        description: 'modal宽度',
        defaultValue: '--'
    },
    {
        property: 'modelClass',
        propType: 'string',
        required: false,
        description: 'modal样式类名',
        defaultValue: '--'
    },
    {
        property: 'FormComponent',
        propType: 'FormComponentProps',
        required: true,
        description: '传入模态框的表单元素',
        defaultValue: '--'
    },
    {
        property: 'footer',
        propType: 'string | React.ReactNode',
        required: false,
        description: '底部内容，当不需要默认底部按钮时，可以设为 footer={null}',
        defaultValue: '确定取消按钮'
    },
    {
        property: 'centered',
        propType: 'Boolean',
        required: false,
        description: '垂直居中展示 Modal',
        defaultValue: 'false'
    },
    {
        property: 'cancelButtonProps',
        propType: 'ButtonProps',
        required: false,
        description: 'cancel 按钮 props',
        defaultValue: '--'
    },
    {
        property: 'notSubmitCloseModal',
        propType: 'Boolean',
        require: false,
        description: '禁止提交后自动关闭modal',
        defaultValue: 'false'
    },
    {
        property: 'confirmLoading',
        propType: 'Boolean',
        require: false,
        description: '确定按钮 loading',
        defaultValue: 'false'
    },
    {
        property: '其他参数',
        propType: '',
        required: false,
        description: (
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://ant.design/components/form-cn/#API'
            >
                继承antd4.x的Form
            </a>
        ),
        defaultValue: ''
    }
]

const otherDependencies = `import { ModalWithForm } from 'dt-react-component';import { Form, Input } from 'antd';`;

const basicFunctionCode = `
    constructor (props) {
        super(props);
        this.state = {
            visible: false
        };
     }
     
    hideModalHandler = () => {
        const { visible } = this.state
        this.setState({ visible: !visible });
    }
    
`;
const basicOtherCode = `
const FormItem = Form.Item;
const EnhancedModal = ModalWithForm(props => {
    return (
        <FormItem label="test-label" name='test' rules={[{ max: 10 }]}>
            <Input data-testid="test-input" />)
        </FormItem>
    );
});
`;
const basicModalWithForm = `
            <EnhancedModal
                title='ModalWithForm'
                visible={this.state.visible}
                hideModalHandler={this.hideModalHandler}
                onSubmit={(value) => { console.log(value) }}
            />
`;

stories.add('ModalWithForm', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{`当需要在模态框中收集用户的表单信息，可以在这个组件中传入自己想要的表单元素`}</p>
        <h2>示例</h2>
        <ExampleContainer otherDependencies={otherDependencies} code={basicModalWithForm} functionCode={basicFunctionCode} otherCode={basicOtherCode} hasCodeSandBox={true}>
            <ModalWithForm />
        </ExampleContainer>
    </div>
), {
    info: {
        text: `
            代码示例: \n
            示例1 带表单的对话框
            ~~~js
            import { Form, Input } from 'antd';
            import { ModalWithForm } from 'dt-react-component';
            
            const EnhancedModal = ModalWithForm(props => {
                return (
                    <FormItem label="test-label" name='test' rules={[{ max: 10 }]}>
                        <Input data-testid="test-input" />)
                    </FormItem>
                );
            });
            
            class Demo extends React.Component<any, any> {
                constructor (props) {
                    super(props);
                    this.state = {
                        visible: false
                    };
                }
                hideModalHandler = () => {
                    const { visible } = this.state
                    this.setState({ visible: false });
                }
                render () {
                    return (
                        <EnhancedModal
                            title='ModalWithForm'
                            visible={this.state.visible}
                            hideModalHandler={this.hideModalHandler}
                            onSubmit={(value) => { console.log(value) }}
                        />
                    )
                }
            }
            ~~~
            示例2 点击确定后异步关闭对话框，例如提交表单
            ~~~js
            import { Form, Input } from 'antd';
            import { ModalWithForm } from 'dt-react-component'
            
            const EnhancedModal = ModalWithForm(props => {
                return (
                    <FormItem label="test-label" name='test' rules={[{ max: 10 }]}>
                        <Input data-testid="test-input" />)
                    </FormItem>
                );
            });
            class Demo extends React.Component<any, any> {
                constructor (props) {
                    super(props);
                    this.state = {
                        confirmLoading: false;
                        visible: false
                    };
                }
                hideModalHandler = () => {
                    const { visible } = this.state
                    this.setState({ visible: false});
                }
                onSubmit = () => {
                    this.setState({
                       confirmLoading: true;
                    });
                    
                    setTimeout(() => {
                        this.setState({
                           visible: false,
                           confirmLoading: false
                        })
                    })
                   
                }
                showModal = () => {
                    this.setState({
                        visible: true;
                    })
                }
                render () {
                    return (
                        <>
                            <Button type="primary" onClick={showModal}> Open Modal with async logic </Button>
                            <EnhancedModal
                                title='ModalWithForm'
                                visible={this.state.visible}
                                hideModalHandler={this.hideModalHandler}
                                onSubmit={this.onSubmit}
                            />
                        </>
                    )
                }
            }
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
