const getHomepage = (req, res) => {
    res.render("sample.ejs")
}

const getDetails = (req, res) => {
    res.send('Details')
}


module.exports = {
    getHomepage,
    getDetails
}