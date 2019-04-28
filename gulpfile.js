'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 12 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function () {
  gulp.run('scss');
  gulp.watch('./src/scss/**/*.scss', ['scss']);
});


/* USE this task for dev mode (no-prefixes) */
gulp.task('scss-dev', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 1 versions'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('watch-dev', function () {
  gulp.run('scss-dev');
  gulp.watch('./src/scss/**/*.scss', ['scss']);
});
