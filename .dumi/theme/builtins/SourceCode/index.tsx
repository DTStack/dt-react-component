import React, { useEffect, useRef, useState } from 'react';
import { default as OriginalSourceCode } from 'dumi/theme-default/builtins/SourceCode';
import { codeToHtml } from 'shiki';
import { createTransformerFactory, rendererRich } from '@shikijs/twoslash/core';
import { createTwoslashFromCDN } from 'twoslash-cdn';
import { createStorage } from 'unstorage';
import indexedDbDriver from 'unstorage/drivers/indexedb';
import './index.less';

type ISourceCodeProps = Parameters<typeof OriginalSourceCode>[0];

const storage = createStorage({
    driver: indexedDbDriver({ base: 'twoslash-cdn' }),
});
const twoslash = createTwoslashFromCDN({
    storage,
    compilerOptions: {
        strict: false,
        lib: ['esnext', 'dom'],
    },
    twoSlashOptionsOverrides: {
        handbookOptions: {
            noErrors: true,
        },
    },
});
const transformerTwoslash = createTransformerFactory(twoslash.runSync)({
    renderer: rendererRich(),
});

const specificVersionForATA = (str: string) => {
    const versions = {
        react: '18.2.0',
        antd: '4.22.5',
    };
    const text = str
        .replace(/import .* from 'react';/g, (i) => i + ' // types: ' + versions.react)
        .replace(/import .*from 'antd.*;/g, (i) => i + ' // types: ' + versions.antd)
        .replace('dt-react-component', '.dt-react-component');
    return text;
};

export default function SourceCode({ children, lang, highlightLines }: ISourceCodeProps) {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoading(true);
        twoslash
            .prepareTypes(specificVersionForATA(children))
            .then(() => {
                return codeToHtml(children, {
                    lang,
                    theme: 'vitesse-light',
                    transformers: [transformerTwoslash],
                });
            })
            .then(setCode)
            .finally(() => {
                setLoading(false);
            });
    }, [children]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'a' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                // Ctrl + A
                const selection = window.getSelection();
                selection?.removeAllRanges();
                const range = new Range();
                range.selectNodeContents(ref.current!);
                selection?.addRange(range);
            }
        };
        ref.current?.addEventListener('keydown', handleKeyDown);
        return () => {
            ref.current?.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (loading) return <div className="sourceCode__loading">loading...</div>;
    return (
        <div
            ref={ref}
            className="sourceCode__container"
            tabIndex={-1}
            dangerouslySetInnerHTML={{ __html: code }}
        />
    );
}
