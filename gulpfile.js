const {src, dest, watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });  
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch('./css/*.css').on("change", browserSync.reload);
  watch('./css/*.css').on("change", cssmin);
  watch('./js/*.js').on("change", browserSync.reload);  
};

function cssmin() {  
  return src("./css/style.css")
      .pipe(cssnano())
      .pipe(rename({suffix: ".min"}))
      .pipe (dest("./css"));
};

function serveSass() {
  return src("./sass/*.sass")
      .pipe(sass())
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;