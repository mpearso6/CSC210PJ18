var express = require('express');
var router = express.Router();
var parser = require('body-parser');

const db = require('./../db');
const connection = db.connection;

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.auth0ID === undefined){
        connection.query('SELECT * from User', function (error, results, fields) {
            if(error){
                res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                //If there is error, we send the error in the error section with 500 status
            } else {
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                //If there is no error, all is good and response is 200OK.
            }
        });
    }
    else{
        connection.query('SELECT * from User WHERE Auth0ID = ' + connection.escape(req.query.Auth0ID), function (error, results, fields) {
            if(error){
                res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                //If there is error, we send the error in the error section with 500 status
            } else {
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                //If there is no error, all is good and response is 200OK.
            }
        });
    }
});

router.post('/', function (req, res) {
    var TwitterHandle = req.body.TwitterHandle === undefined ? '' : req.body.TwitterHandle;

    if(req.body.auth0ID === undefined){
        res.send(JSON.stringify({"status": 500, "error": "Invalid body specified", "response": null}));
    }
    else{
        connection.query("INSERT INTO User(TwitterHandle, auth0ID) VALUES ('" + connection.escape(TwitterHandle) + "','" +
            connection.escape(req.body.auth0ID) + "')", function(error, results, fields){
            if(error){
                res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
                //If there is error, we send the error in the error section with 500 status
            } else {
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                //If there is no error, all is good and response is 200OK.
            }
        });
    }
});

module.exports = router;