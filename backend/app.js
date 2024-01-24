const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');
const express = require('express')
const app = express();
app.use((req, res, next) =>{
    console.log('middleware call')
    next()
})

app.use((req, res, next) =>{
   res.send('Hello, it is me')
})

module.exports = app