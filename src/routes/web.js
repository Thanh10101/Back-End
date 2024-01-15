const express = require('express')
const router = express.Router()
const { getHomepage, getDetails } = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/Details', getDetails)

module.exports = router