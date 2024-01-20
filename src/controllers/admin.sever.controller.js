const serviceUser = require('../services/serviceuser')

//Function support

//User

const displayUser = (req, res) => {
    res.render('sample.ejs')
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