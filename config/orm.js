const connection = require("../config/connection");


// Helper function for SQL syntax.
function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (String with spaces => 'String with spaces'
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            // e.g. {name: 'Some name'} => ["name='Some name'"]
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {

    // Display all burgers in the db.
    selectAll: function(table, cb) {
        const dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // Add a burger to the db.
    insertOne: function(table, cols, vals, cb) {
        const dbQuery =
            "INSERT INTO " +
            table +
            " (" +
            cols.toString() +
            ") " +
            "VALUES (" +
            printQuestionMarks(vals.length) +
            ") ";

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // Set burger devoured status to true.
    updateOne: function(table, objColVals, condition, cb) {
        const dbQuery =
            "UPDATE " +
            table +
            " SET " +
            objToSql(objColVals) +
            " WHERE " +
            condition;

        console.log(dbQuery);

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    // Delete a burger from the db.
    deleteOne: function(table, condition, cb) {
        const dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};
module.exports = orm;
