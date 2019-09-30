var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    makeNew: function(name, callback) {
        orm.makeNew("burgers", ["burger_name", "devoured"], [name, false], callback);
    },
};    

    module.exports = burger;