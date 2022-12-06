import { defineConfig } from 'dumi';

export default defineConfig({
    outputPath: 'docs-dist',
    themeConfig: {
        name: 'dt-react-component',
    },
    // TODO 先关闭，后面再看
    base: 'dt-react-component',
    ssr: false,
    logo: 'http://assets.dtstack.com/UEDLanding/Home/logo.png',
    favicons: ['http://assets.dtstack.com/UEDLanding/Home/logo.png'],
    links: [
        {
            href: 'https://unpkg.com/@chinese-fonts/dyh@1.1.0/dist/SmileySans-Oblique/result.css',
            rel: 'stylesheet',
        },
        { href: 'https://cdn.jsdelivr.net/npm/antd@4.22.5/dist/antd.css', rel: 'stylesheet' },
    ],
});
