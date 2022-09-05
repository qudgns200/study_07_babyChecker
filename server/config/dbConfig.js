require('dotenv').config();
const env = process.env;

console.log("env 확인 : " + process.env.host);

module.exports = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    dialect: process.env.dialect
};