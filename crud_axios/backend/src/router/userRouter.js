const express = require("express")
const userRouter = express.Router()
const {login, register} = require('../controller/userController.js')
const { authJWT } = require("../../midleware/auth.js")
 
const user = express.Router()

userRouter.post('/login', login)
userRouter.post('/register', register)

userRouter.get('/profile', authJWT, (req, res) => {
    res.json({
        status: "Berhasil",
        user: req.user
    })
})

module.exports = userRouter