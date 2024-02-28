const express = require('express')
const router = express.Router()
const {insert,update,remove,where} = require('../controllers/vendor/index')



router.post('/insert',insert)
router.post('/updete',update)
router.post('/remove',remove)
router.get('/where',where)




module.exports = router