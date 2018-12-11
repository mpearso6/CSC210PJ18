const Twitter = require('twitter');

module.exports = (app, io) => {
  
  let twitter = new Twitter({
    consumer_key: '2Jz7kiKdPuGYAg1f7k9Rhh5de',
    consumer_secret: 'QWX73rxWYqTg9IOzJxvZG7vFVXVgEq7PqAqiwErIpgQ7Zv6XlT',
    access_token_key: '1071717626345340933-70jyDSeNONjOvOcWaNOlTz8zrbXM51',
    access_token_secret: 'haX1GSHAU9D8Vpep1zrDsagCSo0fASNpxoc2rgYfpLQiA'
  });
  
  let socketConnection;
  let twitterStream;
  
  app.locals.searchTerm = 'JavaScript'; //Default search term for twitter stream.
  app.locals.showRetweets = false;
  
  const stream = () => {
    console.log('Resuming for ' + app.locals.searchTerm);
    twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
        stream.on('data', (tweet) => {
            sendMessage(tweet);
        });

        stream.on('error', (error) => {
            console.log(error);
        });

        twitterStream = stream;
    });
  }
  
  app.post('/setSearchTerm', (req, res) => {
        let term = req.body.term;
        app.locals.searchTerm = term;
        twitterStream.destroy();
        stream();
    });

    /**
     * Pauses the twitter stream.
     */
  app.post('/pause', (req, res) => {
      console.log('Pause');
      twitterStream.destroy();
  });

    /**
     * Resumes the twitter stream.
     */
  app.post('/resume', (req, res) => {
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
};
  
