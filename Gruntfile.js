'use strict';

var request = require('request');

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  var reloadPort = 35729, files;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app.js',
      }
    },
    watch: {
      options: {
        nospawn: true,
        livereload: reloadPort,
      },
      js: {
        files: [
          'app.js',
          'api/**/*.js',
          'config/*.js',
        ],
        tasks: ['develop', 'delayed-livereload'],
      },
    },
  });

  grunt.registerTask('default', ['develop', 'watch']);
};
