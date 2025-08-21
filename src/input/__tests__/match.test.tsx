import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Match from '../match';

describe('Test Input.Match component', () => {
    it('Should match snapshot', () => {
        const { asFragment } = render(<Match />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should support searchType', () => {
        const fn = jest.fn();
        const { rerender, container } = render(<Match onTypeChange={fn} />);
        const elements = container.querySelectorAll('span.dtc-input-match-suffixItem')!;
        expect(elements).toHaveLength(4);

        fireEvent.click(elements[0]);

        expect(fn).toBeCalledWith('caseSensitive');

        rerender(<Match searchType="caseSensitive" onTypeChange={fn} />);
        expect(container.querySelectorAll('span.dtc-input-match-suffixItem')!).toHaveLength(4);
        expect(
            container.querySelectorAll('span.dtc-input-match-suffixItem')[0].classList
        ).toContain('dtc-input-match-suffixItem__active');
        fireEvent.click(container.querySelectorAll('span.dtc-input-match-suffixItem')[0]);
        expect(fn).toBeCalledWith('fuzzy');
    });

    it('Should support filterOptions', () => {
        const { container } = render(<Match filterOptions={['tail']} />);

        expect(container.querySelectorAll('span.dtc-input-match-suffixItem')!).toHaveLength(1);
    });

    it('Should support onSearch and onPressEnter', () => {
        const searchFn = jest.fn();
        const pressEnterFn = jest.fn();
        const { container } = render(
            <Match
                value="test"
                searchType="front"
                onSearch={searchFn}
                onPressEnter={pressEnterFn}
            />
        );

        fireEvent.keyDown(container.querySelector('input')!, { key: 'Enter', charCode: 13 });

        expect(searchFn).toBeCalledWith('test', 'front');
        expect(pressEnterFn).toBeCalled();
    });

    it('Should support get value', () => {
        const fn = jest.fn();
        const { container } = render(<Match value="test" onChange={fn} />);

        const inputEl = container.querySelector('input')!;
        fireEvent.change(inputEl, { target: { value: 'test1' } });

        expect(fn).toBeCalled();
    });
});
