const knex = require('../../config/kenx')

const insertVendor = async (item) => {
    const { branch_no, ven_code, pre_name, ven_name, contact_name, add_name, add_no, add_moo
        , add_soi, add_trog, add_road, add_tumbol, add_amphur, add_provid, add_province, add_zip, add_tel
        , add_email, vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term, ven_ct_code, ven_credit_term
        , ven_credit_limit, ven_balance, contact_fdate, contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle
        , AF_Status, ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time, edit_date, edit_time
        , add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no } = item
    const statusinsert = await knex('dbo').insert({
        "branch_no": branch_no,
        "ven_code": ven_code,
        "pre_name": pre_name,
        "ven_name": ven_name,
        "contact_name": contact_name,
        "add_name": add_name,
        "add_no": add_no,
        "add_moo": add_moo,
        "add_soi": add_soi,
        "add_trog": add_trog,
        "add_road": add_road,
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
        console.log(err);
        return 400
    })
    // console.log(item)
    return statusinsert
}
const whereVendor = async (item) => {
    const { pre_name } = item
    const wherelike = ` SELECT * FROM dbo WHERE pre_name LIKE ? `;
    const searchlike = `%${pre_name}%`
    const statuswhere = await knex.raw(wherelike, searchlike)
    const endwhere = statuswhere[0][0]
    // console.log(endwhere)
    return { "status": 200, "data": endwhere }

}
const updeteVendor = async (item) => {
    // const { ven_code_run } = item
    const { ven_code_run, pre_name, ven_name, contact_name, add_name
        , add_no, add_moo, add_soi, add_trog, add_roa, add_tumbol
        , add_amphur, add_provid, add_province, add_zip, add_tel, add_email
        , vengroup_code, vat_type, vat_code, ven_discount, ven_ship_term
        , ven_ct_code, ven_credit_term, ven_credit_limit, ven_balance, contact_fdate
        , contact_ldate, cancel_date, rec_memo, ordering_date, ordering_cycle, AF_Status
        , ven_balance_cs, tax_id, tax_branch_id, tax_branch, dealercode, add_date, add_time
        , edit_date, edit_time, add_tel1_ext, add_fax_ext, vender_type, add_phone, sap_no } = item
    const statusupdete = await knex('dbo')
        .where('ven_code_run', '=', ven_code_run)
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
    return statusupdete
    // res.status(statusupdete).send(statusupdete)
}
const removeVendor = async (item) => {
    const { ven_code_run } = item
    const statusdelete = await knex('dbo')
        .where('ven_code_run', '=', ven_code_run)
        .del()
        .then(() => {
            return 200
        }).catch((err) => {
            console.log(err)
            return 400
        })
    return statusdelete
}

module.exports = { insertVendor, whereVendor, updeteVendor, removeVendor }


