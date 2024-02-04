const { emit } = require('nodemon')
const { getAllUser, getUserById, postUser, login } = require('../services/testservice')
const {} = require('../middleware/athen')

var that = module.exports = {
    login: async(req, res, next) => {
        try {
            const object = {
                    email,
                    password
                } = await req.body
                //spread vs destruction
                // const {...ob } = object
                // const { password: omittedPassword, ...ob } = object
                // console.log(omittedPassword)
                // console.log(ob)
                // console.log(object)
            const checkLogin = await login(object)
            if (checkLogin) {
                return res.status(200).json({
                    loginVali: true
                })
            } else {
                return res.status(200).json({
                    loginVali: false
                })
            }

        } catch (error) {
            next(error)
        }
    },
    getAllUser: async(req, res, next) => {
        try {
            const User = await getAllUser()

            return res.status(200).json({
                data: User
            })

        } catch (error) {
            next(error)
        }
    },
    getUserById: async(req, res, next) => {
        try {
            const { id } = await req.params
            const User = await getUserById(id)

            // console.log(User)
            if (id) {
                return res.status(200).json({
                    data: User
                })
            } else {
                return res.status(404).json({
                    message: 'Cannot find'
                })
            }
        } catch (error) {
            next(error)
        }
    },
    postUser: async(req, res, next) => {
        try {
            const info = { firstName, lastName, phone, email, address, password } = req.body
                // info.roleId = 1
            if (firstName && lastName && phone && email && address && password) {
                return res.status(200).json({
                    data: await postUser(info)
                })
            } else {
                res.status(404).json({
                    message: 'demiss data'
                })
            }
        } catch (error) {
            next(error)
        }
    }
}