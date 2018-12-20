var express = require('express');
var router = express.Router();
var parser = require('body-parser');

const db = require('./../db');
const connection = db.connection;

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * from WatsonAnalysis', function (error, results, fields) {
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
    var SavedTweetsID = req.body.SavedTweetsID;
    var WatsonDocumentAnalysis = req.body.WatsonDocumentAnalysis;
    var WatsonSentenceAnalysis = req.body.WatsonSentenceAnalysis;

    if(SavedTweetsID === null || WatsonDocumentAnalysis === null || WatsonSentenceAnalysis === null){
        res.send(JSON.stringify({"status": 500, "error": "Invalid body specified", "response": null}));
    }
    else{
        connection.query("INSERT INTO WatsonAnalysis(SavedTweetsID, WatsonDocumentAnalysis, WatsonSentenceAnalysis) VALUES (" + connection.escape(SavedTweetsID) + ",'" +
            connection.escape(WatsonDocumentAnalysis) + "','" + connection.escape(WatsonSentenceAnalysis) + "')", function(error, results, fields){
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