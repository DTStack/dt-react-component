import { IApi } from 'dumi';
import ReactTechStack from 'dumi/dist/techStacks/react';
import type { ExampleBlockAsset } from 'dumi-assets-types';
import ts from 'typescript';
import type { HighlighterCore, ShikiTransformerContextCommon } from 'shiki';
import type { Element, ElementContent } from 'hast';
import type { fromMarkdown } from 'mdast-util-from-markdown';
import type { gfmFromMarkdown } from 'mdast-util-gfm';
import type { defaultHandlers, toHast } from 'mdast-util-to-hast';

let highlighter: HighlighterCore | null = null;
async function getHighlighterCore() {
    const [
        { createHighlighterCore, createOnigurumaEngine },
        wasm,
        { bundledLanguages },
        { bundledThemes },
    ] = await Promise.all([
        import('shiki'),
        import('shiki/dist/wasm.mjs'),
        import('shiki/dist/langs.mjs'),
        import('shiki/dist/themes.mjs'),
    ]);
    highlighter =
        highlighter ||
        (await createHighlighterCore({
            themes: [bundledThemes['vitesse-light']],
            langs: [bundledLanguages['tsx'], bundledLanguages['js'], bundledLanguages['ts']],
            engine: createOnigurumaEngine(wasm),
        }));
    return highlighter;
}

let creatingHighlighterCore = false;
let listener: Function[] = [];
async function getShiki() {
    return new Promise<HighlighterCore['codeToHtml']>((resolve) => {
        if (!creatingHighlighterCore) {
            creatingHighlighterCore = true;
            getHighlighterCore().then(({ codeToHtml }) => {
                listener.forEach((resolve) => resolve(codeToHtml));
                resolve(codeToHtml);
                creatingHighlighterCore = false;
            });
        } else {
            listener.push(resolve);
        }
    });
}

class DTReactTech extends ReactTechStack {
    async generateMetadata(asset: ExampleBlockAsset) {
        // workaround for esm module
        const [
            { transformerTwoslash },
            codeToHtml,
            { fromMarkdown },
            { gfmFromMarkdown },
            { defaultHandlers, toHast },
        ] = await Promise.all([
            import('@shikijs/twoslash'),
            getShiki(),
            import('mdast-util-from-markdown'),
            import('mdast-util-gfm'),
            import('mdast-util-to-hast'),
        ]);
        const handler = {
            fromMarkdown,
            gfmFromMarkdown,
            defaultHandlers,
            toHast,
        };
        Object.entries(asset.dependencies).map(([filename, dep]) => {
            if (dep.type === 'FILE') {
                const html = codeToHtml(dep.value, {
                    lang: 'tsx',
                    theme: 'vitesse-light',
                    transformers: [
                        transformerTwoslash({
                            twoslashOptions: {
                                compilerOptions: {
                                    jsx: ts.JsxEmit.React,
                                },
                                handbookOptions: {
                                    noErrors: true,
                                },
                            },
                            rendererRich: {
                                renderMarkdown: function (md) {
                                    return renderMarkdown.call(this, md, handler);
                                },
                                renderMarkdownInline: function (md, context) {
                                    return renderMarkdownInline.call(this, handler, md, context);
                                },
                            },
                        }),
                    ],
                });
                asset.dependencies[filename] = <any>{ ...dep, jsx: html };
            }
        });
        return asset;
    }
}

const AssetsPlugin = async (api: IApi) => {
    api.registerTechStack(() => new DTReactTech());

    // TODO: 应该在 umi 退出的时候销毁，包括 catch 退出
    api.onDevCompileDone(() => {
        highlighter?.dispose();
    });
};

export default AssetsPlugin;

type Handler = {
    fromMarkdown: typeof fromMarkdown;
    gfmFromMarkdown: typeof gfmFromMarkdown;
    toHast: typeof toHast;
    defaultHandlers: typeof defaultHandlers;
};
/**
 * refer：https://github.com/shikijs/shiki/blob/main/packages/vitepress-twoslash/src/renderer-floating-vue.ts#L130-L131
 */
function renderMarkdown(this: ShikiTransformerContextCommon, md: string, handler: Handler) {
    const { fromMarkdown, gfmFromMarkdown, toHast, defaultHandlers } = handler;
    const mdast = fromMarkdown(
        md.replace(/\{@link ([^}]*)\}/g, '$1'), // replace jsdoc links
        { mdastExtensions: [gfmFromMarkdown()] }
    );

    return (
        toHast(mdast, {
            handlers: {
                code: (state, node) => {
                    const lang = node.lang || '';
                    if (lang) {
                        return <Element>{
                            type: 'element',
                            tagName: 'code',
                            properties: {},
                            children: this.codeToHast(node.value, {
                                ...this.options,
                                transformers: [],
                                lang,
                                structure: node.value.trim().includes('\n') ? 'classic' : 'inline',
                            }).children,
                        };
                    }
                    return defaultHandlers.code(state, node);
                },
            },
        }) as Element
    ).children;
}

function renderMarkdownInline(
    this: ShikiTransformerContextCommon,
    handler: Handler,
    md: string,
    context?: string
): ElementContent[] {
    if (context === 'tag:param') md = md.replace(/^([\w$-]+)/, '`$1` ');

    const children = renderMarkdown.call(this, md, handler);
    if (children.length === 1 && children[0].type === 'element' && children[0].tagName === 'p')
        return children[0].children;
    return children;
}
