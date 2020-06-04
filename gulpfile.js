let gulp = require("gulp");

// gulp.task()
//   功能：定义任务
//   参数：
//     任务名：
//     回调函数：任务对应的功能(函数)，当在命令行中执行 gulp 任务名时，会调用该回调函数

gulp.task("copy-index",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    gulp.src("./*.html")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus"));
});

gulp.task("copy-php",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    gulp.src("./*.php")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus"));
});

gulp.task("copy-css",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    gulp.src("./css/*.css")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus\\css"));
});
gulp.task("copy-img",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    
gulgulp.src("./img/*.{img,png,svg,ico}")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus\\img"));
});gulp.task("copy-js",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    gulp.src("./js/*.js")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus\\js"));
});
gulp.task("copy-phph",async ()=>{
    //gulp.src(): 复制的来源，即源文件
    // pipe()：管道
    //  gulp.dest()：目的地，即：把源文件复制到什么地方    
    gulp.src("./php/*.php")
   .pipe(gulp.dest("d:\\phpstudy\\www\\OnePlus\\php"));
});


 gulp.task("watchall",async function(){
     // html
     gulp.watch("*.html", async function(){
         gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus"));
     });
     //css
     gulp.watch("css/**/*", async function(){
         gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\css"));
     });
     //js
     gulp.watch("js/**/*", async function(){
         gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\js"));
     });
     //img
     gulp.watch("img/**/*", async function(){
         gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\img"));
     });
     //php
     gulp.watch("*.php", async function(){
         gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus"));
     });
     // scss
     gulp.watch("scss/*.scss", async function(){
         gulp.src("scss/*.scss")
         .pipe(sass())
         .pipe(gulp.dest("D:\\OnePlus\\css"));
     });
 
     gulp.watch("./src/css/*.css",async ()=>{
         gulp.src("./src/css/*.css")
         .pipe(cssmin())
         .pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\js"));
     })
 
     //  合并并压缩
     gulp.watch("./js/*.js",async ()=>{
         gulp.src(["./js/index.js","./js/goodslist.js"])
         .pipe(concat("index.js"))
         .pipe(uglify())
         .pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\js"));
     })
 
     // es6转ES5
 
     gulp.watch("./js/index.js",async ()=>{
         gulp.src(["./js/index.js"])
         .pipe(babel({
             presets: ['@babel/env']
         }))
         .pipe(gulp.dest("D:\\phpStudy\\WWW\\OnePlus\\js"));
     })
 
