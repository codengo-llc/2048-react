let gulp = require('gulp');
let sass = require('gulp-sass');
let prefix = require('gulp-autoprefixer');
let babel = require('gulp-babel');

let styles = 'src/*.scss';
let scripts = 'src/*.js';

gulp.task('styles', function () {
  return gulp.src(styles)
    .pipe(sass())
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'ie 7'))
    .pipe(gulp.dest('built'));
});

gulp.task('jsx', function () {
  return gulp.src(scripts)
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(gulp.dest('built'));
});

gulp.task('watch', function () {
  gulp.watch(styles, ['styles']);
  gulp.watch(scripts, ['jsx']);
});

gulp.task('default', ['watch', 'styles', 'jsx']);

gulp.task('build', ['styles', 'jsx']);
