
//导入gulp插件
var gulp = require("gulp");
//引入其他插件
var rename = require("gulp-rename");//重命名  需要参数
var uglify = require("gulp-uglify");//压缩js插件
var concat = require("gulp-concat");//文件合并  需要参数
var cssmin = require("gulp-cssmin");//压缩css文件
var imagemin = require("gulp-imagemin");//压缩图片文件
var sass = require("gulp-sass");//将sass文件转成css文件

//布置任务   将js下的sport6.js 压缩     
//思路 ：找到源文件 --- 压缩 --- 压缩后的文件送到目标目录里
gulp.task("uglify",function(){
	return gulp.src( "js/sport6.js" )  
			   .pipe( uglify() )
			   .pipe( gulp.dest( "dest" ) );
})

// 布置任务  ：  将js下的sport6.js 压缩       并重命名为  sport.min.js
//思路 ：找到源文件 --- 压缩 ---重命名 --- 压缩后的文件送到目标目录里
gulp.task("rename",function(){
	return gulp.src( "js/sport6.js" )
			   .pipe( uglify() )
			   .pipe( rename("sport.min.js") )
			   .pipe( gulp.dest( "js" ) );
})


//布置任务   将css下的三个css文件合并   并重命名为  all.css
gulp.task("concat",function(){
	return gulp.src( "css/*.css" )
	 		   .pipe( concat("all.css") )
	 		   .pipe( gulp.dest( "css" ) );
})

//将css下的all.css 压缩 并重命名 为 all.min.css
gulp.task("cssmin",function(){
	return gulp.src("css/all.css")
			   .pipe( cssmin() )
			   .pipe( rename("all.min.css") )
			   .pipe( gulp.dest("css") )
}) 

//将img下的图片压缩  并存入到dest目录下的img目录下
gulp.task( "imgmin",function(){
	return gulp.src( "img/*" )
			   .pipe( imagemin() )
			   .pipe( gulp.dest( "dest/img" ) );
} )


//将css中的sass文件转成css文件     并重命名为index2.css
gulp.task("sass",function(){
	return gulp.src( "scss/*.scss" )
			   .pipe( sass() )
			   .pipe( gulp.dest("css") )
})

//监听
gulp.task("watch",function(){
	return gulp.watch("scss/*.scss",["sass"])
})
