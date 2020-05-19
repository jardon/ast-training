const mysql = require("mysql2")

let pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// Fetches all elements from table
module.exports.SelectAll = table => 
    new Promise((resolve, reject) => 
        pool.query("SELECT * FROM ??", [table], (err, results) => 
            err ? reject(err) : resolve(results)
        )
    )

// Inserts item into table
module.exports.Insert = (table, object) => 
    new Promise((resolve, reject) =>
        pool.query("INSERT INTO ?? (??) VALUES (?)", [table, Object.keys(object), Object.vals(object)], (err, results) => 
            err ? reject(err) : resolve(results)
        )
    )

// Updates table entry
module.exports.Update = (table, prop, val, object) =>
    new Promise((resolve, reject) => 
        pool.query("UPDATE ?? SET ? WHERE (?? = ?)", [table, object, prop, val], (err, results) => 
            err ? reject(err) : resolve(results)
        )
    )

// Deletes table entry
module.exports.Delete = (table, prop, val) => 
    new Promise((resolve, reject) => 
        pool.query("DELETE FROM ?? WHERE (?? = ?)", [table, prop, val], (err, results) => 
            err ? reject(err) : resolve(results)
        )
    )

// Finds table entry
module.exports.findBy = (table, prop, val) => 
    new Promise((resolve, reject) => 
        pool.query("SELECT * FROM ?? WHERE (?? = ?)", [table, prop, val], (err, results) => 
            err ? reject(err) : resolve(results)
        )
    )
