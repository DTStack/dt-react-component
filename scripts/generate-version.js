const fs = require('fs-extra');
const path = require('path');
const { version } = require('../package.json');

// TODO: output version
fs.writeFileSync(
    path.join(__dirname, '..', 'src/components/version/version.tsx'),
    `export default '${version}'`,
    'utf8'
);
