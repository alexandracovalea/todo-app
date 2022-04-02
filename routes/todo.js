var express = require('express');
var router = express.Router();
var pool = require('../db.js');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM `Todo`', (error, result, query) => {
        if (error) console.log(error);

        res.render('todo', {
            todos: result
        })
    })
})

module.exports = router
