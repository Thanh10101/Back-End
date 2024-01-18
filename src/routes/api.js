const express = require('express')
const router = express.Router()
const { getHomepage, getDetails } = require('../controllers/homeController')

const initApi = (app) => {
    router.get('/', getHomepage)
    router.get('/Details', getDetails)

    return app.use('/api/v1/', router)
}

module.exports = initApi