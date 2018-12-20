var express = require('express');
var router = express.Router();

const db = require('./../db');
const connection = db.connection;

/* GET standards listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from Standards', function (error, results, fields) {
        if(error){
            res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
            //If there is error, we send the error in the error section with 500 status
        } else {
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            //If there is no error, all is good and response is 200OK.
        }
    });
});

module.exports = router;

exports.getTwitterData = function(){
    connection.query("SELECT TwitterConsumerKey, TwitterSecretKey, TwitterBearerKey, TwitterBearerSecretKey FROM Standards", function(error, results, fields){
        if(error){
            //shouldnt be an error
        }
        else{
            return results;
        }
    })
};

exports.getIBMData = function(){
    connection.query("SELECT IBMAPIKey FROM Standards", function(error, results, fields){
        if(error){
            //shouldnt be an error
        }
        else{
            return results;
        }
    })
};