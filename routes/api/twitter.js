const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const getBearerToken = require('get-twitter-bearer-token');

module.exports = () => {
  /*
  let twitter = new Twitter({
    consumer_key: '2Jz7kiKdPuGYAg1f7k9Rhh5de',
    consumer_secret: 'QWX73rxWYqTg9IOzJxvZG7vFVXVgEq7PqAqiwErIpgQ7Zv6XlT',
    access_token_key: '1071717626345340933-70jyDSeNONjOvOcWaNOlTz8zrbXM51',
    access_token_secret: 'haX1GSHAU9D8Vpep1zrDsagCSo0fASNpxoc2rgYfpLQiA'
  });
  */
  
  router.get('/twitter', (req, res) =>{
    const key: '2Jz7kiKdPuGYAg1f7k9Rhh5de';
    const secret: 'QWX73rxWYqTg9IOzJxvZG7vFVXVgEq7PqAqiwErIpgQ7Zv6XlT';
    
    getBearerToken(key, secret, (err, res) =>{
      if (err) {
        // handle error
      } else {
        var client = new Twitter({
          bearer_token: res.body.access_token,
        });
        var params = {screen_name: 'nodejs'};
        client.get('statuses/user_timeline', params, (error, tweets, res) => {
          if(!error){
            console.log(tweets);
          }
        });
      }
    });
    res.set('Content-Type', 'application/json');
    res.send('{"message":"yo"}');
    });
  });
  
}
