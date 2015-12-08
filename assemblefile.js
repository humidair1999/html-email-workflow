var assemble = require('assemble');
var extname = require('gulp-extname');

assemble.layouts('layouts/*.hbs');
assemble.option('layout', 'default');

assemble.task('html', function() {
  assemble.src('templates/*.hbs')
    .pipe(assemble.renderFile())
    .pipe(extname())
    .pipe(assemble.dest('dist/'));
});

assemble.task('default', ['html']);