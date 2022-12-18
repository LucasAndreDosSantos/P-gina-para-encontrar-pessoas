const mongoose = require('mongoose');
require("dotenv").config()

const url = process.env.MONGODB_CONNECTION_STRING

//connect to database created in MongoDB Compass
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (!err)
            console.log('Mongodb connection succeeded')
        else
            console.log('Error while connection MongoDB: ' + JSON.stringify(err, undefined, 2))

    })