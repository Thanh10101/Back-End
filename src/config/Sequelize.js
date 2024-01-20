require('dotenv').config()
const { Sequelize, DataTypes, Model } = require('sequelize');

//DB
const db_host = process.env.db_host
const db_user = process.env.db_user
const db_port = process.env.db_port
const db_password = process.env.db_password
const db_name = process.env.db_name
const db_sql = process.env.db_sql


const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: db_sql,
    port: db_port,

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