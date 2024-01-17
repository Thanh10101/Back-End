require('dotenv').config()
const express = require('express')
const app = express()
const webRouter = require('./routes/web')
const viewEngine = require('./config/viewEngine')
//database
// Get the client
const mysql = require('mysql2')

//Config env
const port = process.env.PORT || 3001
const hostname = process.env.HOST_NAME
const passworddb = process.env.PASSWORDDB


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: passworddb,
  database: 'bookstore',
});

// A simple SELECT query
connection.query(
  'SELECT * FROM persons',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// Using placeholders



//config view engine
viewEngine(app)


//router
app.use('/', webRouter)

app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`)
})