import React from 'react';
import TableCell from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test TableCell ', () => {
    test('should render TableCell custom className', () => {
        const { container } = render(<TableCell className="testTableCell" />);
        expect(container.firstChild).toHaveClass('testTableCell');
    });
});
