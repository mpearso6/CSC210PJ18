const Twitter = require('twitter');

module.exports = () => {
  let twitter = new Twitter({
    consumer_key: '2Jz7kiKdPuGYAg1f7k9Rhh5de',
    consumer_secret: 'QWX73rxWYqTg9IOzJxvZG7vFVXVgEq7PqAqiwErIpgQ7Zv6XlT',
    access_token_key: '1071717626345340933-70jyDSeNONjOvOcWaNOlTz8zrbXM51',
    access_token_secret: 'haX1GSHAU9D8Vpep1zrDsagCSo0fASNpxoc2rgYfpLQiA'
  });
  
  twitter.get('statuses/show/:id', (error, tweets, res) => {
    if(!error){
      res.json({tweets});
    }
  });
}
