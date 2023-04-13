const Abonnement = require ("../Models/Abonnement")


exports.addabonnement=async(req,res)=>{
    try {
        const newabonnement = new Abonnement(req.body)

        await newabonnement.save()

        res.status(200).send({msg : "abonnement Adedd", newabonnement})
    } catch (error) {
        res.status(500).send({msg : "could not add "})
    }
}


exports.getAll=async(req,res)=>{
    try {
        const abonnements = await Abonnement.find()
        res.status(200).send({msg : "List of abonnement",abonnements})
    } catch (error) {
        res.status(500).send({msg : "could not get"})
    }
}


exports.getoneAbonnement=async(req,res)=>{
    try {
        const {id} = req.params
        const abonnement = await Abonnement.findById(id)

        res.status(200).send({msg : "abonnement",abonnement})
    } catch (error) {
        res.status(500).send({msg : "could not get abonnement"})
    }
    

}

exports.deleteAbonnemet=async(req,res)=>{
    try {
        const {id} = req.params
        await Abonnement.findByIdAndDelete(id)
        res.status(200).send({msg : "abonnement delete"})
    } catch (error) {
        res.status(500).send({msg : "could not delete abonnement"})
    }
}

exports.updateabonnement=async(req,res)=>{
    try {
        const {id} = req.params
        await Abonnement.findByIdAndUpdate(id,{$set : req.body })
        res.status(200).send({msg : "Abonnement update"})
    } catch (error) {
        res.status(500).send({msg : "could not update"})
    }
}
