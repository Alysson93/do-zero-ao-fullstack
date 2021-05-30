const express = require('express')
const app = express()

const bodyParser = require('body-parser')
require('dotenv').config()

//middlewares
app.use(bodyParser.json())

const api = require('./backend/routes')
app.use('/api',api)

//rotas
app.get('/',(req,res)=>{
	res.json({
		success: true
	})
})

app.listen(process.env.PORT)