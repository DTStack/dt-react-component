import React from 'react';
import SpreadSheet from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test spreadSheet ', () => {
    test('should render SpreadSheet custom className', () => {
        const { container } = render(
            <SpreadSheet
                columns={['name', 'gender', 'age', 'address']}
                data={[
                    ['zhangsan', 'male', '20', 'xihu'],
                    ['lisi', 'male', '18', 'yuhang'],
                ]}
                className="testSpreadSheet"
            />
        );
        expect(container.firstChild).toHaveClass('testSpreadSheet');
    });
});
