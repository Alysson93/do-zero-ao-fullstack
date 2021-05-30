const router = require('express').Router()
require('../db/mongoConnection')

//middlewares
const portfolio = require('./portfolio')
router.use('/portfolio',portfolio)

router.get('/',(req,res)=>{
	res.json({
		success: false,
		message: 'Por favor, não chame /api'
	})
})

module.exports = router