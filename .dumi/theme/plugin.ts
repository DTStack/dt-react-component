import { IApi } from 'dumi';
import ReactTechStack from 'dumi/dist/techStacks/react';
import type { ExampleBlockAsset } from 'dumi-assets-types';
import ts from 'typescript';

class DTReactTech extends ReactTechStack {
    async generateMetadata(asset: ExampleBlockAsset) {
        // workaround for esm module
        const { transformerTwoslash } = await import('@shikijs/twoslash');
        const { codeToHtml } = await import('shiki');
        for (const [filename, dep] of Object.entries(asset.dependencies)) {
            if (dep.type === 'FILE' && asset.id === 'blockheader-demo-basic') {
                const html = await codeToHtml(dep.value, {
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
                        }),
                    ],
                });

                asset.dependencies[filename] = <any>{ ...dep, jsx: html };
            }
        }
        return asset;
    }
}

const AssetsPlugin = async (api: IApi) => {
    api.registerTechStack(() => new DTReactTech());
};

export default AssetsPlugin;
