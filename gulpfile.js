const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const watch = require('gulp-watch')
const sourcemaps = require('gulp-sourcemaps')
const notify = require('gulp-notify')
const plumber = require('gulp-plumber')

// Задача для старта сервера
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './',
    },
  })
})

gulp.task('watch', function () {
  watch(['index.html', 'src/css/**.css', 'src/js/**.js'], gulp.parallel(browserSync.reload))
  watch('src/scss/*.scss', gulp.parallel('sass'))
})

gulp.task('sass', function (callback) {
  return gulp
    .src('src/scss/style.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError(function (err) {
          return {
            title: 'Styles',
            sound: false,
            message: err.message,
          }
        }),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('src/css/'))
  callback()
})

gulp.task('default', gulp.parallel('server', 'watch', 'sass'))
