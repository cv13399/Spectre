var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

function emitError (error) {
  console.log(error.toString())
  this.emit('end')
}

var config = {
	stylePath: 'assets/styles/*.scss'
}

gulp.task('sass',function() {
	gulp.src(config.stylePath)
	.pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', emitError)
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('assets/styles/css/'))
});

gulp.task('patterns', function() {
    gulp.watch(config.stylePath, ['sass']);
});



gulp.task('compile',['sass']);
gulp.task('watch',['sass','patterns']);


gulp.task('default',['watch']);