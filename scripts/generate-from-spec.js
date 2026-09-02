#!/usr/bin/env node
/**
 * SDD spec → artifact generator
 *
 * - api:  deterministic sync of index.md API table from spec.props
 * - others: print Cursor prompts for the contributor to paste
 *
 * Usage:
 *   pnpm spec:generate -- --component Copy
 *   pnpm spec:generate -- --component Copy --artifact api
 *   pnpm spec:generate -- --component Copy --artifact spec|cascade|test|impl|demo|api|harness|all
 */

const fs = require('fs');
const path = require('path');

/** index.md API 区块标记（相对组件目录：brief/spec.yaml） */
const GENERATED_START = '<!-- @generated-from: brief/spec.yaml -->';
const GENERATED_END = '<!-- @generated-end -->';

/** artifact 执行顺序（--artifact all 时） */
const ARTIFACT_ORDER = ['spec', 'cascade', 'impl', 'test', 'api', 'demo', 'harness'];

/** 不依赖已有 spec.yaml 的 artifact（首次建链可用） */
const NO_SPEC_REQUIRED = new Set(['spec', 'cascade']);

const ARTIFACTS = {
    spec: {
        label: 'Prompt ① · brief + 源码 → spec.yaml',
        output: (dir) => path.join(dir, 'brief', 'spec.yaml'),
        prompt: (name) => buildSpecPrompt(name),
        write: false,
    },
    cascade: {
        label: 'Prompt ③ · 改需求统筹（读 git diff → 列出后续更新顺序）',
        output: (dir) => path.join(dir, 'brief', 'brief.md'),
        prompt: (name) => buildCascadePrompt(name),
        write: false,
    },
    test: {
        label: 'Prompt ② · 单元测试',
        output: (dir, _name, kebab) => path.join(dir, '__tests__', `${kebab}.test.tsx`),
        prompt: (name) =>
            `根据 src/${toKebab(name)}/brief/spec.yaml 生成 src/${toKebab(
                name
            )}/__tests__/${toKebab(name)}.test.tsx。\n` +
            `Jest + Testing Library；每个 scenarios.id 一个 it(...)；不测 outOfScope。\n` +
            `@generated-from: brief/spec.yaml`,
        write: false,
    },
    api: {
        label: 'index.md API 表（脚本自动写文件）',
        output: (dir) => path.join(dir, 'index.md'),
        prompt: () => '',
        write: true,
    },
    impl: {
        label: 'Prompt ④ · index.tsx 最小 diff · 人审',
        output: (dir) => path.join(dir, 'index.tsx'),
        prompt: (name) =>
            `阅读 src/${toKebab(name)}/brief/spec.yaml 与 src/${toKebab(name)}/index.tsx。\n` +
            `1. 列出 scenarios 与当前实现的差异\n` +
            `2. 对 index.tsx 做**最小 diff**以满足 spec，不碰 outOfScope\n` +
            `3. 不做无关重构；保持现有代码风格\n` +
            `4. 若 spec 与 brief 冲突，指出而非擅自改 spec`,
        write: false,
    },
    demo: {
        label: 'Prompt ②′ · dumi Demo · 人工触发 · 人审',
        output: (dir, _name, kebab) => path.join(dir, 'demos', `${kebab}-demo.tsx`),
        prompt: (name) => buildDemoPrompt(name),
        write: false,
    },
    harness: {
        label: 'Prompt ②″ · Harness 交互验证（可选）',
        output: (dir) => path.join(dir, 'demos', 'harness.tsx'),
        prompt: (name) =>
            `根据 src/${toKebab(name)}/brief/spec.yaml 生成 demos/harness.tsx。\n` +
            `含 props 控件、预设场景按钮、预览区、规格核对清单。\n` +
            `不要修改 index.md 的「示例」区块；可选在文档底部增加维护者入口。`,
        write: false,
    },
};

function toKebab(name) {
    return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/** 组件根目录下的 brief/ 约定路径 */
function getBriefPaths(componentDir, kebab) {
    const dir = path.join(componentDir, 'brief');
    return {
        dir,
        briefPath: path.join(dir, 'brief.md'),
        specPath: path.join(dir, 'spec.yaml'),
        briefRel: `src/${kebab}/brief/brief.md`,
        specRel: `src/${kebab}/brief/spec.yaml`,
    };
}

/**
 * Prompt ① — brief + 源码 → spec
 * @see docs/guide/SDD.md
 */
function buildSpecPrompt(name) {
    const kebab = toKebab(name);
    return (
        `阅读 src/${kebab}/brief/brief.md 与 src/${kebab}/index.tsx，\n` +
        `生成 src/${kebab}/brief/spec.yaml。\n\n` +
        `brief 通常只有「干什么 / Props 语义 / 场景」三节。\n` +
        `据此生成：props（**仅封装层**；先属性后方法 onXxx，组内 a–z）、\n` +
        `scenarios（id 对齐 brief 场景）、outOfScope、testFixtures、\n` +
        `harnessMeta、linkedDemos（对照现有 demos/）、extendsAntd（仅当 Props 写明继承 antd/rc）。\n\n` +
        `brief 未写清处从源码推断并标 aiSupplement: true。\n` +
        `@generated-from: brief/brief.md`
    );
}

/**
 * Prompt ③ — 变更级联统筹
 * @see docs/guide/SDD.md
 */
function buildCascadePrompt(name) {
    return (
        `见 git diff（brief / index.tsx / 测试）：\n\n` +
        `1. 建议 brief/brief.md 还需改哪几段\n` +
        `2. regenerate brief/spec.yaml 要点\n` +
        `3. 按顺序列出需执行的 Prompt：\n` +
        `   - ④ index.tsx（最小 diff）\n` +
        `   - ② 测试\n` +
        `   - pnpm spec:generate -- --component ${name} --artifact api\n` +
        `   - （按需）②′ demo\n` +
        `   - （可选）②″ harness\n` +
        `4. demo 是否需 Prompt ②′（对照 linkedDemos / 新 props 展示）\n` +
        `5. 审查三问 + 实现审查检查要点（见 docs/guide/SDD.md）`
    );
}

/**
 * Prompt ②′ — demo 由人按需触发，填完「设计意图」段落后交给 AI。
 * @see docs/guide/SDD.md
 */
function buildDemoPrompt(name) {
    const kebab = toKebab(name);
    return (
        `为 src/${kebab}/ 生成 dumi demo。先阅读：\n` +
        `- brief/brief.md、brief/spec.yaml、index.tsx\n` +
        `- 现有 demo 风格参考：demos/basic.tsx（或其它已有 demo）\n\n` +
        `【使用前请填写以下设计意图，再发送本 Prompt】\n` +
        `- demo 文件：demos/__________.tsx（新建或覆盖）\n` +
        `- 展示目的：__________（如「对比 tooltip 三种写法」）\n` +
        `- 重点 props：__________（如 tooltip, button, disabled）\n` +
        `- 对应 scenarioId（可选）：__________\n` +
        `- index.md 卡片 title：__________\n` +
        `- index.md 卡片 description：__________\n\n` +
        `生成要求：\n` +
        `1. 按上述 props 组合写可运行 demo，import { ${name} } from 'dt-react-component'\n` +
        `2. 遵循 RC 现有 demo 风格（BlockHeader / Space / 示例文案等），单 demo 聚焦一个主题\n` +
        `3. props 取值与 spec.props 语义一致，不展示 outOfScope 行为\n` +
        `4. 输出末尾附：建议写入 index.md 的 <code src> 一行（**不要**自动改 index.md）\n` +
        `5. 若为新场景，建议在 spec linkedDemos 追加映射（输出 yaml 片段供人粘贴）`
    );
}

function parseArgs(argv) {
    const result = { component: null, artifact: 'all', dryRun: false };
    for (let i = 0; i < argv.length; i++) {
        if (argv[i] === '--component' && argv[i + 1]) {
            result.component = argv[++i];
        } else if (argv[i] === '--artifact' && argv[i + 1]) {
            result.artifact = argv[++i];
        } else if (argv[i] === '--dry-run') {
            result.dryRun = true;
        } else if (argv[i] === '--help' || argv[i] === '-h') {
            result.help = true;
        }
    }
    return result;
}

function printHelp() {
    console.log(`
SDD spec → artifact generator

用法（把 <Name> 换成组件名，如 Copy / Drawer）：
  pnpm spec:generate -- --component <Name> --artifact <artifact>

贡献者速查（终端打印 Prompt → 复制到 Cursor 发送）：
  --artifact spec      Prompt ①  brief + 源码 → 生成/更新 brief/spec.yaml
  --artifact cascade   Prompt ③  改需求统筹：读 git diff，列出 brief/spec/实现/测试/API/demo 该改哪些、按何顺序
  --artifact impl      Prompt ④  按 spec 最小改动更新 index.tsx（人审）
  --artifact test      Prompt ②  按 spec 生成/更新单元测试
  --artifact api       脚本自动写 index.md API 表（唯一自动写文件）
  --artifact demo      Prompt ②′ 按需生成 dumi demo（先填设计意图再发）
  --artifact harness   Prompt ②″ 按需生成 Harness 验规格面板（可选）
  --artifact all       打印全部 Prompt + 同步 API

Examples:
  pnpm spec:generate -- --component Copy --artifact spec
  pnpm spec:generate -- --component Copy --artifact impl
  pnpm spec:generate -- --component Copy --artifact test
  pnpm spec:generate -- --component Copy --artifact api
  pnpm spec:generate -- --component Copy --artifact demo
  pnpm spec:generate -- --component Copy --artifact harness

Docs: docs/guide/SDD.md
`);
}

function loadSpec(specPath) {
    if (!fs.existsSync(specPath)) {
        return null;
    }
    const raw = fs.readFileSync(specPath, 'utf8');
    const idMatches = raw.match(/^\s*-\s*id:/gm);
    return {
        raw,
        path: specPath,
        scenarioCount: idMatches ? idMatches.length : 0,
        props: parsePropsFromSpec(raw),
        extendsAntd: parseExtendsAntdFromSpec(raw),
    };
}

function unquote(value) {
    return value.trim().replace(/^['"]|['"]$/g, '');
}

/**
 * Parse a flat YAML mapping block (structured subset, no external deps).
 */
function parseFlatYamlBlock(raw, blockName) {
    const lines = raw.split('\n');
    const result = {};
    let inBlock = false;

    for (const line of lines) {
        if (new RegExp(`^${blockName}:\\s*$`).test(line)) {
            inBlock = true;
            continue;
        }
        if (!inBlock) {
            continue;
        }
        if (line.trim() && !line.startsWith(' ') && !line.startsWith('\t')) {
            break;
        }
        const fieldMatch = line.match(/^\s{2}([a-zA-Z_][\w]*):\s*(.*)$/);
        if (fieldMatch) {
            const [, key, value = ''] = fieldMatch;
            result[key] = unquote(value);
        }
    }

    return Object.keys(result).length ? result : null;
}

/**
 * Parse spec.props block — nested prop definitions.
 */
function parsePropsFromSpec(raw) {
    const lines = raw.split('\n');
    const props = {};
    let inProps = false;
    let currentProp = null;
    const baseIndent = 2;

    for (const line of lines) {
        if (/^props:\s*$/.test(line)) {
            inProps = true;
            continue;
        }
        if (!inProps) {
            continue;
        }
        if (line.trim() && !line.startsWith(' ') && !line.startsWith('\t')) {
            break;
        }
        const propMatch = line.match(/^(\s*)([a-zA-Z_][\w]*):\s*$/);
        if (propMatch && propMatch[1].length === baseIndent) {
            currentProp = propMatch[2];
            props[currentProp] = {};
            continue;
        }
        if (currentProp) {
            const fieldMatch = line.match(/^\s+(type|description|default|required):\s*(.+)?$/);
            if (fieldMatch) {
                const [, key, value = ''] = fieldMatch;
                props[currentProp][key] = unquote(value);
            }
        }
    }

    return props;
}

function parseExtendsAntdFromSpec(raw) {
    return parseFlatYamlBlock(raw, 'extendsAntd');
}

function formatDefault(value) {
    if (value === undefined || value === null || value === '' || value === 'null') {
        return '--';
    }
    return value;
}

function escapeTableCell(value) {
    return String(value).replace(/\|/g, '\\|');
}

/**
 * API 表排序规则（与 Drawer 等既有文档一致）：
 * 1. 先属性，后方法（方法：prop 名匹配 /^on[A-Z]/）
 * 2. 属性、方法组内各自按 a–z（localeCompare，大小写不敏感）
 */
function isMethodProp(name) {
    return /^on[A-Z]/.test(name);
}

function sortPropsForApiTable(props) {
    const entries = Object.entries(props);
    const byNameAsc = (a, b) => a[0].localeCompare(b[0], 'en', { sensitivity: 'base' });
    const attributes = entries.filter(([name]) => !isMethodProp(name)).sort(byNameAsc);
    const methods = entries.filter(([name]) => isMethodProp(name)).sort(byNameAsc);
    return [...attributes, ...methods];
}

function buildApiTable(props) {
    const header = ['| 参数 | 说明 | 类型 | 默认值 |', '| --- | --- | --- | --- |'];
    const rows = sortPropsForApiTable(props).map(([name, meta]) => {
        const desc = escapeTableCell(meta.description || '--');
        const type = meta.type ? `\`${escapeTableCell(meta.type)}\`` : '--';
        const def = escapeTableCell(formatDefault(meta.default));
        return `| ${name} | ${desc} | ${type} | ${def} |`;
    });
    return [...header, ...rows].join('\n');
}

/**
 * Antd inheritance notice — follows Drawer index.md (:::info block).
 * @see src/drawer/index.md
 */
function buildExtendsAntdNotice(extendsAntd) {
    if (!extendsAntd || !extendsAntd.component) {
        return '';
    }

    const version = extendsAntd.version || '4.x';
    const { component, docUrl, omit, notice } = extendsAntd;

    let body = notice;
    if (!body) {
        if (omit) {
            body = `其余参数继承 antd${version} 的 \`${omit}\``;
            if (docUrl) {
                body += `<br/>详见 [antd${version} 的 ${component}](${docUrl})`;
            }
        } else if (docUrl) {
            body = `其余属性继承 [antd${version} 的 ${component}](${docUrl})`;
        } else {
            body = `其余属性继承 antd${version} 的 ${component}`;
        }
    }

    return `\n\n:::info\n${body}\n:::`;
}

function buildApiBlock(props, extendsAntd) {
    return buildApiTable(props) + buildExtendsAntdNotice(extendsAntd);
}

function syncIndexMdApi(indexPath, apiTable, dryRun) {
    if (!fs.existsSync(indexPath)) {
        throw new Error(`index.md not found: ${indexPath}`);
    }

    const content = fs.readFileSync(indexPath, 'utf8');
    const start = GENERATED_START;
    const startIdx = content.indexOf(start);
    const endIdx = content.indexOf(GENERATED_END);

    if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
        throw new Error(
            `index.md missing API markers. Add:\n\n${start}\n${apiTable}\n${GENERATED_END}\n\nSee docs/guide/SDD.md`
        );
    }

    const before = content.slice(0, startIdx + start.length);
    const after = content.slice(endIdx);
    const next = `${before}\n\n${apiTable}\n\n${after}`;

    if (dryRun) {
        console.log('\n--- API block (dry-run) ---\n');
        console.log(apiTable);
        return { updated: false, dryRun: true };
    }

    if (next === content) {
        return { updated: false, unchanged: true };
    }

    fs.writeFileSync(indexPath, next, 'utf8');
    return { updated: true };
}

function runApiArtifact(component, componentDir, spec, dryRun) {
    const props = spec.props;
    const propNames = Object.keys(props);

    if (!propNames.length) {
        throw new Error('spec.yaml has no parseable props — check props: block format');
    }

    const apiBlock = buildApiBlock(props, spec.extendsAntd);
    const indexPath = path.join(componentDir, 'index.md');
    const result = syncIndexMdApi(indexPath, apiBlock, dryRun);
    const relIndex = path.relative(process.cwd(), indexPath);
    const extendsLabel = spec.extendsAntd?.component
        ? `, extends antd ${spec.extendsAntd.component}`
        : '';

    if (result.dryRun) {
        console.log(`[api] Would update ${relIndex} (${propNames.length} props${extendsLabel})`);
        return;
    }
    if (result.unchanged) {
        console.log(
            `[api] ${relIndex} API block already up to date (${propNames.length} props${extendsLabel})`
        );
        return;
    }
    console.log(`[api] Updated ${relIndex} API block (${propNames.length} props${extendsLabel})`);
}

function resolveArtifactKeys(artifact) {
    if (artifact === 'all') {
        return ARTIFACT_ORDER.filter((k) => ARTIFACTS[k]);
    }
    return [artifact];
}

function main() {
    const args = parseArgs(process.argv.slice(2));

    if (args.help || !args.component) {
        printHelp();
        process.exit(args.help ? 0 : 1);
    }

    const component = args.component;
    const kebab = toKebab(component);
    const componentDir = path.join(process.cwd(), 'src', kebab);
    const { briefPath, specPath, briefRel, specRel } = getBriefPaths(componentDir, kebab);

    console.log(`\nSDD generate — ${component}\n`);

    if (!fs.existsSync(briefPath)) {
        console.warn(`⚠  Missing brief: ${briefRel}`);
    } else {
        console.log(`✓  Brief: ${briefRel}`);
    }

    const artifactKeys = resolveArtifactKeys(args.artifact);
    const unknown = artifactKeys.filter((k) => !ARTIFACTS[k]);
    if (unknown.length) {
        console.error(`\n✗  Unknown artifact: ${unknown.join(', ')}`);
        console.error(`   Valid: ${ARTIFACT_ORDER.join(', ')}, all\n`);
        process.exit(1);
    }

    const needsSpec = artifactKeys.some((k) => !NO_SPEC_REQUIRED.has(k));
    const spec = loadSpec(specPath);

    if (needsSpec && !spec) {
        console.error(`\n✗  Spec not found: ${specRel}`);
        console.error(
            '   先跑：pnpm spec:generate -- --component ' +
                component +
                ' --artifact spec\n' +
                '   把打印的 Prompt ① 贴到 Cursor，生成 brief/spec.yaml 后再继续。\n'
        );
        process.exit(1);
    }

    if (spec) {
        console.log(
            `✓  Spec:  ${specRel} (${spec.scenarioCount} scenario(s), ${
                Object.keys(spec.props).length
            } prop(s))`
        );
    } else {
        console.log(`○  Spec:  ${specRel}（尚无，可先跑 --artifact spec）`);
    }

    console.log('');

    artifactKeys.forEach((key) => {
        const art = ARTIFACTS[key];
        if (art.write) {
            try {
                runApiArtifact(component, componentDir, spec, args.dryRun);
            } catch (err) {
                console.error(`[api] ✗  ${err.message}\n`);
                process.exit(1);
            }
            return;
        }

        const out = art.output(componentDir, component, kebab);
        const relOut = path.relative(process.cwd(), out);
        const exists = fs.existsSync(out);

        console.log(`[${key}] ${art.label}`);
        console.log(`  Output: ${relOut}${exists ? ' (exists)' : ''}`);
        console.log(
            `  Prompt（复制到 Cursor 发送）:\n  ${art.prompt(component).replace(/\n/g, '\n  ')}\n`
        );
    });

    console.log('--- 怎么用 ---');
    console.log('1. 上表命令打印 Prompt（api 除外，直接写文件）');
    console.log('2. 复制 Prompt → 粘贴到 Cursor 对话 → 人审 diff');
    console.log('3. demo：先填「设计意图」空白再发送；人审后手贴 index.md 的 <code src>');
    console.log('4. 改 props 后：brief → --artifact spec → impl → test → api →（按需）demo');
    console.log('');
}

main();
