const gulp = require('gulp');
const watchProvider = require('../utils/watchProvider');

gulp.task("watch", watchProvider([{
	path: ["./src/less/**/*.less"],
	task: ["less"]
}]));
