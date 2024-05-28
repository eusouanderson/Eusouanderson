const gulp = require('gulp');
const log = require('fancy-log');
const { stream: critical } = require('critical');

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  return gulp
    .src('*.html', { base: './' })
    .pipe(
      critical({
        base: 'templates/',
        inline: true,
        css: ['static/assets/css/eusouanderson.css', 'static/assets/css/eusouanderson.css'],
      })
    )
    .on('error', (err) => {
      log.error(err.message);
    })
    .pipe(gulp.dest('templates'));
});
