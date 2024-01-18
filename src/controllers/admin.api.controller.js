const apiStatus = (num, req, res) => {
    res.status(200).json({

        message: 'ok'
    })
}


const displayUser = (req, res) => {
    apiStatus(200, req, res)
}

const createUser = (req, res) => {
    apiStatus(200, req, res)
}

const updateyUser = (req, res) => {
    apiStatus(200, req, res)
}

const deleteyUser = (req, res) => {
    apiStatus(200, req, res)
}

module.exports = {
    //user
    displayUser,
    createUser,
    updateyUser,
    deleteyUser,
    //
}