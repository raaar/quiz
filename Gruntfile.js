module.exports = function(grunt) {

  var port = 10000;

  "use strict";
  
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['sass/*.scss', 'sass/*/*scss'],
        tasks: ['compass']
      },
      scripts: {
        files: ['js/script.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
    },

    //Non PHP server
    connect: {
      server: {
        options: {
          port: port,
          hostname: 'localhost',
          keepalive: false,
          //debug: true
          livereload: true,
          base: ''
        }
      }
    },

    php: {
      server: {
        options: {
          port: port,
          hostname: 'localhost',
          keepalive: false,
          //debug: true
          livereload: port,
          base: ''
        }
      },
    },

    compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'sass',
            cssDir: 'css',
            environment: 'production'
          }
        },
        dev: {                    // Another target
          options: {
            sassDir: 'sass',
            cssDir: 'css'
          }
        }
      }
  });

  grunt.registerTask('serve', [ 'connect', 'watch' ]);

};