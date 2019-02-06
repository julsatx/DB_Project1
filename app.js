const express = require('express')

const { Client } = require('pg')

const PORT = 7000

playersRouter = require('./server/Players/controller.js')

let app = express()

const connectionString = 
'postgresql://julsatx:Porkchop@localhost:/FootballClub'

//instatiate 
const client = new Client({ connectionString })
client.connect()
	.then(()=> { console.log('Connection Active') })
	.catch(error=>{console.log('error, something went wrong')})

//link up path playerRouter
app.use('/Players',playersRouter)
app.listen(PORT, ()=>{
	console.log("Connected")
})