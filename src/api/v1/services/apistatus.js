
const apiStatus = (num, req, res, noffi) => {
    if (num == 200) {
        res.status(num).json({
            message: "ok",
            noffication: noffi
        })
    }
    if (num == 400) {
        res.status(num).json({
            message: "error",
            noffication: noffi
        })
    }
}

module.exports = apiStatus