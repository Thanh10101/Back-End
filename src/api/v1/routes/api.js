const express = require('express')
const router = express.Router()
const { displayUser, createUser, updateUser, deleteUser } = require('../controllers/admin.api.controller')

const initApi = (app) => {

    router.get('/display-user', displayUser)
    router.post('/create-user', createUser)
    router.put('/update-user', updateUser)
    router.delete('/delete-user/:id', deleteUser)

    return app.use('/api/v1', router)
}

module.exports = initApi