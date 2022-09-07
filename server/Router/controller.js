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

exports.create = (req, res) => {
    Information.create(req.params).then(function(result) {
        res.json(result);
    })
}

exports.update = (req, res) => {
    Information.update(req.params).then(function(result) {
        res.json(result[1][0]);
    })
}

exports.delete = (req, res) => {
    Information.delete({
        where: {
            id:req.params.id
        }
    }).then(function(result) {
        res.json();
    })
}