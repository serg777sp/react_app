const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './public'
		},
		files: "./public/**/*",
		notify: true
	});
});
