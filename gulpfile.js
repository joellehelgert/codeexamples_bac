let gulp = require('gulp'),
  connect = require('gulp-connect')
  gulpSequence = require('gulp-sequence')

gulp.task('watch:html', () => {
  gulp.watch('./**/*.html', ['reload'])
})

gulp.task('watch:css', () => {
  gulp.watch('./**/*.css', ['reload'])
})

gulp.task('reload', () => {
  connect.reload()
})

gulp.task('connect', () => {
  return connect.server({
    root: './',
    port: 1337,
    livereload: true
  })
})

gulp.task('default', (cb) => {
  gulpSequence(
    'connect',
    ['watch:css', 'watch:html'],
    cb
  )
})
