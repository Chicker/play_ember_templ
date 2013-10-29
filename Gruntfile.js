module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            handlebars_templates: {
                files: ["public/javascripts/app/templates/**/*.hbs"],
                tasks: ['emberTemplates']
            }
        },

        /*
          Finds Handlebars templates and precompiles them into functions.
          The provides two benefits:

          1. Templates render much faster
          2. We only need to include the handlebars-runtime microlib
             and not the entire Handlebars parser.

          Files will be written out to dependencies/compiled/templates.js
          which is required within the project files so will end up
          as part of our application.

          The compiled result will be stored in
          Ember.TEMPLATES keyed on their file path (with the 'app/templates' stripped)
        */
        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    return sourceFile.replace("public/javascripts/app/templates/", '');
                }
            },
            'public/javascripts/app/templates.js': ["public/javascripts/app/templates/**/*.hbs"]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.registerTask('templates', ['emberTemplates', 'watch']);
};
