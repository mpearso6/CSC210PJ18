const express = require('express');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

const twitter = require('./routes/api/twitter');
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
  .use(express.static(path.join(__dirname, 'public')))
  .use('/api', twitter)
  .use('/users', user)
  .use('/saved_tweets', saved_tweets)
  .use('/standards', standards)
  .use('/watson_analysis', watson_analysis)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
