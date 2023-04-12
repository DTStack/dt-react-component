// 由于 react-router 的版本不兼容的问题，导致 react-router@3 需要 alias 到 react-router-3 上
// 在某些仓库中，会直接引用 src 下的源码，需要将源码中的 react-router-3 改写为 react-router

const fs = require('fs');
const path = require('path');

function redirectReactRouterPath() {
    try {
        const files = ['src/breadcrumb/index.tsx'];
        const baseUrl = path.join(__dirname, '../');

        if (fs.existsSync(path.join(__dirname, '../src'))) {
            files.forEach((filePath) => {
                let content = fs.readFileSync(path.join(baseUrl, filePath), 'utf-8');
                content = content.replace(/react-router-3/gm, 'react-router');
                fs.writeFileSync(path.join(baseUrl, filePath), content);
            });
        } else {
            console.log(path.join(__dirname, '../src'), '不存在');
        }
    } catch (error) {
        console.log(error);
    }
}

try {
    const config = fs.readFileSync(path.join(__dirname, '../.git/config'), 'utf-8');
    // 如果非本仓库的情况下也去修改
    if (
        !config.includes('dt-react-component.git') &&
        !config.includes('https://github.com/DTStack/dt-react-component')
    ) {
        redirectReactRouterPath();
    }
} catch (error) {
    // 如果没有 .git 则修改
    redirectReactRouterPath();
}
