'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss      = require('gulp-postcss');
// var autoprefixer = require('autoprefixer');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR', "ie 8", "ie 7"]
  // "last 1 version", "> 1%", "ie 8", "ie 7"
};

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./css'))
    .pipe(sassdoc())
    .resume();
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

// gulp.task('autoprefixer', function () {
//   return gulp.src('./css/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer() ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css'));
// });

gulp.task('default', ['sass', 'sass:watch']);
