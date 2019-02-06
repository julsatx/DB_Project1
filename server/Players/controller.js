//create controller for Players
const express = require('express')
const bodyParser = require('body-parser')
const { Client } = require('pg')

let router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

//link up to postGres

const connectionString = 
'postgresql://julsatx:Porkchop@localhost:/FootballClub'

//instantiate

const client = new Client ({ connectionString })

client.connect()
	.then(() => {console.log( 'Connected to Players controller :P')})
	.catch(error => {console.log('Ruh Roh! Error')
})

router.get('/',(request,response)=>{
	let query = 'SELECT * FROM staff ' 
	client.query(query)
	.then(result=>{
		response.send(result.rows)
	})
	.catch(error =>
		response.send(error))
	})
router.post('/',(request,response)=>{
	let input = 'INSERT into STAFF(staff_id,staff_position,staff_name)VALUES($1,$2,$3)'

	let values = [request.body.staff_id, request.body.staff_position, request.body.staff_name]
	client.query(input, values)
	.then(result => response.send(result))
	.catch(error =>{
		console.log(error)
		response.send("OH NOOOO Error")
	})
})	

router.put('/:id',(request,rsponse)=>{

	let query = 'UPDATE STAFF SET staff_position=($1),staff_name=($2) WHERE staff_id=($3)'
	const id = request.params.id
	let data = {staff_position:request.body.staff_position, staff_name:request.body.staff_name }
	client.query(query, [data.staff_position, data.staff_name,id])
	.then(result=> response.send(result))
	.catch(error=> {
		console.log(error)
		response.send("AHHH Error")
	})
})


module.exports = router
