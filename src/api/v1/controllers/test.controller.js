const { emit } = require('nodemon')
const { getAllUser, getUserById, postUser } = require('../services/testservice')

var that = module.exports = {
    getAllUser: async (req, res, next) => {
        try {
            return res.status(200).json({
                data: await getAllUser()
            }
            )

        } catch (error) {
            next(error)
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params
            return res.status(200).json({
                data: await getUserById(id)
            })
        } catch (error) {
            next(error)
        }
    },
    postUser: async (req, res, next) => {
        try {
            const info = { firstName, lastName, phone, email, address } = req.body
            info.roleId = 1
            if (firstName && lastName && phone && email && address) {
                return res.status(200).json({
                    data: await postUser(info)
                })
            }
            else {
                res.status(404).json({
                    message: 'demiss data'
                })
            }
        } catch (error) {
            next(error)
        }
    }
}