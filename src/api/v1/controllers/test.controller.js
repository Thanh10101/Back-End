const { getAllUser } = require('../services/testservice')

var that = module.exports = {
    getAllUser: async (req, res, next) => {
        try {
            return res.json({
                data: await getAllUser()
            }
            )

        } catch (error) {
            next(error)
        }
    }
}