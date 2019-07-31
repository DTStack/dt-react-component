import React from 'react';
import '../../style/index.scss';

export function PropsTable (props) {
    const { propDefinitions } = props;
    // const Red = props => <span style={{ color: 'red' }} {...props} />;
    const propsFields = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {/* {required ? <Red>*</Red> : null} */}
                    </td>
                    <td>{description}</td>
                    <td>{propType}</td>
                    <td>{defaultValue}</td>
                </tr>
            );
        }
    );

    return (
        <table width="90%">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>{propsFields}</tbody>
        </table>
    );
}
