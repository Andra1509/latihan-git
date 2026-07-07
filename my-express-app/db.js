const mysql = require("mysql2")

const connetionPool = mysql.createPool({
    host : localhost ,
    user : root ,
    password : root ,
    database :  db_movie
});

connetionPool.getConnection((err) => {
    if(err){
        throw err
    }
})

module.exports = { connetionPool }