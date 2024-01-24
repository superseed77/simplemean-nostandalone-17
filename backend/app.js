const express = require("express");
const bodyParser = require("body-parser")
const Post = require('./models/post')
const mongoose = require('mongoose')

const app = express();
mongoose.connect('mongodb+srv://creachyann:PHx19m4f04cYEGjL@cluster0.sqgldfc.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to atlas DB'))
.catch(()=> console.log('Connection failed'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false})) //only standard encoding


// middleware
app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    next()
})

app.post("/api/posts", (req, res, next) => {
    //const post = req.body
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    console.log(post)
    res.status(201).json({
        message: 'Post added'
    })
    next()

})


// middleware
app.get("/api/posts", (req, res, next) => {
  const posts = [
    { id: "id", title: "title", content: "form express" },
    { id: "id2", title: "title2", content: "form express2" },
  ];

  res.status(200).json({
    message: "Posts from server",
    posts: posts,
  });
});

module.exports = app;
