const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function img() {
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function index() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.parallel(styles, img, index);
exports.img = img;

exports.watch = function () {
    gulp.watch('./src/scss/*.scss', gulp.parallel(styles));
};