var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var Q = require('q');
var path = require('path');
var del = require('del');
var fs = require('fs-extra');

var PATH = {
  targetJs : 'public/js',
  targetCss : 'public/css',
  bower : 'bower_components'
}

gulp.task('clean', function() {
  del.sync(['public/js/main.js']);
});

gulp.task('javascript', ['clean'], function() {
  var jsArray = ['jquery/dist/jquery.js', 
            'angular/angular.js', 
            'socket.io-client/socket.io.js'];
  var jsArrayFinal = [];
  jsArray.forEach(function(js) {
    jsArrayFinal.push(path.join(PATH.bower, js));
  });

  return gulp.src(jsArrayFinal)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js', {newLine: ';'}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(PATH.targetJs));
});

gulp.task('css', ['clean'], function() {
  
});

gulp.task('default', ['javascript', 'css']);