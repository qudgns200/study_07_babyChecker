// routes/controller.js

const db = require('../model/index');
const Information = db.information;
//const Op = db.sequelize.Op; // 조건문 등의 조건 정하기

exports.findAll = (req, res) => {
    Information.findAll().then(data => res.send(data));
};

exports.findOne = (req, res) => {
    Information.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => res.send(data));
};