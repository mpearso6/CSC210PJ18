var express = require('express');
var router = express.Router();
var parser = require('body-parser');
router.use(parser.urlencoded({
    extended: true
}));

const db = require('./../db');
const connection = db.connection;

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from SavedTweets', function (error, results, fields) {
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
    var UserID = req.body.UserID;
    var TwitterParams = req.body.TwitterParams;
    var TweetsReturned = req.body.TweetsReturned;
    
    if(UserID === undefined || TwitterParams === undefined || TweetsReturned === undefined){
        res.send(JSON.stringify({"status": 500, "error": "Invalid body specified", "response": null}));
    }
    else{
        connection.query("INSERT INTO SavedTweets(UserID, TwitterParams, TweetsReturned) VALUES (" + connection.escape(UserID) + "," +
            connection.escape(TwitterParams) + "," + connection.escape(TweetsReturned) + ")", function(error, results, fields){
            if(error){
                res.send(JSON.stringify({"status": 500, "error": error + "These are the values that were sent: \n" + UserID, "response": null}));
                //If there is error, we send the error in the error section with 500 status
            } else {
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                //If there is no error, all is good and response is 200OK.
            }
        });
    }
});

module.exports = router;