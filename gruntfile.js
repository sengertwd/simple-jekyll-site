module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    uglify: {
      // options: {
      //   banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      build: {
        src: 'js/main.js',
        dest: 'js/main.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/main.css': '_scss/main.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    watch: {
      scripts: {
        files: ['js/main.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      styles: {
        files: ['_scss/**/*.scss'],
        tasks: ['sass','autoprefixer'],
        options: {
          spawn: false,
          atBegin: true
        }
      }
      // jekyll: {}
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};