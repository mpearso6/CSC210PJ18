const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const getBearerToken = require('get-twitter-bearer-token');

module.exports = (app, io) => {
  
  let twitter = new Twitter({
    consumer_key: '2Jz7kiKdPuGYAg1f7k9Rhh5de',
    consumer_secret: 'QWX73rxWYqTg9IOzJxvZG7vFVXVgEq7PqAqiwErIpgQ7Zv6XlT',
    access_token_key: '1071717626345340933-70jyDSeNONjOvOcWaNOlTz8zrbXM51',
    access_token_secret: 'haX1GSHAU9D8Vpep1zrDsagCSo0fASNpxoc2rgYfpLQiA'
  });
  
  io.on('connection', socket => {
    stream();
    socket.on('connection', () => console.log('Client connected'));
    socket.on('disconnect', () => console.log('Client disconnected'));
  });
  
  const stream = () => {
    twitter.stream('statuses/filter', { track: 'taco' }, (stream) => {
      stream.on('data', (tweet) => {
        sendMessage(tweet);
      });
      
      stream.on('error', (error) => {
        console.log(error);
      });
  };
}
