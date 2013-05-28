define(function (require, exports, module) {
    "use strict";
    var Article = Backbone.Model.extend({
      urlRoot: '/api/article/'
    });
    module.exports = Article;
});
