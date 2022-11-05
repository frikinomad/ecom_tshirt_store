exports.home = (req, res) => {
    res.status(200).json({
        success: true,
        greeting: "hello from tshirt store"
    })
}

exports.homedummy = (req, res) => {
    res.status(200).json({
        success: true,
        greeting: "hello from dummy"
    })
}