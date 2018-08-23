var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssImport = require('gulp-cssimport');


gulp.task('watch', function() {

    browserSync.init({
      server: {
        baseDir: 'app'
      }
      
    });
  
    watch('./app/index.html', function() {
      browserSync.reload();
    });
  
    watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
    });
  
  });

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, autoprefixer]))
      .on('error', function(errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'));
  });
