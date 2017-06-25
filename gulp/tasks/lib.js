const gulp = require('gulp');

gulp.task('bootstrap', function() {
	gulp.src('node_modules/bootstrap/dist/**/*')
  	.pipe(gulp.dest('public/lib/bootstrap/'));
});

gulp.task('font-awesome', function() {
	gulp.src('node_modules/font-awesome/**/*')
  	.pipe(gulp.dest('public/lib/font-awesome/'));
});

gulp.task('lib', ['bootstrap', 'font-awesome']);
