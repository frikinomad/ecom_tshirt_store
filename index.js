//just to connect to the port

const { connect } = require("mongoose");
const app = require("./app");
const connectWithDb = require("./configs/db");

require('dotenv').config()

connectWithDb();

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT}`);
})