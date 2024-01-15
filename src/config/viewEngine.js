const express = require('express')
const path = require('path')

const viewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('viewengine', 'ejs')

    //config static file
    app.use(express.static(path.join('./src', 'public')))
}
module.exports = viewEngine