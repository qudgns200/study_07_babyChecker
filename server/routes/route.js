// routes/index.js
const router = require("express").Router();
const information = require("./controller");

// selectAll information
router.get('/api/information', information.findAll);

// selectOne information
router.get('/api/information/:id', information.findOne);

module.exports = router;