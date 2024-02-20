const { where } = require('sequelize')
const db = require('../models/index')


var that = module.exports = {
    getAllUser: async() => {
        try {
            return await new Promise((resovle, reject) => {
                const User = db.User.findAll({
                    raw: true,
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
                        attributes: ['id', 'name']
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
    },
    login: async(object) => {
        try {

            return await new Promise(async(resolve, reject) => {
                const user = await db.User.findOne({
                        where: {
                            email: object.email
                        },
                        attributes: ['id', 'password', 'roleId']
                    })
                    //bcripts
                const bool = await user.authenticate(object.password);
                return bool ? resolve(user) : reject(bool)
            })
        } catch (error) {

        }
    },
    getUserByEmail: async(email) => {
        try {
            return await new Promise(async(resolve, reject) => {
                const user = await db.User.findOne({
                    where: {
                        email: email
                    },
                    attributes: ['email']
                })
                if (user && user.email === email) {
                    resolve(true); // User exists
                } else {
                    resolve(false); // User does not exist
                }
            })
        } catch (error) {

        }
    },
}