
const mongoose = require("mongoose")


const userSchema = mongoose.Schema(
    {
    name : String,
    prenon : String,
    phone : Number,
    cp : Number,
    pic : String,
    email : { type : String , required : true , unique : true},
    password : { type : String , required : true},
    role : String
    }
)

module.exports = mongoose.model('users',userSchema)