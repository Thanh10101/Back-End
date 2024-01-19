require('dotenv').config()
const { Sequelize, DataTypes, Model } = require('sequelize');

//DB
const db_host = process.env.db_host
const db_user = process.env.db_user
const db_port = process.env.db_port
const db_password = process.env.db_password
const db_name = process.env.db_name
const db_wfc = process.env.db_waitForConnections
const db_cl = process.env.db_connectionLimit
const db_ql = process.env.db_queueLimit

const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = {
    sequelize,
    DataTypes,
    Model
}