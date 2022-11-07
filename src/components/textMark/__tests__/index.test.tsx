import React from 'react';
import TextMark from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test TextMark ', () => {
    test('should render TextMark custom className', () => {
        const { container } = render(<TextMark className="testTextMark" />);
        expect(container.firstChild).toHaveClass('testTextMark');
    });
});
