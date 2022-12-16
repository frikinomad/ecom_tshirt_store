const { urlencoded } = require('express')
const express = require('express')
require('dotenv').config()
const app = express()
const morgan = require('morgan')
const cookieparser = require('cookie-parser')
const fileUpload = require('express-fileupload')

//for swagger docs
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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
const user = require('./routes/user')

//router as middleware
app.use("/api/v1", home)
app.use("/api/v1", user)


//exporting app
module.exports = app