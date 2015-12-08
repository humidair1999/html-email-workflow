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
          dest: 'compiled/'
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
    },
    juice: {
      dist: {
        options: {},
        files: [
        {
          expand: true,
          cwd: 'compiled/',
          src: ['**/*.html'],
          dest: 'inlined/'
        },
        ],
      },
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-juice-email');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('inline', ['juice']);
};