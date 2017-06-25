const gulp = require('gulp');
const gulit = require('gulp-util');
const gulpWebpack = require('gulp-webpack');
const webpack2 = require('webpack');

gulp.task('webpack', function(callback) {
	return gulp.src('src/scripts/*.jsx')
  	.pipe(gulpWebpack(require('../../webpack.config'), webpack2))
			.on('error', function (err) {
				gulit.log(err);
	    })
  	.pipe(gulp.dest('public/js/'));
});