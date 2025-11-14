import React, { useMemo } from 'react';
import { Components } from 'react-markdown';
import classNames from 'classnames';

import { Prompt as PromptEntity } from '../entity';
import Markdown from '../markdown';
import { useContext } from '../useContext';
import './index.scss';

export type IPromptProps<T extends PromptEntity = PromptEntity> = {
    data?: T;
    className?: string;
    extraRender?: React.ReactNode;
};

export default function Prompt<T extends PromptEntity = PromptEntity>({
    data,
    className,
    extraRender,
}: IPromptProps<T>) {
    const { components = {}, codeBlock } = useContext();

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

    if (!data?.title) return null;

    return (
        <section className={classNames('dtc__prompt__container', className)}>
            <div className="dtc__prompt__wrapper">
                <div className="dtc__prompt__content">
                    <Markdown codeBlock={codeBlock} components={composedComponents} isHtmlContent>
                        {data?.title || ''}
                    </Markdown>
                </div>
            </div>
            <React.Fragment>{extraRender}</React.Fragment>
        </section>
    );
}
