const connectionPool = require("../config/db")
const bcrypt = require('bcrypt')
const  mysql = require("mysql")
const jwt = require('jsonwebtoken')

// const login = (req, res) => {
//     res.send("Ini Halaman Login")
// }

const register = (req, res) => {
    let {email, nama, pass} = req.body
    let queryText = `SELECT * FROM tb_user WHERE email_tb_user = '${email}'`
    
    connectionPool.query(queryText, (err, result) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                status:"Failed",
                message: err.message
            })
        }

        if(result.length > 0){
            return res.status(500).json({
                status:"Failed",
                message: "Email user sudah terdaftar"
            })
        }

    
        bcrypt.hash(pass, 10, (err, hasedPassword) => {
            if(err){
            console.error(err)
            return res.status(500).json({
                status:"Failed",
                message: err.message
            })
        }
    let insertQuery = `INSERT INTO tb_user (email_tb_user, nama_tb_user, pass_tb_user)
                        VALUES("${email}", "${nama}", "${hasedPassword}")`

        connectionPool.query(insertQuery, (err, result) => {
            if(err){
             console.error(err)
             return res.status(500).json({
             status:"Failed",
             message: err.message
                
            })
            }

            res.status(200)
            res.json({message : "User berhasil dibuat",
                status: "succes",
                result : result
            })
        })
        })
    })
}

const login = (req, res) => {
    let {email, pass} = req.body
    let queryText = `SELECT * FROM tb_user WHERE email_tb_user = '${email}'`

    connectionPool.query(queryText, (err, result) => {
        if(err){
            console.error(err)
            return res.status(500).json({
                status:"Failed",
                message: err.message
            })
        }

        const user = result[0]

        if(!user) {
            return res.status(401).json({
                status:"Failed",
                message: "Invalid Credential are"
            })
        }

        bcrypt.compare(pass, user.pass_tb_user, (err, isMatch) => {
            if(!isMatch){
                return res.status(401).json({
                   status:"Failed",
                   message: "Invalid Credential match"
                })
            }
            
            const accesToken = jwt.sign({email : user.email_tb_user}, process.env.JWT_SECRET)
            res.json(accesToken)
        })

    })

} 

module.exports = {login, register}