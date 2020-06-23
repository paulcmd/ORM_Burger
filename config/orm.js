// ---------- Dependencies ----------
const connection = require("./connection.js");

// ---------- Set-Up ORM Methods ----------
const orm = {
    selectAll: function (table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, values, cb) {
        const query = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(query, [table, cols, values], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, cols, values, id, cb) {
        const query = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(query, [table, cols, values, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function (table, id, cb) {
        const query = "DELETE FROM ?? WHERE id = ?";
        connection.query(query, [table, id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

// ---------- Export ORM ----------
module.exports = orm;