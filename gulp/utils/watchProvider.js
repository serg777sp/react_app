const gulp = require('gulp');

module.exports = function(watchable) {
	return function() {
		for (var i in watchable) {
			gulp.watch(watchable[i].path, watchable[i].task);
		}
	}
};
