var mysql = require('mysql');
exports.connection = mysql.createConnection(process.env.JAWSDB_URL);