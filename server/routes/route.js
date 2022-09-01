// routes/index.js
const router = require("express").Router();
const information = require("./controller");

// selectAll information
router.get('/api/information', information.findAll);

module.exports = router;