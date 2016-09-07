var gulp = require("gulp");
var uglify = require("gulp-uglify");
var cleanCss = require("gulp-clean-css");
var less = require("gulp-less");

gulp.task("clean",function(){
	return gulp.src("style/csssrc/*.css")
		.pipe(cleanCss())
		.pipe(gulp.dest("style/css"));
})

gulp.task("uglify",function(){
	return gulp.src("script/jssrc/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("script/js"));
})

gulp.task("less",function(){
	return gulp.src("style/less/*.less")
		.pipe(less())
		.pipe(gulp.dest("style/csssrc"));
})

gulp.task("watch",function(){
	gulp.watch("script/jssrc/*.js",["uglify"]);
	gulp.watch("style/csssrc/*.css",["clean"]);
	gulp.watch("style/less/*.less",["less"]);
})

gulp.task("default",["less","clean","uglify","watch"]);