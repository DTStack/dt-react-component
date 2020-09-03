const {src, dest,series} = require('gulp');
const through = require('through2');
const sass=require('gulp-sass');
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
  console.log('src/components/'+String(data)+'/*.scss')
  return src(['src/components/'+String(data)+'/*.scss'])
  .pipe(dest('lib/'+String(data)+'/style/'))
  .pipe(sass())
  .pipe(dest('lib/'+String(data)+'/style/'))
}
exports.default = outputStyleTask