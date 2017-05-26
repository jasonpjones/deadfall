// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                reporter: require('jshint-stylish'), // use jshint-stylish to make our errors look and read good
                'eqeqeq': true,
                'curly': true,
                'undef': true,
                'sub' : true    //Allows [] instead of dot notation
                //'todo' : true,
                //"unused" : true
            },
            // when this task is run, lint the Gruntfile and all js files in src
            build: ['src/*.js', 'specs/*.js']
        },

        jasmine: {
            src: ['src/*.js'],   //No idea why but won't pick up gridstack in _jasmine/dep folder
            options: {
                specs: ['specs/**/*.js']
            }
        },

        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                src: ['src/**/*.js'],
                dest: 'src/dfo_app.min.js'
            }
        },

        // configure cssmin to minify css files ------------------------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                src: ['css/**/*.css'],
                dest: 'css/styles.min.css'
            }
        },

        // configure watch to auto update ----------------
        watch: {
            // for stylesheets, watch css and less files 
            // only run less and cssmin stylesheets:
            files: ['css/**/*.css', 'css/**/*.less'],
            tasks: ['less', 'cssmin'],
            scripts: {
                files: 'src/**/*.js',
                tasks: ['jshint', 'uglify']
            }
        }

    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'jasmine']);
};