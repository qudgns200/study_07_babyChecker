const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const mysql = require('mysql');
const dbconfig = require('./db.js');
const connection = mysql.createConnection(dbconfig);

app.get('/', (req, res) =>
    res.send('Hello World!')
);

app.get('/test', (req, res) =>
    connection.query('SELECT * from information', (error, rows, fields) => {
    if (error) throw error;
    console.log('information is: ', rows);
    res.send(rows);
  })
);

app.listen(port, () => 
    console.log('Express server listening on port ' + app.get('port'))
);