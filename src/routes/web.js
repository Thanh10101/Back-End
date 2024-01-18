const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

const initWeb = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/Details', homeController.getDetails)

    return app.use('/', router)
}

module.exports = initWeb