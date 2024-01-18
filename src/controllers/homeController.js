const connection = require('../config/db')

const getHomepage = (req, res) => {
    return res.render("homepage.ejs")
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