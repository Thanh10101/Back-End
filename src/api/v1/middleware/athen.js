require('dotenv').config()
const db = require('../models/index')
const jwt = require('jsonwebtoken')

var that = module.exports = {
    verifyToken: async(req, res, next) => {
        try {
            const authorizationHeader = req.headers['authorization']
                //'beaer [token]'
            const token = authorizationHeader.split(' ')[1]
            if (!token) {
                res.status(401)
            } else {
                jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
                    (err, data) => {
                        if (err) {
                            res.status(403)
                        } else {
                            const tokenExpired = decoded.exp < Date.now() / 1000;
                            if (tokenExpired) {
                                this.refeshToken
                            } else {
                                next()
                            }
                        }
                    })
            }
        } catch (error) {

        }
    },
    refeshToken: async(req, res, next) => {
        try {
            const token = req.body.token
            const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
                if (err) {
                    res.status(403)
                } else {
                    req.data = data
                }
            })
            if (user === null || user === undefined) {
                return res.status(403).json({
                    message: 'User not login or exist token'
                })
            } else {
                const refeshToken = jwt.sign(user, process.env.REFESH_TOKEN_SECRET)
                res.status(200).json({
                    refeshToken
                })
                next()
            }

        } catch (error) {

        }
    }
}