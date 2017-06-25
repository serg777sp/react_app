const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const path = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 15 versions'] });

gulp.task('less', function () {
  return gulp.src('./src/less/style.less')
		.pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.init()))
    .pipe(less({
      paths: [ path.join(__dirname, 'src', 'less') ],
			plugins: [ autoprefix ]
    }))
			.on('error', function (err) {
				gutil.log(err);
				this.emit('end');
			})
		.pipe(gulpif(process.env.NODE_ENV === 'development', sourcemaps.write()))
    .pipe(gulp.dest('./public/css'));
});
