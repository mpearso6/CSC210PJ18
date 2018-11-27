module.exports = function(app){
  var tasks = require('../controllers/users');
  app.route('/')
    .get(tasks.index);

};
