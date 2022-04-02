const express = require('express');
const app = express();

// Read .env file
require('dotenv').config()

// Static files
app.use(express.static('public'))

// Views
app.set('views', './views');
app.set('view engine', 'pug');

// Routers
const todoRouter = require('./routes/todo.js')
app.use('', todoRouter)

// Test DB connection
const pool = require('./db.js');
pool.query('SELECT SYSDATE()', (err, res, fields) => {
    if (err) throw err;
})

module.exports = app;
