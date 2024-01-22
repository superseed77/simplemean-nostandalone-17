const http = require('http');

const server = http.createServer( (req, res) => {
    res.end('I am fucking good')
})

// server.listen(process.env.PORT || 3000)
server.listen(3000)