import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Match from '../match';

describe('Test Input.Match component', () => {
    it('Should match snapshot', () => {
        const { asFragment } = render(<Match />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should support searchType', () => {
        const fn = jest.fn();
        const { rerender, container } = render(<Match onTypeChange={fn} />);
        const dom = container.querySelector('img[alt="front"]')!;
        expect(dom).not.toBeNull();

        fireEvent.click(dom);

        expect(fn).toBeCalledWith('front');

        rerender(<Match searchType="front" onTypeChange={fn} />);
        fireEvent.click(container.querySelector('img[alt="front"]')!);
        expect(fn).toBeCalledWith('fuzzy');
    });

    it('Should support filterOptions', () => {
        const { container } = render(<Match filterOptions={['tail']} />);

        expect(container.querySelector('img[alt="front"]')).toBeNull();
        expect(container.querySelector('img[alt="tail"]')).not.toBeNull();
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
