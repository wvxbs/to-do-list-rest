const mongoose = require('mongoose')
require('dotenv').config({  path : '.env'})

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

mongoose.Promise = global.Promise

mongoose.connection.on("error", (err) => {
    console.error(`Database connection error -> ${err.message}`)
})

const app = require('./App')

const server = app.listen(3001, () => {
    console.log(`Express running PORT ->${server.address().port}`)
})