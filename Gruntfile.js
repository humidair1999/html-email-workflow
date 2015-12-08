module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('src/data/site.yml'),
    assemble: {
      options: {
        assets: '<%= site.assets_dir %>',
        layoutdir: 'src/layouts',
        layoutext: '.hbs',
        partials: ['src/partials/**/*.hbs']
      },
      site: {
        files: [
          {
            expand: true,
            cwd: 'src/pages/',
            src: ['*.hbs'],
            dest: 'dist/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['assemble']);
};