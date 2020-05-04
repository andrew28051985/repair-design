const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('css-min-create', function(cb){
  return gulp.src('./css/style.css')
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe (gulp.dest('./css'));
  cb();
});

gulp.task('start-gulp', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });  
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch('./css/*.css').on("change", browserSync.reload);
  gulp.watch('./css/*.css').on("change", gulp.parallel('css-min-create'));
});