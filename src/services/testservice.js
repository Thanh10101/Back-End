const db = require('../models/index')

var that = module.exports = {
    getAllUser: async () => {
        try {
            return new Promise((resovle, reject) => {
                const User = db.User.findAll({
                    attributes: ['firstName', 'LastName', 'address', 'email', 'phone'],
                    timestamp: false,
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
    }
}
