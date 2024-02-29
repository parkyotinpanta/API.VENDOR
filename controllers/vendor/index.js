const knex = require('../../config/kenx')
const { insertVendor, whereVendor, updeteVendor, removeVendor,wherelike } = require('../../service/vendor/insert')


// insert
const insert = async (req, res) => {
    const status = await insertVendor(req.body)
    console.log(status)
    return res.status(status).send(status)
}
// wherelike
const where = async (req, res) => {
    const { status, data } = await whereVendor(req.body)
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
const selete = async (req, res) => {
    const star = await knex.select()
        .table('dbo')
    return res.status(200).json(star)
}
const search = async (req, res) => {
    const searchvendor =  await wherelike(req.body)
      return res.status(200).send(searchvendor)
}

module.exports = { insert, update, remove, where, selete, search }