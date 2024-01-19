const dataTypes = require('sequelize/lib/data-types');
const { sequelize, DataTypes } = require('../config/Sequelize');
const connection = require('../config/db');
const User = require('../models/user')

const getHomepage = async (req, res) => {

}

const getDetails = (req, res) => {
    // A simple SELECT query
    connection.query(
        'SELECT * FROM persons',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}


module.exports = {
    getHomepage,
    getDetails
}