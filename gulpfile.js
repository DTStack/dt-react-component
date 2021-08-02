const { src, dest, parallel, series } = require('gulp');
const fs = require('fs');
const through = require('through2');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');
const ts = require('gulp-typescript');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const mergeStream = require('merge-stream');
const ENV = process.env.NODE_MODULE_ENV;

/**
 * TODO: When the packaging fails, the scene needs to be restored
 */
/**

 * existStyleCatalogName ---- The name of the component catalog where the style exists
 * componentCatalogName ---- All component catalog names
 * folderName ---- JavaScript temporary folder name
 */
let existStyleCatalogName = [];
let componentCatalogName = [];
const folderName = '.temporary_files';
const basePath = 'src/components/';

function difference(array, arrCompare) {
  return array.concat(arrCompare).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  });
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function writeStyleFile(catalogArr) {
  for (let catalogName of catalogArr) {
    fs.writeFile(
      `${basePath}${catalogName}/style.scss`,
      '',
      { flag: 'wx' },
      (err) => {
        if (err) {
          throw err;
        }
      },
    );
  }
}

function delStyleFile(catalogArr) {
  for (let catalogName of catalogArr) {
    del([`${basePath}${catalogName}/style.scss`]);
  }
}

/**
 * traverse files
 * @param isDelete Distinguish between write and delete style file
 */
function traverseExistStyleFile(isDelete) {
  return src([`${basePath}*/*.scss`])
    .pipe(
      through.obj(function (file, enc, callback) {
        isExist = Boolean(file.contents.toString());
        if (isExist) {
          existStyleCatalogName.push(file.relative.split('/')[0]);
        }
        callback();
      }),
    )
    .on('end', async function () {
      const noStyleComp = difference(
        unique(componentCatalogName),
        unique(existStyleCatalogName),
      );
      if (isDelete) {
        delStyleFile(noStyleComp);
        console.log('delStyleFile exec end');
      } else {
        await writeStyleFile(noStyleComp);
        await outputStyleTask(componentCatalogName);
        console.log('writeStyleFile exec end');
      }
    });
}

function traverseComponent() {
  console.warn('Do not edit the source file when the project is compiled !!!');
  return src([`${basePath}*/`, `!${basePath}utils/`]) // exclude utils/
    .pipe(
      through.obj(function (file, enc, callback) {
        componentCatalogName.push(file.relative.split('/')[0]);
        callback();
      }),
    )
    .on('end', function () {
      console.log('traverseComponent exec end ~');
    });
}

function mergeTraverseStream(type) {
  return mergeStream(traverseComponent(), traverseExistStyleFile(type));
}

function generateStyleFile() {
  return mergeTraverseStream(false);
}

function cleanUselessStyleFile() {
  return mergeTraverseStream(true);
}

async function descriptionDoc() {
  await fs.mkdir(folderName, { recursive: false }, (err) => {
    if (err) throw err;
  });
  await fs.writeFile(
    `${folderName}/index.tsx`,
    `import './style.scss';`,
    { flag: 'w' },
    (err) => {
      if (err) {
        throw err;
      }
      console.log(
        `Do not delete the ${folderName} until the compilation is complete`,
      );
    },
  );
  return src(`${folderName}/index.tsx`)
    .pipe(
      ts({
        declaration: true,
        target: 'ES5',
        module: ENV === 'esm' ? 'es6' : 'commonjs',
        skipLibCheck: true,
        allowSyntheticDefaultImports: true
      }),
    )
    .pipe(dest(`${folderName}/`));
}

function outputStyleTask(componentCatalogName) {
  if (
    Object.prototype.toString.call(componentCatalogName) !== '[Object Array]' &&
    componentCatalogName.length !== 0
  ) {
    componentCatalogName.map((componentName) => {
      convertStyles(componentName);
    });
    return Promise.resolve('Components style file output completed');
  }
  throw new TypeError('Function parameter must be a non-empty sequence');
}

function globalSass() {
  return src(`${basePath}**/*.scss`)
    .pipe(concat('index.scss'))
    .pipe(dest(ENV + '/style'));
}

async function clean(cb) {
  await cleanUselessStyleFile();
  await del([ENV, '.temporary_files']);
  await cb();
}

function globalCss() {
  del(folderName);
  return src(ENV + '/**/*.scss')
    .pipe(concat('index.css'))
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(dest(ENV + '/style'));
}

function convertStyles(data) {
  return mergeStream(
    outputForCss(data),
    outputForSaSS(data, 'index.js'),
    outputForSaSS(data, 'index.d.ts'),
    outputForCssFile(data),
  );
}

function outputForSaSS(data, fileName) {
  return src(`${folderName}/${fileName}`).pipe(
    dest(ENV + '/' + String(data) + '/style/'),
  );
}

function outputForCssFile(data) {
  return src(`${folderName}/index.tsx`)
    .pipe(rename('css.tsx'))
    .pipe(babel())
    .pipe(dest(ENV + '/' + String(data) + '/style/'));
}

function outputForCss(data) {
  return src([`${basePath}` + String(data) + '/*.scss'])
    .pipe(dest(ENV + '/' + String(data) + '/style/'))
    .pipe(sass())
    .pipe(dest(ENV + '/' + String(data) + '/style/'));
}

exports.default = series(
  clean,
  parallel(generateStyleFile, descriptionDoc),
  globalSass,
  globalCss,
  cleanUselessStyleFile,
);
