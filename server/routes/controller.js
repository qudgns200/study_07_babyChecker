// routes/controller.js

const db = require('../model/index');
const Information = db.information;
const Op = db.sequlize.Op; // 조건문 등의 조건 정하기

exports.findAll = (req, res) => {
    Information.findAll().then(data => res.send(data));
};