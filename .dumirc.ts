import { defineConfig } from 'dumi';

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'dt-react-component',
    },
    base: '/dt-react-component/',
    publicPath: '/dt-react-component/',
    exportStatic: {},
    // TODO 先关闭，后面再看
    ssr: false,
    logo: 'http://assets.dtstack.com/UEDLanding/Home/logo.png',
    favicons: ['http://assets.dtstack.com/UEDLanding/Home/logo.png'],
    links: [{ href: 'https://cdn.jsdelivr.net/npm/antd@4.22.5/dist/antd.css', rel: 'stylesheet' }],
});
