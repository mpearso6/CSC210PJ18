const express = require('express');
const router = express.Router();
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const standards = require('../standards');
const standards_data = standards.getIBMData;

//TODO: This should be the necessary key for usage with the IBM API. Also, we can probably just set the URL hardcoded in here, since its just the watson api url
/*
IBMAPIKey
 */
console.log(standards_data);

let toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: 'zedUWcix4GfxSXjhE7qMaBbNjJTQDcq7FzZkai2VcRrQ', // Change to process.env.WATSON_API_KEY
  url: 'https://gateway.watsonplatform.net/tone-analyzer/api' // Change to process.env.WATSON_URL
});

router.get('/analyze', (req, res) => {

  const defaultText = 'Team, I know that times are tough! Product'
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';

  let toneParams = {
    tone_input: {'text': req.body!== undefined ? defaultText : req.body },
    content_type: 'application/json'
  };



  toneAnalyzer.tone(toneParams, (error, toneAnalysis) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(toneAnalysis, null, 2));
      res.send(JSON.stringify(toneAnalysis, null, 2));
    }
  });
});

router.post('/analyze', (req, res) => {

  const defaultText = 'Team, I know that times are tough! Product'
  + 'sales have been disappointing for the past three '
  + 'quarters. We have a competitive product, but we '
  + 'need to do a better job of selling it!';
  console.log(req.body);

  let toneParams = {
    tone_input: {'text': req.body!== undefined ? defaultText : req.body.data },
    content_type: 'application/json'
  };



  toneAnalyzer.tone(toneParams, (error, toneAnalysis) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.stringify(toneAnalysis, null, 2));
      res.send(JSON.stringify(toneAnalysis, null, 2));
    }
  });
});

module.exports = router;
