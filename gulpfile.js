const gulp = require("gulp");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const babel = require("gulp-babel");

const styles = "src/*.scss";
const scripts = "src/*.js";

gulp.task("styles", function() {
  return gulp
    .src(styles)
    .pipe(sass())
    .pipe(prefix("last 2 versions", "> 1%", "ie 8", "ie 7"))
    .pipe(gulp.dest("built"));
});

gulp.task("jsx", function() {
  return gulp
    .src(scripts)
    .pipe(
      babel({
        presets: ["es2015", "react"]
      })
    )
    .pipe(gulp.dest("built"));
});

gulp.task("watch", function() {
  gulp.watch(styles, ["styles"]);
  gulp.watch(scripts, ["jsx"]);
});

gulp.task("default", ["watch", "styles", "jsx"]);

gulp.task("build", ["styles", "jsx"]);
