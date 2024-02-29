const express = require('express')
const router = express.Router()
const {insert,update,remove,where,selete,search} = require('../controllers/vendor/index')



router.post('/insert',insert)
router.post('/updete',update)
router.post('/remove',remove)
router.post('/where',where)
router.get('/selete',selete)
router.post('/search',search)


module.exports = router