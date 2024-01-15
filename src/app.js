const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME

//config view engine
app.set('views', path.join(__dirname, 'views'))
app.set('viewengine', 'ejs')

app.get('/', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port,hostname, () => {
    console.log(`Example app listening on port http://${hostname}:${port}`)
})