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
  await del(['lib','src/index.tsx']);
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
exports.default = series(clean, parallel(outputStyleTask, globalSass), globalCss);
