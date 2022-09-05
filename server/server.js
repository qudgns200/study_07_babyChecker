const express = require('express')
const app = express();
const port = process.env.PORT || 8080;

// DB Connection
const db = require('./model/index');
db.sequelizeConfig.sync();

// Cors Set.
// HTTP  헤더에 따른 접근 권한 관리 체제
const cors = require('cors');
app.use(cors());

// Default route for server status
app.get('/', (req, res) => {
  res.send('Server is running on port' + port);
});

app.listen(port, () => 
    console.log('Express server listening on port ' + port)
);

// RESTful API route For DB
app.use('/', require('./Router/route'));

