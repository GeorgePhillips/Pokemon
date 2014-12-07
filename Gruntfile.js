module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssc: {
            build: {
                options: {
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'build/application.css': [
                        'build/animate.css',
                        'build/layout.css',
                        'build/interface.css',
                        'build/battle.css'
                    ]
                }
            }
        },

        cssmin: {
            build: {
                src: 'build/application.css',
                dest: 'build/application.min.css'
            }
        },

        compass: {
            build: {
                options: {
                    imagesPath: 'assets',
                    sassDir: 'src/sass',
                    cssDir: 'build/',
                    environment: 'production'
                }
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['index.html']
            }
        },

        jst: {
		    build: {
                options: {
                    processName: function(filePath) {
                        console.log(filePath);
                        return filePath.replace(/^src\/templates\//, '').replace(/\.html$/, '');
                    }
                },
		        files: {
		            'build/templates.js': ['src/templates/**/*.html']
		        }
		    }
		},

        uglify: {
            build: {
                options: {
                    beautify: true,
                    compress: false,
                    mangle: true
                },
                files: {
                    'build/application.js': [
                        'src/js/vendor/jquery.js',
                    	'src/js/vendor/underscore.js',
                    	'src/js/vendor/backbone.js',
                    	'build/templates.js',
                    	'src/js/application.js',
                        'src/js/views/*.js',
                        'src/js/**/*.js'
                    ]
                }
            }
        },

        watch: {
          scripts: {
            files: ['src/**/*'],
            tasks: ['buildall'],
            options: {
              spawn: false,
            },
          },
        }

    });

	grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['buildall', 'watch']);
    grunt.registerTask('buildall', ['buildcss', 'buildjs']);
    grunt.registerTask('buildcss', ['compass', 'cssc', 'cssmin']);
    grunt.registerTask('buildjs', ['jst', 'uglify']);
};