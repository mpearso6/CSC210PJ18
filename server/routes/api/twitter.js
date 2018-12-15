const Twitter = require('twitter');
const express = require('express');
const router = express.Router();
const http = require('http');
const socketIo = require('socket.io');
const SERVER_PORT =  5001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//module.exports = (app, io) => {

let twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

let socketConnection;
let twitterStream;

//app.locals.searchTerm = 'RWBY'; //Default search term for twitter stream.
//app.locals.showRetweets = false;

const stream = () => {
  console.log('Resuming for ' + 'RWBY');
  twitter.stream('statuses/filter', { track: 'RWBY' }, (stream) => {
      stream.on('data', (tweet) => {
          sendMessage(tweet);
      });

      stream.on('error', (error) => {
          console.log(error);
      });

      setTimeout(function() {

          // In two seconds, get as many tweets as the server can get and then send to front end
          stream.destroy();
          res.send(tweets);
      }, 2000);

      twitterStream = stream;
  });
}

router.get('/stream', (req, res) => {
  const tweets = [];
  twitter.stream('statuses/filter', { track: 'RWBY' }, (stream) => {
      stream.on('data', (data) => {
          tweets.push(data);
          sendMessage(tweet);
      });

      stream.on('error', (error) => {
          console.log(error);
      });

      setTimeout(function() {

          // In two seconds, get as many tweets as the server can get and then send to front end
          stream.destroy();
          res.send(tweets);
      }, 2000);

      twitterStream = stream;
  });
});

router.get('/', (req, res) => {
  const tweetsBox = [];
  twitter.get('search/tweets', {q: 'rwby'}, (error, tweets, response) => {
    //console.log(tweets);
    //tweets = tweetBox;
    res.send(tweets);
  });
});

router.post('/setSearchTerm', (req, res) => {
      let term = req.body.term;
      app.locals.searchTerm = term;
      twitterStream.destroy();
      stream();
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

  /**
   * Emits data from stream.
   * @param {String} msg
   */
const sendMessage = (msg) => {
    if (msg.text.includes('RT')) {
        return;
    }
    socketConnection.emit("tweets", msg);
}

server
  .listen(SERVER_PORT, () => console.log(`Twitter api Listening on ${ SERVER_PORT }`));

module.exports = router;
//};
