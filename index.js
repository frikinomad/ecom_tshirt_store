const { connect } = require("mongoose");
const app = require("./app");
const connectWithDb = require("./configs/db");
require('dotenv').config()
const cloudinary = require('cloudinary')


//database config
connectWithDb();


//cloudinary config
cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key:  process.env.CLOUDINARY_API_KEY,
    // secret_key: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "dqwuf58sd",
    api_key: "226949292131988",
    api_secret: "lqQFNYepwB3ULIhZ_dsLbKVwUKw",
})



app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`);
})