const { src, dest, parallel, series, task } = require('gulp');
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

function difference(array, arrCompare) {
  return array.concat(arrCompare).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  });
}
function unique (arr) {
  return Array.from(new Set(arr));
}
/**
 * existStyleCatalogName ---- The name of the component catalog where the style exists
 * componentCatalogName ---- All component catalog names
 */
let existStyleCatalogName = [];
let componentCatalogName = [];

function writeStyleFile(catalogArr) {
  for (let catalogName of catalogArr) {
    fs.writeFile(`src/components/${catalogName}/style.scss`, "", { 'flag': 'wx' }, (err) => {
      if (err) {
        throw err;
      }
    })
  }
}

function delStyleFile(catalogArr) {
  for (let catalogName of catalogArr) {
    del([`src/components/${catalogName}/style.scss`])
  }
}
/**
 * traverse files
 * @param isDelete Distinguish between write and delete style file
 */
function traverseExistStyleFile(isDelete) {
  return src(['src/components/*/*.scss'])
    .pipe(through.obj(function (file, enc, callback) {
      isExist = Boolean(file.contents.toString())
      if (isExist) {
        existStyleCatalogName.push(file.relative.split('/')[0]);
      }
      callback();
    })).on('end', function () {
      const noStyleComp = difference(unique(componentCatalogName), unique(existStyleCatalogName));
      if (isDelete) {
        delStyleFile(noStyleComp)
        console.log('delStyleFile exec end')
      } else {
        writeStyleFile(noStyleComp)
        console.log('writeStyleFile exec end')
      }
    })
}
function traverseComponent() {
  console.warn('Do not edit or modify the source file when the project is compiled !!!')
  return src(['src/components/*/', '!src/components/utils/']) // exclude utils/
    .pipe(through.obj(function (file, enc, callback) {
      componentCatalogName.push(file.relative.split('/')[0]);
      callback();
    })).on('end', function () {
      console.log('traverseComponent exec end ~')
    })
}

function mergeTraverseStream (type) {
  return mergeStream(traverseComponent(), traverseExistStyleFile(type))
}

function generateStyleFile () {
  return mergeTraverseStream(false)
}

function cleanUselessStyleFile() {
  return mergeTraverseStream(true)
}
/**
 * TODO optimize outputStyleTask
 * outputStyleTask Function Time-consuming to execute..
 */
function outputStyleTask() {
  fs.writeFile('src/index.tsx',"import './style.scss';",{'flag':'a'},(err)=>{
    if(err){
      throw err;
    }
  })
  return src(['src/components/**/*.scss'])
    .pipe(
      through.obj(function(file, _, callback) {
        const pathName = file.relative.split('/')[0];
        this.push(pathName);
        callback();
      }),
    )
    .on('data', data => {
      convertStyles(data);
      jsForCss(data);
      jsForScss(data);
    });
}

function convertStyles(data) {
  return src(['src/components/' + String(data) + '/*.scss'])
    .pipe(dest('lib/' + String(data) + '/style/'))
    .pipe(sass())
    .pipe(dest('lib/' + String(data) + '/style/'));
}

//管道输出后会引用新位置，因此css和scss单独两个task
function globalSass() {
  return src('src/components/**/*.scss') //建议单独建个文件夹摆放，考虑到其他项目应用时也需相应更改，所以暂时先放打包文件根目录
    .pipe(concat('index.scss'))
    .pipe(dest('lib/style'));
}
async function clean(cb) {
  await cleanUselessStyleFile()
  await del(['lib', 'src/index.tsx']);
  await cb();
}
function globalCss() {
  del(['src/index.tsx'])
  return src('lib/**/*.scss')
    .pipe(concat('index.css'))
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(cleanCSS({ compatibility: 'ie11' }))
    .pipe(dest('lib/style'));
}
function jsForScss(data) {
  return src('src/index.tsx')
    .pipe(ts({ declaration: true, target: 'ES5' }))
    .pipe(dest('lib/' + String(data) + '/style/'));
}
function jsForCss(data) {
  return src('src/index.tsx')
    .pipe(rename('css.tsx'))
    .pipe(babel())
    .pipe(dest('lib/' + String(data) + '/style/'));
}
exports.default = series(clean, generateStyleFile, parallel(outputStyleTask, globalSass), globalCss, cleanUselessStyleFile);