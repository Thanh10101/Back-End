const db = require('../models/index')




const getUserAll = async () => {
    const User = await db.User.findAll({
        attributes: ['firstName', 'LastName', 'address', 'email', 'phone'],
        timestamp: false,
        include: [{
            model: db.Role,
            as: 'roleData',
            attributes: ['name']
        }]
    })
    return JSON.stringify(User, null, 2)
}

const getUserById = async (id) => {
    const User = await db.User.findOne({
        where: {
            id: id
        },
        attributes: ['firstName', 'LastName', 'address', 'email', 'phone'],
        include: [{
            model: db.Role,
            as: 'roleData',
            attributes: ['name']
        }]
    })
    return JSON.stringify(User, null, 2)
}

const posttUser = async (firstName, lastName, email, phone, address) => {
    const User = await db.User.create({
        firstName: firstName,
        lastName: lastName,
        address: address,
        email: email,
        phone: phone,
        roleId: '1'

    })
    return true
}

const putUser = (id) => {

}

const deleteUser = (id) => {

}
module.exports = {
    getUserAll,
    getUserById,
    posttUser,
    putUser,
    deleteUser,
}