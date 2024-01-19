const express = require('express')
const router = express.Router()
const { displayUser, createUser, updateyUser, deleteyUser } = require('../controllers/admin.api.controller')

const initApi = (app) => {
    
    router.get('/display-user', displayUser)
    router.post('/create-user', createUser)
    router.put('/update-user', updateyUser)
    router.delete('/delete-user/:id', deleteyUser)

    return app.use('/api/v1', router)
}

module.exports = initApi