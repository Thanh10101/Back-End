require('dotenv').config()
const { emit } = require('nodemon')
const { getAllUser, getUserById, postUser, login, getUserByEmail } = require('../services/testservice')
const {} = require('../middleware/athen')
const session = require('express-session')
const jwt = require('jsonwebtoken')

const that = module.exports = {
    login: async(req, res, next) => {
        try {
            const request = {
                    email,
                    password
                } = req.body
                //check email or pass are exist
            if (!email || !password) {
                res,
                Status(404)
            }
            else {
                //testservice login()
                const checkLogin = await login(request)
                if (checkLogin) {
                    const user = {
                        email: checkLogin.email,
                        id: checkLogin.id,
                        roleId: checkLogin.roleId
                    }
                    const accessToken = await jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30000s' })
                    res.status(200).json({ accessToken })

                } else {
                    return res.status(404).json({
                        massage: 'user not exist'
                    })
                }
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