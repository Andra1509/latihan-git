const mysql = require("mysql2")
require('dotenv').config()

const connectionPool = mysql.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_UESR,
    password : process.env.DB_PAS ,
    database : process.env.DB_PORT ,
    port : process.env.DB_3306
});

connectionPool.getConnection((err) =>{
    if(err){
        throw err
    }
});

module.exports = connectionPool