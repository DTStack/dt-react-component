import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useModal from '..';

describe('Test useModal hook', () => {
    it('Should ensure initial data', async () => {
        const { result } = renderHook(() => useModal());
        expect(result.current.visible).toBeFalsy();
        expect(result.current.record).toBeUndefined();
        expect(result.current.open).toBeDefined();
        expect(result.current.close).toBeDefined();
    });

    it('Should support open/close modal', async () => {
        const record = {
            id: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        };
        const { result } = renderHook(() => useModal());
        act(() => {
            result.current.open(record);
        });

        expect(result.current.visible).toBeTruthy();
        expect(result.current.record).toEqual(record);

        act(() => {
            result.current.close();
        });

        expect(result.current.visible).toBeFalsy();
        expect(result.current.record).toBeUndefined();
    });
});
