const Twitter = require('twitter');

module.exports = () => {
  let twitter = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
  });
  
  twitter.get('statuses/show/:id', (error, tweets, res) => {
    if(!error){
      res.json({tweets});
    }
  });
}
