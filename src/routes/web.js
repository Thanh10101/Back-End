const express = require('express')
const router = express.Router()
const { getHomepage, getDetails } = require('../controllers/homeController')

const initWeb = (app) => {
    router.get('/', getHomepage)
    router.get('/Details', getDetails)

    return app.use('/', router)
}

module.exports = initWeb