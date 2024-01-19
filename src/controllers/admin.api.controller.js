const User = require('../models/user')

///set http status qpi 
const apiStatus = (num, req, res) => {
    res.status(200).json({
        message: 'ok'
    })
}
// !Exist create new
const initUser = async () => {
    await User.sync();
}

//Usser

//http://localhost:3000/api/v1/display-user
const displayUser = async (req, res) => {
    // await apiStatus(200, req, res)
    await initUser()
    //function query
    const user = await User.findAll()
    if (user === null) {
        console.log('Not found!');
    } else {
        res.send(JSON.stringify(user, null, 2))
    }
}
//http://localhost:3000/api/v1/create-user
const createUser = async (req, res) => {
    const { firstName, lastName, address, city } = req.body;
    if (!firstName || !lastName || !address || !city) {
        res.send('missing data')
    }
    const jane = await User.create({ firstName: firstName, lastName: lastName, address: address, city: city });
    apiStatus(200, req, res)
}

const updateyUser = (req, res) => {
    apiStatus(200, req, res)
}

const deleteyUser = (req, res) => {
    apiStatus(200, req, res)
}

//


module.exports = {
    //user
    displayUser,
    createUser,
    updateyUser,
    deleteyUser,
    //
}