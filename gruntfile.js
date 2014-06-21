/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        debug: true,
        globals: {
          console: true,
          Chess: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: ['lib/**/*.js', '!lib/vendors/*']
      }
    },
    uglify: {
      dist: {
        files: {
          'build/lib/main.js': ['lib/main.js']
        }
      }
    },
    watch: {
      lessfiles: {
        files: 'less/*',
        tasks: ['less:development'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: '<%= jshint.scripts.src %>',
        tasks: ['jshint:scripts'],
        options: {
          livereload: true
        }
      }
    },
    less: {
      development: {
        files: {
          "css/main.css": "less/main.less"
        }
      },
      dist: {
        options: {
          compress: true,
          cleancss: true,
          ieCompat: false
        },
        files: {
          "build/css/main.css": "less/main.less"
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 0,
          hostname: '*',
          open: true,
          livereload: true
        }
      }
    },
    copy: {
      dist: {
        files: [
          {expand: true, src: ['index.html'], dest: 'build/'},
          {expand: true, src: ['lib/vendors/*'], dest: 'build/', filter: 'isFile'}
        ]
      }
    },
    clean: {
      dist: {
        src: ['./build']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['jshint', 'less:development', 'connect:server', 'watch']);
  grunt.registerTask('build', ['clean:dist', 'jshint', 'less:dist', 'uglify:dist', 'copy:dist']);

};
