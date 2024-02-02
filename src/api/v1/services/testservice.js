const db = require('../models/index')

var that = module.exports = {
    getAllUser: async () => {
        try {
            return new Promise((resovle, reject) => {
                const User = db.User.findAll({
                    attributes: ['firstName', 'lastName', 'email', 'address', 'phone'],
                    include: [{
                        model: db.Role,
                        as: 'roleData',
                        attributes: ['name']
                    }]
                })

                return User ? resovle(User) : reject('Undefined User')
            })

        } catch (error) {
        }
    },
    getUserById: async (id) => {
        try {
            return new Promise((resovle, reject) => {
                const User = db.User.findByPk(id, {
                    attributes: ['firstName', 'LastName', 'address', 'email', 'phone'],
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
    postUser: async (
        data
    ) => {
        try {
            return new Promise((resovle, reject) => {
                const User = db.User.create(
                    data
                )
                return User ? resovle('Create success') : reject('Craete fail')
            })
        } catch (error) {

        }
    }
}
