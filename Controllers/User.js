const User = require("../Models/User")
const userRouter = require("../Routes/User")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken')

exports.addContact=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send({errors : [{msg : 'Email exists'}]})
        }

        const newUser = new User(req.body)

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt)

        newUser.password = hashedPassword

        await newUser.save()

        const payload = {id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' })

        res.status(200).send({msg:"User added",newUser,token})

    } catch (error) {
        res.status(500).send({errors : [{msg :'Could not signUp'}]})
    }
}


exports.signin=async(req,res)=>{
        try {
            
            const {email,password} = req.body

            const found = await User.findOne({email})
            if(!found){
                return res.status(400).send({errors : [{msg : 'Email not exist'}] })
            }
            const matched = bcrypt.compareSync(password,found.password)
            if (!matched) {
                return res.status(400).send({error : [{msg : 'not password'}]})
            }
            const payload = {id : found._id}
            var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1h' })
    
            res.status(200).send({msg : 'logged In',found,token})

        } catch (error) {
            res.status(500).send({errors : [{msg :'Could not signin'}]})

        }
}

exports.readUsers=async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).send({Msg : "List of users",users})
    } catch (error) {
        res.status(500).send('Could not get users')
    }
}

exports.deleteUsers=async(req,res)=>{
    try {
       const {id} =  req.params
       await User.findByIdAndDelete(id)
       res.status(200).send({Msg : 'Contact delete'})
    } catch (error) {
        res.status(500).send('Could not delete')
    }
}

exports.update=async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Contact updated'})
    } catch (error) {
        res.status(500).send('Could not update')
    }
}


exports.redUsers=async(req,res)=>{
    try {
        const {id} = req.params
        const oneUser = await User.findById(id)
        res.status(200).send({Msg:'The user is',oneUser})
    } catch (error) {
        res.status(500).send('Could not red')
    }
}