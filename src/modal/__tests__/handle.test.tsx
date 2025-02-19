import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Handler from '../handle';

describe('Handler Component', () => {
    it('should match snapshot', () => {
        const { asFragment } = render(<Handler data-testid="handler" handleAxis="x" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should forward ref to the div element', () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Handler handleAxis="y" ref={ref} />);
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
        expect(ref.current).toHaveClass('dt-modal-resize-handle handle-y');
    });
});
