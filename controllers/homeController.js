const BigPromise = require('../middlewares/bigPromise')

exports.home = BigPromise((req, res) => {
    // const db = await something()
    res.status(200).json({
        success: true,
        greeting: "hello from tshirt store"
    })
})

exports.homedummy =async(req, res) => {
    try{
        // const db = await something()
        res.status(200).json({
            success: true,
            greeting: "hello from dummy"
        })
    }catch(error){
        console.log(error);
    }
}