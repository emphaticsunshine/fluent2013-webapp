define(function (require, exports, module) {
    "use strict";
    exports.start = function () {
      var Article = require("../models/Article"),
        article1 = new Article({id: 100000002165682});
      article1.fetch({
        success: function (data) {
          console.log(data.get('title'));
        }, error: function () {
          console.log("error happened");
        }
      });
    };
});
