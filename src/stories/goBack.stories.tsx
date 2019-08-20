import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import GoBack from '../components/go-back';

const stories = storiesOf('goback', module);
// stories.addDecorator(story => <div style={{ textAlign: 'center', marginTop: '100px' }}>{story()}</div>)
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)

// 定制化component props
const propDefinitions = [{
    property: 'url',
    propType: 'string',
    required: false,
    description: '返回的路由， 如不传参数，则默认返回浏览器上一级url',
    defaultValue: ''
}]
const Red = (props: any) => <span style={{ color: 'red' }} {...props} />;

const TableComponent = () => {
    const props: any = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }: any) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <Red>*</Red> : null}
                    </td>
                    <td>{description}</td>
                    <td>{propType}</td>
                    <td>{defaultValue}</td>
                </tr>
            );
        }
    );

    return (
        <table {...{width: "90%"}}>
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>{props}</tbody>
        </table>
    );
};
stories.add('返回', () => (
    <div className='story_wrapper'>
        <section>返回组件</section>
        <p>默认返回浏览器上一级路由</p>
        <GoBack />
    </div>
), {
    info: {
        inline: true,
        TableComponent,
        text: `
        #### 使用示例
        ~~~js
        <GoBack url='/api/manage' />
        ~~~
      `
    }
})
