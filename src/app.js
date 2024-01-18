require('dotenv').config()
const express = require('express')
const app = express()
const webRouter = require('./routes/web')
const apiRouter = require('./routes/web')
const viewEngine = require('./config/viewEngine')

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config view engine
viewEngine(app)

//router
app.use('/', webRouter)
app.use('/', apiRouter)

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`)
})