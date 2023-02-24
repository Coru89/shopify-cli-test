'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');

// SASS
gulp.task('sass', () => {
    return gulp.src('styles/custom-styles.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest('assets'))
});

gulp.task('watch', () => {
    gulp.watch('styles/**/*.scss', gulp.series('sass'));
});
