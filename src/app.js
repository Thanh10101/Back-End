require('dotenv').config()
const express = require('express')
const app = express()
const viewEngine = require('./config/viewEngine')
const initWeb = require('./routes/web')
const initApi = require('./routes/api')

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config view engine
viewEngine(app)

//specifically about POST PUT requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//router
initWeb(app)
initApi(app)

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`)
})