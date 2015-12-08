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
            src: ['**/*.hbs'],
            dest: 'dist/'
          }
        ]
      }
    },
    watch: {
      src: {
        files: ['src/layouts/*.hbs', 'src/pages/**/*.hbs', 'src/partials/**/*.hbs'],
        tasks: ['newer:assemble'],
        options: {
          livereload: true
        },
      },
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['watch']);
};