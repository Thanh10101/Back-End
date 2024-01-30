const servUser = require('../services/serviceuser')

//User
const displayUser = async (req, res) => {
    const User = await servUser.getUserAll()
    console.log(User)
}

const createUser = async (req, res) => {
    const { firstName, lastName, address, email, phone } = await req.body;
    if (firstName && lastName && address && email && phone) {
        const postUser = await servUser.posttUser(firstName, lastName, email, phone, address)
        res.status(200).send()
    }
    else {

        res.status(404).send()
    }
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