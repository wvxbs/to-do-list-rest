const app = require('./App')

const server = app.listen(3001, () => {
    console.log(`Express running PORT ->${server.address().port}`)
})