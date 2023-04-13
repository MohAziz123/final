const express = require('express')
const { addCommande, getAllCommande, getoneCommande, deleteCommande, updatecommande, getMyCommande } = require('../Controllers/Commande')
const isAuth = require('../Middlewares/isAuth')

const commandeRouter = express.Router()

commandeRouter.post('/addCommande',isAuth,addCommande)
commandeRouter.get('/getAllCommandes',getAllCommande)
commandeRouter.get('/getMyCommande',isAuth,getMyCommande)
commandeRouter.get('/getOneCommande/:id',getoneCommande)
commandeRouter.delete('/deletecommande/:id',deleteCommande)
commandeRouter.put('/updatecommande/:id',updatecommande)
module.exports =  commandeRouter