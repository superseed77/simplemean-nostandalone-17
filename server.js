const http = require('http');
const app = require('./backend/app')

const port = process.env.PORT || 3000
const server = http.createServer( app)

server.listen(port)


// const server = http.createServer( (req, res) => {
//     res.end('I am fucking good')
// })
// server.listen(3000)