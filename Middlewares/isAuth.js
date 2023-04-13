var jwt = require('jsonwebtoken');

const User = require('../Models/User');

const isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorzied')

        var decoded = jwt.verify(token, process.env.privatekey);

        if(!decoded){
            res.status(400).send({errors : [{Msg : ' Invalid Token'}]})
        }
        const found = await User.findById(decoded.id)

        req.user = found
        next()
    } catch (error) {
        res.status(500).send({errors : [{Msg : 'not auth'}]})
    }
}

module.exports = isAuth
