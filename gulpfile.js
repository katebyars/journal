var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
var jshint = require('gulp-jshint');

gulp.task('myTask', function(){
  console.log('hello gulp');
});

gulp.task('jsBrowserify', function(){
  return browserify({entries: ['./js/journal-interface.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});
// 
// gulp.task('jsBrowserify', ['concatInterface'], function(){
//   return browserify({entries: ['./tmp/allConcat.js']})
//   .bundle()
//   .pipe(source('app.js'))
//   .pipe(gulp.dest('./build/js'));
// });

gulp.task("minifyingScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyingScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
