module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "dist/css/styles.css": "src/scss/styles.scss",
        },
      },
    },
    watch: {
      sass: {
        files: ["src/scss/*.scss"],
        tasks: ["sass"],
      },
      copy: {
        files: ["src/js/*.js"],
        tasks: ["copy"],
      },
    },
    uglify: {
      js: {
        files: {
          "dist/js/script.js": "src/js/script.js",
        },
      },
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "src/js",
            src: ["script.js"],
            dest: "dist/js/",
          },
        ],
      },
    },
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  // Register Tasks
  grunt.registerTask("convert-sass", "sass");
  grunt.registerTask("default", ["uglify", "sass", "watch", "copy"]);
};