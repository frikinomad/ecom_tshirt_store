const cookieToken = (user, res) => {
    const token = user.getJwtToken()            //this method is there in user models

    const options = {
        expires: new Date(Date.now() + 3*24*60*1000),      //for 3 days
        httpOnly: true
    }

    user.password = undefined

    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    })
}


module.exports = cookieToken