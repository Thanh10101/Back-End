require('dotenv').config()
const db = require('../models/index')
const jwt = require('jsonwebtoken')

var that = module.exports = {
    authenToken: async(req, res, next) => {
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
                            req.data = data
                            next()
                        }
                    })
            }
        } catch (error) {

        }
    },
}