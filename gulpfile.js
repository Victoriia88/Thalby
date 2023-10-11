const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");

gulp.task("sass", function () {
  return gulp.src("./scss/*.scss").pipe(sass()).pipe(gulp.dest("./dist/css"));
});

gulp.task("scripts", function () {
  return gulp
    .src("./js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
});
gulp.task("images", function () {
  return gulp
    .src("./images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
});

gulp.task("watch", function () {
  gulp.watch("./scss/*.scss", gulp.series("sass"));
  gulp.watch("./js/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.series("sass", "scripts", "images", "watch"));
gulp.task("sass", function () {
  console.log("Compiling SASS...");
  return gulp.src("./scss/*.scss").pipe(sass()).pipe(gulp.dest("./dist/css"));
});
