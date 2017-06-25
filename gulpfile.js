const gulp = require('gulp');

require('./gulp/tasks/env');
require('./gulp/tasks/lib');
require('./gulp/tasks/less');
require('./gulp/tasks/clean');
require('./gulp/tasks/webpack');
require('./gulp/tasks/watch');
require('./gulp/tasks/browserSync');


gulp.task('build', ['production', 'clean', 'lib', 'less', 'webpack']);
gulp.task('develop', ['development', 'clean', 'less', 'watch', 'webpack', 'browser-sync']);
gulp.task('default', ['develop']);
