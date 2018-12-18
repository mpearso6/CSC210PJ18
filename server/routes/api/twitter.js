const Twitter = require('twitter');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app
  .use(bodyParser.json({ limit: '20mb'}))
  .use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

//module.exports = (app, io) => {

let twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

let socketConnection;
let twitterStream;

app.locals.searchTerm = 'RWBY'; //Default search term for

router.get('/stream', (req, res) => {
  const tweets = [];
  twitter.stream('statuses/filter', { track: app.locals.streamTerm }, (stream) => {
      stream.on('data', (data) => {
          tweets.push(data);
          console.log(data);
          //sendMessage(tweet);
      });

      stream.on('error', (error) => {
          console.log(error);
      });

      setTimeout(function() {

          // In ten seconds, get as many tweets as the server can get and then send to front end
          stream.destroy();
          console.log(tweets);
          res.send(tweets);
      }, 10000);

      twitterStream = stream;
  });
});

router.get('/search', (req, res) => {
  const tweetsBox = [];
  twitter.get('search/tweets', { q: app.locals.searchTerm }, (error, tweets, response) => {
    res.send(tweets);
  });
});

router.post('/setSearchTerm', (req, res) => {
  let searchTerm = req.body.term;
  console.log(searchTerm);
  app.locals.searchTerm = searchTerm;
});

router.post('/setStreamTerm', (req, res) => {
  let streamTerm = req.body.term;
  console.log(req.body);
  res.send(req.body)
  app.locals.streamTerm = streamTerm;
  console.log(app.locals.streamTerm);
});

  /**
   * Pauses the twitter stream.
   */
router.post('/pause', (req, res) => {
    console.log('Pause');
    twitterStream.destroy();
});

  /**
   * Resumes the twitter stream.
   */
router.post('/resume', (req, res) => {
    console.log('Resume');
    stream();
});

  //Establishes socket connection.
io.on("connection", socket => {
    socketConnection = socket;
    stream();
    socket.on("connection", () => console.log("Client connected"));
    socket.on("disconnect", () => console.log("Client disconnected"));
});

module.exports = router;
