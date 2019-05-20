var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function (done) {
    webpack(require('../../webpack.config'), function (err, stats) {
        if (err) {
            console.log(err.toString());
        }
        // console.log(stats.toString());
        // console.log("Mission completed!");
    });
    done();
});