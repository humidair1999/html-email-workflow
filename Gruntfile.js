module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        layoutdir: 'src/layouts',
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