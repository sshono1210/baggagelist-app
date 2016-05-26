"use strict"
/**
 * common installers
 * npm i gulp gulp-load-plugins gulp-plumber gulp-notify run-sequence --save
 */
var gulp = require("gulp");
var runSequence = require("run-sequence");

var src = "./frontend/";
if(process.env.APP_MODE=="build"){
    var dist = "./build/";
}else{
    var dist = "./public/";
}

var {sass,jade,webpack,browserSync} =
    require("./frontend/libs/gulp/gulp-tasks.js")({src,dist});


gulp.task("sass",sass().bourbon);
gulp.task("watch:sass",()=>{
    gulp.watch(sass().target,["sass"])
});

gulp.task("jade",jade().build);
gulp.task("watch:jade",()=> {
    gulp.watch(jade().target, ["jade"])
});

gulp.task("webpack",webpack());
gulp.task("watch:webpack",()=>{
    gulp.watch(webpack().target,["webpack"]);
});

gulp.task("server",browserSync().start);

gulp.task("watch",[
    "watch:sass",
    "watch:jade",
    "watch:webpack",
]);

gulp.task("build",function(cb){
    runSequence([
        "sass",
        "jade",
        "webpack"
    ],cb);
});

gulp.task("default",["watch"])

