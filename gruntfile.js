module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },
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
        browsers: ['last 3 versions', 'ie 8', 'ie 9']
      },
      single_file: {
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    },
    cssmin: {
      minify: {
        files: {
          'css/main.min.css': ['css/main.css']
        }
      }
    },
    watch: {
      configFiles: {
        files: ['gruntfile.js'],
        options: {
          reload: true
        }
      },
      scripts: {
        files: ['js/main.js'],
        tasks: ['uglify','shell:jekyllBuild'],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      styles: {
        files: ['_scss/**/*.scss'],
        tasks: ['sass','autoprefixer','cssmin','shell:jekyllBuild'],
        options: {
          spawn: false,
          atBegin: true
        }
      },
      jekyll: {
        files: ['**/*.html','_posts/**/*.md','!_site/**/*.html','**/*.yml'],
        tasks: ['shell:jekyllBuild'],
        options: {
          spawn: false
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('serve', ['shell:jekyllServe']);

};