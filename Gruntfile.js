module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'public/js/jquery-1.9.1.js',
                    'public/js/bootstrap.js',
                    'public/js/dust-core-1.2.4.js',
                    'public/js/compiled_templates.js',
                    'public/js/main.js'
                ],
                dest: 'public/js/built.js'
            }
        },

        uglify: {
            options: {
                mangle: true
            },
            my_target: {
                files: {
                    'public/js/built.min.js': ['public/js/built.js']
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'public/css/buit.min.css': ['public/css/bootstrap.css', 'public/css/bootstrap-responsive.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
};