const { json } = require('express')
const jwt = require('jsonwebtoken')

const authJWT = (req, res, next) => {
    const authHeader = req.header('Authorization')
  

    if(!authHeader){
        set.setHeader('WWW-Authenticate','bearer')

        return res.status(401),json({
            status : 'Ditolak',
            message : "Anda belum login"
        })
    }


    //   console.log(authHeder)
    const token = authHeader.split(" ")[1]
    //   console.log(token)
    if(!authHeader){
        return res.status(401),json({
            status : 'Ditolak',
            message : "Format token yang input salah 'Bearer <token>'"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) =>{
        if(err){
            return res.status(401).json({
                status : "Ditolak",
                Message : "Token Invalid"
            })
        }else{
        req.user = user
        console.log(user)
    
        next()
        }

    })

}


module.exports = {authJWT}