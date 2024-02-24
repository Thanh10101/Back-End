const { emit } = require('nodemon')
const { getAllUser, getUserById, postUser, login, getUserByEmail } = require('../services/testservice')
const {} = require('../middleware/athen')
const session = require('express-session')

const that = module.exports = {
    login: async(req, res, next) => {
        try {
            const object = {
                email,
                password
            } = await req.body
            const checkLogin = await login(object)
            if (checkLogin) {
                res.cookie('id', await checkLogin.id, { maxAge: 360000, httpOnly: true, secure: true })
                res.cookie('roleId', await checkLogin.roleId, { maxAge: 360000, httpOnly: true, secure: true })
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

            return res.status(200).json(User)

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
            const checkEmail = await getUserByEmail(email)
            console.log(checkEmail)
                // info.roleId = 1
            if (firstName && lastName && phone && email && address && password) {
                if (!checkEmail) {
                    return res.status(200).json({
                        data: await postUser(info)
                    })
                } else {
                    return res.status(403).json({
                        message: 'email exsit'
                    })
                }
            } else {
                res.status(404).json({
                    message: 'demiss data'
                })
            }
        } catch (error) {
            next(error)
        }
    },
}