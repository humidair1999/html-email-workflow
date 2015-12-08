var assemble = require('assemble');
var extname = require('gulp-extname');

assemble.task('html', function() {
  assemble.src('templates/*.hbs')
    .pipe(extname())
    .pipe(assemble.dest('dist/'));
});

assemble.task('default', ['html']);