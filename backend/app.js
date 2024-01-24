const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
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
