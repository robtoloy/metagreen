"use strict";
// G U L P - P C K G S
const gulp = require('gulp'),
 			minify = require('gulp-clean-css'),
 			autoprefixer = require('gulp-autoprefixer'),
 			less = require('gulp-less'),
 			uglify = require('gulp-uglify'),
 			concat = require('gulp-concat'),
 			pump = require('pump'),
 			sourcemaps = require('gulp-sourcemaps'),
      babel = require('gulp-babel');

// P A T H S
const dirs = {
  src: 'src',
  dest: 'dist',
  prod: 'client'
};
const lesspath = {
	dest: `${dirs.dest}/css`,
  min: `${dirs.dest}/css/*.css`
};
const jspath = {
  dest: `${dirs.dest}/js`,
  min: `${dirs.dest}/js/*.js`
}
// COMPILE + PREFIX + MINIFY ~
gulp.task('less', cb => {
  pump([
    gulp.src(dirs.src+'/m.less'),
    sourcemaps.init(),
    less(),
    autoprefixer(["last 8 version", "> 1%", "ie 8", "ie 7"], {cascade: true}),
    minify({compatibility: 'ie7'}),
    sourcemaps.write('.'),
    gulp.dest(lesspath.dest)
  ], cb);
});
// CONCAT ALL CSS
gulp.task('csscat', ()=>{
  gulp.src(lesspath.min)
  .pipe(concat('m.all.css'))
  .pipe(gulp.dest(dirs.prod));
})
// TRANSPILE + MINIFY + CONCAT ~
gulp.task('ugly', cb => {
	pump([
		gulp.src([dirs.src+'/jquery.js', dirs.src+'/bootstrap.js', dirs.src+'/m.js']),
    sourcemaps.init(),
    babel({presets: ['es2015']}),
		uglify(),
    sourcemaps.write('.'),
		gulp.dest(jspath.dest)
	], cb);
});
// CONCAT ALL JS
gulp.task('jscat', ()=>{
  gulp.src(jspath.min)
  .pipe(concat('m.all.js'))
  .pipe(gulp.dest(dirs.prod));
});
// WATCH + RUN TASKS ON SAVE
gulp.task('watch', ()=>{
	gulp.watch('src/*.less', ['less', 'csscat']);
	gulp.watch('src/*.js', ['ugly', 'jscat']);
});
// DEFAULT
gulp.task('default', ['less', 'ugly', 'csscat', 'jscat', 'watch']);
