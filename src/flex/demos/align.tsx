import React, { useState } from 'react';
import { Button, Segmented, Slider } from 'antd';
import { Flex } from 'dt-react-component';
import type { IFlexProps } from 'dt-react-component/flex';

const alignOptions = ['flex-start', 'center', 'flex-end'];
const justifyOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];

export default () => {
    const [align, setAlign] = useState<IFlexProps['align']>('center');
    const [justify, setJustify] = useState<IFlexProps['justify']>('center');
    const [vertical, setVertical] = useState<string>('false');
    const [gap, setGap] = useState<number>(4);
    return (
        <>
            <p>Select align :</p>
            <Segmented
                value={align}
                options={alignOptions}
                onChange={(val) => setAlign(val as IFlexProps['align'])}
            />
            <p>Select justify :</p>
            <Segmented
                value={justify}
                options={justifyOptions}
                onChange={(val) => setJustify(val as IFlexProps['justify'])}
            />
            <p>Select vertical :</p>
            <Segmented
                value={vertical}
                options={['true', 'false']}
                onChange={(val) => setVertical(val as string)}
            />
            <p>Select gap :</p>
            <Slider value={gap} max={20} min={0} onChange={setGap} />
            <br />
            <br />
            <Flex
                gap={gap}
                vertical={vertical === 'true'}
                align={align}
                justify={justify}
                style={{ border: '1px solid #5D9EFA', height: 200 }}
            >
                <Button>button</Button>
                <Button>button</Button>
                <Button>button</Button>
                <Button>button</Button>
            </Flex>
        </>
    );
};
