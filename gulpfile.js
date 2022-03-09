const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');
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


I was looking at the morphsvg plugin (that Dave mentioned re: mud homepage) as a way of morphing the big numbers.  Could carry on with that? 