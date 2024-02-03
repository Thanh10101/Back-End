const db = require('../models/index')


var that = module.exports = {
    getAllUser: async() => {
        try {
            return await new Promise((resovle, reject) => {
                const User = db.User.findAll({
                    raw: true,
                    attributes: ['firstName', 'lastName', 'email', 'address', 'phone', 'password'],
                    include: [{
                        model: db.Role,
                        as: 'roleData',
                        attributes: ['name'],
                        required: false,
                    }]
                })


                return User ? resovle(User) : reject('Undefined User')
            })


        } catch (error) {
            throw (error)
        }

    },
    getUserById: async(id) => {
        try {
            return await new Promise((resovle, reject) => {
                const User = db.User.findByPk(id, {
                    attributes: ['firstName', 'lastName', 'email', 'address', 'phone', 'password'],
                    include: [{
                        model: db.Role,
                        as: 'roleData',
                        attributes: ['name']
                    }]
                })
                return User ? resovle(User) : reject('Canot find user ' + id)
            })
        } catch (error) {

        }
    },
    postUser: async(
        data
    ) => {
        try {
            return await new Promise((resovle, reject) => {
                const User = db.User.create(
                    data
                )
                return User ? resovle(data) : reject('Create fail')
            })

        } catch (error) {
            throw (error)
        }
    }
}