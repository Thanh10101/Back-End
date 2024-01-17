require('dotenv').config()
const mysql = require('mysql2')

//DB
const db_host = process.env.db_host
const db_user = process.env.db_user
const db_port = process.env.db_port
const db_password = process.env.db_password
const db_name = process.env.db_name


// Create the connection to database
const connection = mysql.createConnection({
    host: db_host,
    user: db_user,
    port: db_port,
    password: db_password,
    database: db_name,
});

module.exports = connection