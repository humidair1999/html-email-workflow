module.exports = function(grunt) {
  grunt.initConfig({
    assemble: {
      options: {
        layoutdir: 'layouts'
      },
      site: {
        files: [
          { expand: true, cwd: 'templates/', src: ['*.hbs'], dest: 'dist/' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('assemble' );
  grunt.registerTask('default', ['assemble']);
};