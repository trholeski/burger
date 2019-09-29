var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    create: function(name, cb) {
        orm.create("burgers", [
          "burger_name", "devoured"
        ], [
          name, false
        ], cb);
    },
};    

    module.exports = burger;