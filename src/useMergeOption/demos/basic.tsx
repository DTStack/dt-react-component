import React, { useState } from 'react';
import { Segmented } from 'antd';
import { useMergeOption } from 'dt-react-component';
import type { MergeOption } from 'dt-react-component/useMergeOption';

type ExampleState = MergeOption<{ day?: boolean }>;

export default function Basic() {
    const [state, setState] = useState<ExampleState>(false);

    const merged = useMergeOption(state, { day: true });

    const getValue = () => {
        if (state === false) return 0;
        if (state === true) return 2;
        return 1;
    };
    const setValue = (value: number) => {
        setState([false, { day: false }, true][value]);
    };

    return (
        <>
            <label>Change value:</label>
            <Segmented
                value={getValue()}
                options={[
                    {
                        label: 'false',
                        value: 0,
                    },
                    {
                        label: `{ day: false }`,
                        value: 1,
                    },
                    {
                        label: 'true',
                        value: 2,
                    },
                ]}
                onChange={(val) => setValue(val as number)}
            />
            <pre style={{ marginTop: 8, border: '1px solid #eee', padding: 8 }}>
                {JSON.stringify(merged, null, 2)}
            </pre>
        </>
    );
}
