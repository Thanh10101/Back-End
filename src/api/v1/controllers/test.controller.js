const { emit } = require('nodemon')
const { getAllUser, getUserById, postUser, login } = require('../services/testservice')
const {} = require('../middleware/athen')
const session = require('express-session')

var that = module.exports = {
    login: async(req, res, next) => {
        try {
            const object = {
                email,
                password
            } = await req.body
            const checkLogin = await login(object)
            if (checkLogin) {
                req.session.user = {
                    id: await checkLogin.id,
                    roleId: await checkLogin.roleId
                }

                return res.status(200).json({
                    session: req.session
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
                // data: User,
                session: req.session.user
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