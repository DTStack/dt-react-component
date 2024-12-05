import React, { useMemo } from 'react';
import { Components } from 'react-markdown';
import classNames from 'classnames';

import type { Prompt as PromptEntity } from '../entity';
import Markdown from '../markdown';
import { useContext } from '../useContext';
import './index.scss';

type IPromptProps = {
    data?: PromptEntity;
    className?: string;
};

export default function Prompt({ data, className }: IPromptProps) {
    const { components = {} } = useContext();

    const composedComponents = useMemo(() => {
        return Object.keys(components).reduce<Components>((acc, cur) => {
            const original = components[cur as keyof Components];
            (acc as any)[cur] = (...args: any[]) => {
                return typeof original === 'function'
                    ? (original as Function)(...args, { promptId: data?.id })
                    : original;
            };

            return acc;
        }, {});
    }, [components, data?.id]);

    return (
        <section className={classNames('dtc__prompt__container', className)}>
            <div className="dtc__prompt__wrapper">
                <div className="dtc__prompt__content">
                    <Markdown components={composedComponents}>{data?.title || ''}</Markdown>
                </div>
            </div>
        </section>
    );
}
