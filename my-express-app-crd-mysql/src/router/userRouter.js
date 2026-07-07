const express = require("express")
const userRouter = express.Router()
const {login, register} = require('../controller/userController.js')
const { authJWT } = require("../../midleware/auth.js")
 
const user = express.Router()

userRouter.get('/login', login)
userRouter.post('/register', register)

module.exports = userRouter