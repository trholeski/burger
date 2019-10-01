var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        callback(res);
      });
    },
    makeNew: function(name, callback) {
        orm.makeNew(name, false, callback);
    },
    updateDevoured: function(id, callback) {
        orm.updateDevoured(id, callback);
    }
};    

    module.exports = burger;