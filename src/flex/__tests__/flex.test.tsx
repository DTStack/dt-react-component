import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Flex from '..';

const children = (
    <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
    </>
);

describe('Test Flex Button', () => {
    beforeEach(() => cleanup());

    it('Match the snapshot', () => {
        expect(render(<Flex>{children}</Flex>).asFragment()).toMatchSnapshot();

        expect(render(<Flex vertical>{children}</Flex>).asFragment()).toMatchSnapshot(
            'primary button'
        );
    });
});
