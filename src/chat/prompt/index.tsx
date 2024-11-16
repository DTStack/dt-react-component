import React from 'react';
import classNames from 'classnames';

import Markdown from '../markdown';
import { useContext } from '../useContext';
import './index.scss';

type IPromptProps = {
    content?: string;
    className?: string;
};

export default function Prompt({ content, className }: IPromptProps) {
    const { components = {} } = useContext();

    return (
        <section className={classNames('dtc__prompt__container', className)}>
            <div className="dtc__prompt__wrapper">
                <div className="dtc__prompt__content">
                    <Markdown components={components}>{content || ''}</Markdown>
                </div>
            </div>
        </section>
    );
}
