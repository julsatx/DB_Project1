const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')
const morgan = require('morgan')
const PORT = 7000
const app = express()


playersRouter = require('./server/Players/controller.js')

const connectionString = 
'postgresql://julsatx:Porkchop@localhost:/FootballClub'

//instatiate 
const client = new Client({ connectionString })
client.connect()
	.then(()=> { console.log('Connection to PG Client Active') })
	.catch(error=>{console.log('error, something went wrong')})

//link up path playerRouter
app.use(morgan('dev'))
app.use('/Players',playersRouter)
app.listen(PORT, ()=>{
	console.log("Connected on port ", PORT)
})