const express = require('express');
const csp = require('content-security-policy');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

const cspPolicy = {
  'report-uri': '/reporting',
  'default-src': csp.SRC_NONE,
  'script-src': [ csp.SRC_SELF, csp.SRC_DATA ],
  'font-src': [csp.SRC_SELF, csp.SRC_DATA]
};

const twitter = require('./routes/api/twitter');
const watson = require('./routes/api/watson');
const user = require('./routes/user');
const saved_tweets = require('./routes/saved_tweets');
const standards = require('./routes/standards');
const watson_analysis = require('./routes/watson_analysis');

app
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(csp.getCSP(cspPolicy))
  .use(express.static(path.join(__dirname, 'client/build')))
  .use(bodyParser.json())
  .use('/twitter', twitter)
  .use('/watson', watson)
  .use('/users', user)
  .use('/saved_tweets', saved_tweets)
  .use('/standards', standards)
  .use('/watson_analysis', watson_analysis)
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render(path.join(__dirname+'./client/build/index')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
