
define(function (require, exports, module) {
    var Ember = require("ember");
    var App = require("app/app").App;

    App.IndexController = Ember.Controller.extend({
        hasErrors: false,
        lastError: ""
    });
});