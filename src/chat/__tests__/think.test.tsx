import React from 'react';
import { render } from '@testing-library/react';

import Think from '../think';

describe('Think component snapshot', () => {
    it('renders loading state correctly', () => {
        const data = { children: '正在思考中，暂无内容。' } as any;
        const { container } = render(<Think data={data} loading />);
        expect(container).toMatchSnapshot();
    });

    it('renders completed state with children correctly', () => {
        const markdown = `这里是 Think 的内容示例（支持 Markdown）\n\n- 列表项 A\n- 列表项 B`;
        const data = { children: markdown } as any;
        const { container } = render(<Think data={data} loading={false} />);
        expect(container).toMatchSnapshot();
    });
});
