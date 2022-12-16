const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [40, 'Should be 40 characters long only']
    }, 
    email: {
        type: String,
        required: [true, 'Please provide an Email'],
        validate: [validator.isEmail, 'Please enter valid email'],
        required: true
    },
    password: {
        type: String,
        required: [true, 'Please provide an Password'],
        minlength: [5, 'Password should be at least 6 characters'],
        select: false
    },
    role: {
        type: String,
        default: 'user'
    },
    photo: {
        id: {
            type: String
        },
        secure_url: {
            type: String
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//encrypt password before save - HOOKS
userSchema.pre('save', async function (next){
   if(!this.isModified('password')) return next();

   this.password = await bcrypt.hash(this.password, 10)
})


//validate the password with passed on user password
userSchema.methods.isValidatePassword = async function(incommingPasssword){
    return await bcrypt.compare(incommingPasssword, this.password)
}

//create and return JWT token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRY
    })
}

//generating forgot password token
userSchema.methods.getForgotPasswordToken = function() {
    //generate a long, random string
    const forgottoken = crypto.randomBytes(20).toString("hex")

    //hashing the token - make sure to hash the incomming token from use to compare with this
    this.forgotPasswordToken = crypto.createHash("sha256").update(forgottoken).digest("hex")

    this.forgotPasswordExpiry = Date.now() + 20*60*1000

    return forgottoken          //returning forgot token not the hash
}

module.exports = mongoose.model('User', userSchema)