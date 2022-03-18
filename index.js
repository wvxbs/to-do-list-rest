const express = require('express)
const app = express()
const port = 3001
const ip = require("ip")

app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', "*")
    res.setHeader('Acess-Control-Allow-Headers', "*")
    res.setHeader('Acess-Control-Allow-Credentials', "true")
    next()
})

app.listen(port, () => {
    console.log(`Server running at ${ip.adress()}:${port}`)
})
