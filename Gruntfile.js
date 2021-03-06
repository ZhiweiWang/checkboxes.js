module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.author %> | <%= grunt.template.today("yyyy-mm-dd") %> | <%= pkg.license %> */\n'
            },
            build: {
                src: 'src/jquery.checkboxes.js',
                dest: 'build/jquery.checkboxes.min.js'
            }
        },
        bower: {
            install: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['uglify']);

};