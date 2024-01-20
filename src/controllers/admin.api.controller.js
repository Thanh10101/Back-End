const User = require('../models/user')

///set http status qpi 
const apiStatus = (num, req, res, noffi) => {
    if (num == 200) {
        res.status(num).json({
            message: 'ok',
            noffication: noffi
        })
    }
    if (num == 400) {
        res.status(num).json({
            message: 'Something went wrong!',
            enoffication: noffi
        })
    }
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
        apiStatus(400, req, res, 'User is empty!')
    } else {
        res.send(JSON.stringify(user, null, 2))
    }
}
//http://localhost:3000/api/v1/create-user
const createUser = async (req, res) => {
    const { firstName, lastName, address, city } = req.body;
    if (!firstName || !lastName || !address || !city) {
        apiStatus(400, req, res, 'Don\'t let data emty!')

    }

    const jane = await User.create({ firstName: firstName, lastName: lastName, address: address, city: city });
    apiStatus(200, req, res, 'Create success!')
}

const updateUser = (req, res) => {
    apiStatus(200, req, res)
}

const deleteUser = (req, res) => {
    apiStatus(200, req, res)
}

//


module.exports = {
    //user
    displayUser,
    createUser,
    updateUser,
    deleteUser,
    //
}