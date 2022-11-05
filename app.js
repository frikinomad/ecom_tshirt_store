const { urlencoded } = require('express')
const express = require('express')
require('dotenv').config()
const app = express()
const morgan = require('morgan')
const cookieparser = require('cookie-parser')
const fileUpload = require('express-fileupload')

//regular middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//cookies and file middleware
app.use(cookieparser())
app.use(fileUpload())

//morgan middleware for logging
app.use(morgan('tiny'))

//importing routes
const home = require('./routes/home')

//router as middleware
app.use("/api/v1", home)


//exporting app
module.exports = app