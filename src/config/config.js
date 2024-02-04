const fs = require('fs');
require('dotenv').config()
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT
const DB_HOST = process.env.DB_HOST
const DB_PASS = process.env.DB_PASSWORD
const DB_SQL = process.env.DB_SQL
const DB_USER = process.env.DB_USER

module.exports = {
    development: {
        username: DB_USER || 'root',
        password: DB_PASS,
        database: DB_NAME,
        host: DB_HOST,
        port: DB_PORT || 3006,
        dialect: DB_SQL,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    test: {
        username: process.env.CI_DB_USERNAME,
        password: process.env.CI_DB_PASSWORD,
        database: process.env.CI_DB_NAME,
        host: DB_HOST,
        port: DB_PORT || 3306,
        dialect: DB_SQL,
        dialectOptions: {
            bigNumberStrings: true
        }
    },
    production: {
        username: process.env.PROD_DB_USERNAME,
        password: process.env.PROD_DB_PASSWORD,
        database: process.env.PROD_DB_NAME,
        host: process.env.PROD_DB_HOSTNAME,
        port: process.env.PROD_DB_PORT,
        dialect: DB_SQL,
        dialectOptions: {
            bigNumberStrings: true,
            // ssl: {
            //     ca: fs.readFileSync(__dirname + '/config.js')
            // }
        }
    }
};