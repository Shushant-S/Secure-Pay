const mongoose = require('mongoose');

require('dotenv').config()

const dbConnet = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection established"))
    .catch((err) => {
        console.log("DB connection issue");
        console.log(err);
        process.exit(1);
    })
}

module.exports = dbConnet;