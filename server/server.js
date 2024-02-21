const express = require('express');
const app = express();
var cors = require('cors')
const authRoute = require('./routes/auth');
const admin = require('./routes/Admin');
const forgotPassword = require('./routes/ForgotPassword');
const dbConnet = require('./config/Database')
require('dotenv').config();

app.use(express.json()); 
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: "hello from backend"})
})


// rotues
app.use('/auth', authRoute);
app.use('/admin', admin);
app.use('/forgotPassword', forgotPassword);


// database connection
dbConnet();


app.listen(process.env.PORT, () => {
    console.log(`server started at PORT ${process.env.PORT}`);
})
