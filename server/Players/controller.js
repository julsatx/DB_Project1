//create controller for Players
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended:true}))
router.use(bodyParser.json())

//link up to postGres

const connectionString = 
'postgresql://julsatx:Porkchop@localhost:/FootballClub'

//instantiate

const client = new Client ({ connectionString })

client.connect()
	.then(() => {console.log( 'Connected to Players controller :P')})
	.catch(error => {console.log('Ruh Roh! Error')})

// app.get('/',(request,response)=>{
// 	client.query('SELECT * FROM PLAYERS')
// 	.then(result =>{
// 		response.send(result)
// 	})
// 	.catch(error=> console.log(error))
// })







module.exports = router