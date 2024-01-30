require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const viewEngine = require('./config/viewEngine')
const initWeb = require('./api/v1/routes/web')
const initApi = require('./api/v1/routes/api')

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME
global.process.setMaxListeners(0)
//config view engine
viewEngine(app)
//config cors
app.use(cors({
  origin: '*',
  methods: ['POST', 'GET', 'PUT', 'DELETE']
}))
//specifically about POST PUT requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//router
initWeb.initWebAdmin(app)
initWeb.initWebClient(app)
initApi(app)

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`)
})