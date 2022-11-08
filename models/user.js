const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
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
            type: String,
            required: true
        },
        secure_url: {
            type: String,
            required: true
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)