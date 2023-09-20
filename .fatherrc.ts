import { defineConfig } from 'father';

export default defineConfig({
    // more father config: https://github.com/umijs/father/blob/master/docs/config.md
    esm: { output: 'esm', ignores: ['**/demos/**'], transformer: 'babel' },
    cjs: { output: 'lib', ignores: ['**/demos/**'], transformer: 'babel' },
});
