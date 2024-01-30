const express = require('express')
const router = express.Router()
const adminUser = require('../controllers/admin.sever.controller')
const testUser = require('../controllers/test.controller')


const initWebAdmin = (app) => {
    router.get('/display-user', adminUser.displayUser)
    router.post('/create-user', adminUser.createUser)
    router.put('/update-user', adminUser.updateUser)
    router.delete('/delete-user/:id', adminUser.deleteUser)

    return app.use('/admin', router)
}

const initWebClient = (app) => {
    router.get('/', testUser.getAllUser)
    return app.use('/', router)
}

module.exports = {
    initWebAdmin,
    initWebClient
}