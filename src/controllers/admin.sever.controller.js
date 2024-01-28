const serviceUser = require('../services/serviceuser')
const User = require('../models/user')
const Role = require('../models/role')
const Route = require('../models/route')
const roleRoute = require('../models/role-route')
const Models = require('../models/index')
const role = require('../models/role')
//Function support

//User

const displayUser = async (req, res) => {
    // const query = await Models.User.findAll({
    //     where: { roleid: 2 },
    //     include : Role
    // })
    try {
        const query2 = await Models.User.findAll({
            where: { id: 1 },
            include: [{
                model: Models.Role,
                as: 'roleData',

            }]
        })
        const query3 = await Models.Role.findAll({
            where: { id: 1 },
            attributes: ['name'],
            include: [{
                model: Models.Route,
                attributes: ['url'],
                as: 'routeData',

            }]
        })
        const query4 = await Models.roleRoute.findAll({
            where: { id: 1 },
            include: [{
                model: Models.Role,
                attributes: ['name'],
                as: 'roleData',

            }]
        })
        // )

        // let Role = query2.Role()
        // res.send(JSON.stringify(Role, null, 2))
        // const query4 = await query2.getRole()
        // res.send(JSON.stringify(query2, null, 2))
        console.log(JSON.stringify(query4, null, 2))

    }
    catch (err) {
        console.log(err)
    }
}

const createUser = (req, res) => {

}

const updateUser = (req, res) => {

}

const deleteUser = (req, res) => {

}
module.exports = {
    displayUser,
    updateUser,
    createUser,
    deleteUser,
}