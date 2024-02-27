const { status } = require('init')
const knex = require('../../config/kenx')
const { insertVendor,whereVendor } = require('../../service/vendor/insert')


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
    // let pername = {pre_name:'จ่าเฉย'}
    // console.log((await whereVendor(pername)).data.ven_code_run) 
    // return
    const { ven_code_run } = req.body
    const { pre_name, ven_name, contact_name, add_name
        , add_no, add_moo, add_soi, add_trog, add_roa, add_tumbol
        , add_amphur, add_provid, add_province, add_zip, add_tel, add_email
        , vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term
        , ven_ct_code, ven_credit_term, ven_credit_limit, ven_balance, contact_fdate
        , contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle, AF_Status
        , ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time
        , edit_date, edit_time, add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no } = req.body
    const statusupdete = await knex('dbo')
        .where('ven_code_run','=',ven_code_run)
        .update({
            "pre_name": pre_name,
            "ven_name": ven_name,
            "contact_name": contact_name,
            "add_name": add_name,
            "add_no": add_no,
            "add_moo": add_moo,
            "add_soi": add_soi,
            "add_trog": add_trog,
            "add_roa": add_roa,
            "add_tumbol": add_tumbol,
            "add_amphur": add_amphur,
            "add_provid": add_provid,
            "add_province": add_province,
            "add_zip": add_zip,
            "add_tel": add_tel,
            "add_email": add_email,
            "vengroup_code": vengroup_code,
            "vat_type": vat_type,
            "vat_code": vat_code,
            "ven_discount": ven_discount,
            "ven_ship_term": ven_ship_term,
            "ven_ct_code": ven_ct_code,
            "ven_credit_term": ven_credit_term,
            "ven_credit_limit": ven_credit_limit,
            "ven_balance": ven_balance,
            "contact_fdate": contact_fdate,
            "contact_ldate": contact_ldate,
            "cancel_date": cancel_date,
            "rec_memo": rec_memo,
            "ordering_date": ordering_date,
            "ordering_cycle": ordering_cycle,
            "AF_Status": AF_Status,
            "ven_balance_cs": ven_balance_cs,
            "tax_id": tax_id,
            "tax_branch_id": tax_branch_id,
            "tax_branch": tax_branch,
            "dealercode": dealercode,
            "add_date": add_date,
            "add_time": add_time,
            "edit_date": edit_date,
            "edit_time": edit_time,
            "add_tel1_ext": add_tel1_ext,
            "add_fax_ext": add_fax_ext,
            "vender_type": vender_type,
            "add_phone": add_phone,
            "sap_no": sap_no
        }).then(() => {
            return 200
        }).catch((err) => {
            console.log(err)
            return 400
        })
    return res.status(statusupdete).send(statusupdete)



    // del
}
const remove = async (req, res) => {
    const { ven_code_run } = req.body
    const statusdelete = await knex('dbo')
        .where('ven_code_run', '=', ven_code_run)
        .del()
        .then(() => {
            return 200
        }).catch((err) => {
            console.log(err)
            return 400
        })
    return res.status(statusdelete).send(statusdelete)
}
// ลบแบบกดหนดตามกำหนดตามตัวเลข
// .where 
// ({
//     ven_code_run:req.params.id
// })
// .del()

module.exports = { insert, update, remove, where }