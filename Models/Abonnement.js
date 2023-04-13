const mongoose = require("mongoose")


const abonnementSchema = mongoose.Schema(
    {
        image : String,
        namedepack : String,
        prix : Number,
        date : Number
    }
)

module.exports = mongoose.model("mohamed",abonnementSchema)