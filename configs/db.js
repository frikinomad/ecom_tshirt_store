const mongoose = require('mongoose')

const connectWithDb = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewURLParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB is connected"))
    .catch(error => {
        console.log("connection encountered error");
        console.log(error);
        process.exit(1)
    })
}

module.exports = connectWithDb