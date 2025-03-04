import { defineConfig } from 'dumi';
import pkg from './package.json';

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'dt-react-component',
        footer: `dt-react-component ${pkg.version} · Made by dtstack`,
    },
    base: '/dt-react-component/',
    publicPath: '/dt-react-component/',
    exportStatic: {},
    // TODO 先关闭，后面再看
    ssr: false,
    logo: '/dt-react-component/logo.png',
    favicons: ['/dt-react-component/logo.png'],
    extraBabelPlugins: [
        [
            'import',
            {
                libraryName: 'antd',
                style: true,
            },
        ],
    ],
});
