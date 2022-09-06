require('dotenv').config();
const env = process.env;

module.exports = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    dialect: process.env.dialect
};