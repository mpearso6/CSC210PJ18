/*
module.exports = function(app){
  var tasks = require('../controllers/users');
  app.route('/')
    .get(tasks.index);

};
*/
var express = require('express');
var router = express.Router();

var mysql = require('mysql');
//const db = require('./../db');
const connection =  mysql.createConnection(process.env.JAWSDB_URL);;

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from User', function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

router.post('/', function (req, res) {
    console.log(req);
    res.send("received POST request");
});

module.exports = router;
