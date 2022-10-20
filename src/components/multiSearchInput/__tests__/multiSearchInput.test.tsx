import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import MulSelectDropdown from '../index';

describe('mulSelectDropdown Component test', () => {
    afterEach(() => {
        cleanup();
    });
    it('custom filter rendering', () => {
        const { queryByTestId } = render(<MulSelectDropdown filterOptions={['front', 'tail']} />);
        expect(queryByTestId('icon-front')).not.toBeNull();
        expect(queryByTestId('icon-tail')).not.toBeNull();
        expect(queryByTestId('icon-caseSensitive')).toBeNull();
        expect(queryByTestId('icon-precise')).toBeNull();
    });
    it('input value change', () => {
        const myMockChange = jest.fn((value) => value);
        const { queryByTestId } = render(
            <MulSelectDropdown searchType="tail" onChange={myMockChange} />
        );
        fireEvent.change(queryByTestId('input'), { target: { value: '1234567891011' } });
        expect(myMockChange).toHaveBeenCalled();
        expect(myMockChange.mock.results[0].value).toBe('1234567891011');
    });
    it('input search', () => {
        const myMockSearch = jest.fn((value: any, searchType: any) => {
            return { value, searchType };
        });
        const { queryByTestId } = render(
            <MulSelectDropdown
                searchType="tail"
                value="this is value"
                placeholder="hello"
                onSearch={myMockSearch}
            />
        );
        fireEvent.keyDown(queryByTestId('input'), { key: 'Enter', keyCode: 13 });
        expect(myMockSearch.mock.calls.length).toBe(1);
    });
});
