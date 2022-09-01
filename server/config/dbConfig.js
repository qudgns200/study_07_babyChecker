require('dotenv').config();
const env = process.env;

module.exports = {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    dialect: process.env.dialect
};

// const mysql = require('mysql');

// const mysqlConnection = {
//     init: function () {
//         return mysql.createConnection({
//             host: process.env.host,
//             user: process.env.user,
//             password: process.env.password,
//             database: process.env.database,
//             dialect: process.env.dialect
//         });
//     },

//     open: function(con) {
//         con.connect(err => {
//             if(err) {
//                 console.log("DB Connect failed : ", err);
//             } else {
//                 console.log("DB Connected!!");
//             }
//         });
//     },

//     close: function(con) {
//         con.end(err => {
//             if(err) {
//                 console.log("DB Terminate Failed.. : ", err);
//             } else {
//                 console.log("DB Terminated...");
//             }
//         });
//     }
// }

// module.exports = mysqlConnection;