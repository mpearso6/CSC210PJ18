const mongoose = require('mongoose');
const User = mongoose.model('userTasks');
const bcrypt = require('bcrypt');

exports.index = (req, res) =>{
  res.json("bacon");
}
