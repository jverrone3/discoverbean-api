var gulp = require('gulp');
var util = require('gulp-util');
var elm = require('gulp-elm');

gulp.task('elm-init', elm.init);

gulp.task('elm', ['elm-init'], function() {
    return gulp.src('public/src/**/*.elm')
        .pipe(elm())
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('copy-html', function() {
    return gulp.src('public/src/**/*.html')
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('copy-css', function() {
    return gulp.src('public/src/**/*.css')
        .pipe(gulp.dest('public/dist/'));
});

gulp.task('copy-font', function() {
    return gulp.src('public/src/font/**')
        .pipe(gulp.dest('public/dist/font/'));
});

gulp.task('copy-vendor', function() {
    return gulp.src('public/src/vendor/**')
        .pipe(gulp.dest('public/dist/vendor'));
});

gulp.task('build', ['elm', 'copy-html', 'copy-css', 'copy-font', 'copy-vendor']);

gulp.task('default', ['build']);
