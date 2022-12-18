require('./db')
const express = require('express')
const cors = require('cors')
require("dotenv").config();

var postReencontroRoutes = require('./controllers/postagemReencontroControllers.js')

var app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:3000' }))

app.use('/', postReencontroRoutes)

const PORT = 4000;

app.listen(PORT, () => console.log(`Server started at: ${PORT}`))