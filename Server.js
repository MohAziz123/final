const express = require("express")
const ConnectDB = require("./Config/ConnectDB")
const abonnementRouter = require("./Routes/Abonnement")
const commandeRouter = require("./Routes/Commande")
const userRouter = require("./Routes/User")



const app = express()

require("dotenv").config()

ConnectDB()

app.use(express.json())

app.use('/api/users',userRouter)

app.use('/api/abonnement',abonnementRouter)

app.use('/api/commande',commandeRouter)

app.listen(process.env.port,console.log(`Server is running on the port ${process.env.port}`))