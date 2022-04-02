const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

if (process.env.DEBUG.toUpperCase() === "TRUE") {
    pool.on('acquire', function (connection) {
        console.log('Connection %d acquired', connection.threadId);
    });
    pool.on('release', function (connection) {
        console.log('Connection %d released', connection.threadId);
    });
    pool.on('connection', function (connection) {
        connection.query('New connection created')
    });
    pool.on('enqueue', function () {
        console.log('Waiting for available connection slot');
    });
}

module.exports = pool
