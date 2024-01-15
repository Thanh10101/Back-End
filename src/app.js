require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const webRouter = require('./routes/web')
const viewEngine = require('./config/viewEngine')

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config view engine
viewEngine(app)

//router
app.use('/', webRouter)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})