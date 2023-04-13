
const mongoose = require("mongoose")


const commandeSchema = mongoose.Schema(
    {
       owner : {
        type : mongoose.Types.ObjectId,
        ref : 'users'
       },
       abonnement :  {
        type : mongoose.Types.ObjectId,
        ref : 'mohamed'
       },
       status : String


    }
)

module.exports = mongoose.model('commande',commandeSchema)