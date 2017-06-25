const gulp = require('gulp');

gulp.task('production', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('development', function() {
    return process.env.NODE_ENV = 'development';
});
