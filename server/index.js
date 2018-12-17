const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
require('dotenv').config();


const app = express();

const server = http.createServer(app);
const io = socketIo(server);

const twitter = require('./routes/api/twitter');
const watson = require('./routes/api/watson');
const user = require('./routes/user');
const saved_tweets = require('./routes/saved_tweets');
const standards = require('./routes/standards');
const watson_analysis = require('./routes/watson_analysis');

console.log(process.env.PORT);
//process.env.twitMysql = 'mysql://vx0xz9p9sdjtdf65:m7ws7lmyshd69fbt@h2cwrn74535xdazj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/za76lma5s7kw9hgw';
//console.log(process.env);

app
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use('/twitter', twitter)
  .use('/watson', watson)
  .use('/users', user)
  .use('/saved_tweets', saved_tweets)
  .use('/standards', standards)
  .use('/watson_analysis', watson_analysis)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/client/index'))
  .listen(PORT, () => console.log(`Main app Listening on ${ PORT }`));
