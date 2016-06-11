
'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const postcss = require('gulp-postcss');
const precss = require('precss');
const csswring = require('csswring');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');


// Server tasks
// ===========
gulp.task('server', () => {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('server:reload', () => {
  return gulp.src('**/*.html')
          .pipe(connect.reload());
});






// Postcss task
// ============
gulp.task('postcss', () => {
  const plugins = [
    precss(),
    csswring()
  ];
  return gulp.src('src/angular-cards.css')
          .pipe(postcss(plugins))
          .pipe(gulp.dest('dist/'))
          .pipe(connect.reload());
});







// JavaScript tasks
// ===============
gulp.task('js:jshint', () => {
    return gulp.src('src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('js:uglify', ['js:jshint'], () => {
  return gulp.src('src/angular-cards.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/'))
          .pipe(connect.reload());
});






// Watch files
// ===========
gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['js:uglify']);
  gulp.watch('src/**/*.css', ['postcss']);
  gulp.watch('index.html', ['server:reload']);
});





// Default task
// ============
gulp.task('default', ['server', 'postcss', 'js:uglify', 'watch']);
