var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

gulp.task('reload', function() {
  gulp.src('./src/*.html')
  .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('./src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/styles/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.html'], ['reload']);
  gulp.watch(['./src/**/*.js'], ['reload']);
  gulp.watch(['./src/styles/**/*.scss'], ['sass', 'reload']);
});

gulp.task('default', ['connect', 'watch']);
