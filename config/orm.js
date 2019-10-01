var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            // console.log(result);
            callback(result);
        })
    },
    makeNew: function(burgerName, isDevoured, callback) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)"
        var isDevoured = isDevoured || 0;
        connection.query(queryString, [burgerName, isDevoured], function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
  updateDevoured: function(id, callback) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      callback(result);
      console.log('result in update', result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
