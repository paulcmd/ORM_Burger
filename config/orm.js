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

}

// ---------- Export ORM ----------
module.exports = orm;