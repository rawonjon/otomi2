const gulp = require('gulp');
// const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean-css');

gulp.task('sass', function() {
    return gulp.src('dev/scss/custom.scss')
        .pipe(sass())
        .pipe(clean({ compatibility: 'ie11'}))
        .pipe(gulp.dest('assets'));
});


gulp.task('watch', function() {
    gulp.watch('dev/scss/**/*.scss', gulp.series('sass'))
});

