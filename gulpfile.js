const { src, dest,parallel } = require('gulp');
const through = require('through2');
const sass=require('gulp-sass');
const concat = require('gulp-concat');
function outputStyleTask () {
  return src(['src/components/**/*.scss'])
  .pipe(through.obj(function (file, _, callback) {
    const pathName=file.relative.split('/')[0]
    this.push(pathName)
    callback()
  }))
  .on('data', (data) => {
    convertStyles(data)
  })
}
function convertStyles(data){
  return src(['src/components/'+String(data)+'/*.scss'])
  .pipe(dest('lib/'+String(data)+'/style/'))
  .pipe(sass())
  .pipe(dest('lib/'+String(data)+'/style/'))
}

//管道输出后会引用新位置，因此css和scss单独两个task
function globalSass(){
  return src('src/components/**/*.scss') //建议单独建个文件夹摆放，考虑到其他项目应用时也需相应更改，所以暂时先放打包文件根目录
  .pipe(concat('index.scss'))
  .pipe(dest('lib'))
}

function globalCss(){
  return src('src/components/**/*.scss')
  .pipe(concat('index.css'))
  .pipe(sass())
  .pipe(dest('lib'))
}
exports.default = parallel(outputStyleTask,globalCss,globalSass)