const gulp = require('gulp');
const babel = require('gulp-babel');

// 将es6用babel编译一下，否则import、export语法无法执行，除非用mjs
const compile = (cb) => {
  return gulp
    .src([
      'src/**.js',
      'src/**/**.js',
    ])
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: []
    }))
    .pipe(gulp.dest('lib'));
}

// 静态资源拷贝
const copy = (cb) => {
  return gulp.src([
    'src/index.html',
    'src/**.less',
    'src/**/**.less',
    'src/**.scss',
    'src/**/**.scss',
  ]).pipe(gulp.dest('lib'))
}

const start = () => {
  const _start = require('./lib/bin/start').default
  _start();
}
// for test...
// const first = (cb) => {
//   setTimeout(() => {
//     console.log(111)
//     cb()
//   }, 3000)
// }

// const second = (cb) => {
//   setTimeout(() => {
//     console.log(222)
//     cb()
//   }, 4000)
// };

// const third = cb => {
//   setTimeout(() => {
//     console.log(333)
//     cb()
//   }, 1000)
// }

const watch = (cb) => {
  gulp.watch([
    'src/**', 'src/**/**',
  ], gulp.parallel(copy, compile))
  cb()
}

const defaultTask = gulp.series(
  gulp.parallel(copy, compile),
  watch,
  start,
)

gulp.task('compile', compile);
gulp.task('copy', copy);
gulp.task('prebuild', gulp.parallel(copy, compile));
gulp.task('watch', watch);
gulp.task('start', defaultTask);

exports.default = defaultTask