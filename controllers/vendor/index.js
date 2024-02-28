const { status } = require('init')
const knex = require('../../config/kenx')
const { insertVendor,whereVendor,updeteVendor,removeVendor } = require('../../service/vendor/insert')


// insert
const insert = async (req, res) => {
    const status = await insertVendor(req.body)
    console.log(status)
    return res.status(status).send(status)
}
// wherelike
const where = async (req, res) => {
    const {status,data} = await whereVendor(req.body)
    return res.status(status).send(data)    
}
// updete
const update = async (req, res) => {
    const status = await updeteVendor(req.body)
    return res.status(status).send(status)
    
    // del
}
// del
const remove = async (req, res) => {
    const status = await removeVendor(req.body)
    return res.status(status).send(status)
}


module.exports = { insert, update, remove, where }