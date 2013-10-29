/**
 * Created by dns on 22.10.13.
 */

require.config({
    paths: {
        "ember": "vendor/ember/ember-1.0.0",
        "jquery": "vendor/jquery/jquery-2.0.3",
        "handlebars": "vendor/handlebars/handlebars.runtime-1.0.0",
        "bootstrap": "vendor/bootstrap/js/bootstrap",
        "templates": "app/templates"
    },

    // for non-AMD modules
    shim: {
        "ember": {
            exports: "Ember",
            deps: ["handlebars"]
        },
        "handlebars": {
            exports: "Handlebars"
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "templates": {
            deps: ["ember"]
        }
    }
});

require(["bootstrap", "handlebars", "app/controllers/indexController"], function () {
    // Вложенные вызовы require необходимы, чтобы обеспечить определенный порядок загрузки скриптов.
    require(["app/routes/indexRoute", "app/router"], function () {

    });
});


