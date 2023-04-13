const express = require('express')
const { getAll, addabonnement, getoneAbonnement, deleteAbonnemet, updateabonnement } = require('../Controllers/Abonnement')


const abonnementRouter = express.Router()

abonnementRouter.post('/add',addabonnement)

abonnementRouter.get('/getAll',getAll)

abonnementRouter.get('/getone/:id',getoneAbonnement)

abonnementRouter.delete('/delete/:id',deleteAbonnemet )

abonnementRouter.put('/updateAbon/:id',updateabonnement)

module.exports = abonnementRouter