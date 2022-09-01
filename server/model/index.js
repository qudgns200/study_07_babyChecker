const dbConfig = require('../config/dbConfig');

// ORM(Object-Relational Mapping)
// 객체지향을 통해 RDB 데이터 조작
const { Sequelize } = require('sequelize');

const sequelizeConfig = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
);

const db = {};
db.sequlize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.information = require('./information')(sequelizeConfig, Sequelize);

module.exports = db;