const express = require('express')
const { addContact, signin, readUsers, deleteUsers, update, redUsers } = require('../Controllers/User')
const isAuth = require('../Middlewares/isAuth')

const { validation, registerValidation, loginvalidation } = require('../Middlewares/Validator')


const userRouter = express.Router()


userRouter.post('/signup',registerValidation,validation,addContact)


userRouter.post('/signin',loginvalidation,validation,signin)

userRouter.get('/currentUser',isAuth,(req,res)=>res.send(req.user))

userRouter.get('/readUsers',readUsers)

userRouter.delete('/deleteUsers/:id',deleteUsers)

userRouter.put('/updateUsers/:id',update)

userRouter.get('/redUser/:id',redUsers)

module.exports = userRouter