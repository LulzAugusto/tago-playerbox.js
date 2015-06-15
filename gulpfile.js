'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    del = require('del');

gulp.task('default', ['css', 'js'], function() {

});

gulp.task('css', ['clean-css'], function() {
    return gulp
        .src('src/*.css')
        .pipe(gulp.dest('dist'))
        .pipe($.minifyCss())
        .pipe($.rename('tago-playerbox.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('js', ['clean-js'], function() {
    return gulp
        .src('src/*.js')
        .pipe(gulp.dest('dist'))
        .pipe($.sourcemaps.init())
            .pipe($.uglify())
            .pipe($.rename('tago-playerbox.min.js'))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean-js', function() {
    del(['dist/*.js', 'dist/*.map']);
});

gulp.task('clean-css', function() {
    del(['dist/*.css', 'dist/*.map']);
});

