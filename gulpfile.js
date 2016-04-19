var gulp=require("gulp");
var connect=require("gulp-connect");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass=require('gulp-sass');


gulp.task("serverTask",function(){
    connect.server({
    	root : 'public',
    	livereload : true
    });
});
gulp.task('browserifyTask',function(){
	browserify("./app/app.js")
	.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./public/js/'));
});
gulp.task('cssTask',function(){
     gulp.src('./app/css/scss/**/*.scss')
     .pipe(sass().on('error',sass.logError))
     .pipe(gulp.dest('./public/css'));
});
gulp.task('watchTask',function(){
	//when we are wathing all the js files any change in js file will lead to run the browserify task
	gulp.watch(['./app/**/*.js'],['browserifyTask']);
	//now watching scss file for any changes
	gulp.watch(['./app/css/scss/**/*scss'],['cssTask']);

});




gulp.task("default",['serverTask','watchTask','browserifyTask','cssTask']);
