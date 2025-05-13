const express = require("express");
const router = express.Router();

const posts = require("../posts");

// INDEX

router.get("", (req, res) => {
  res.json(posts);
  console.log("Lettura di tutti i post");
});

// SHOW

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.find((post) => post.id == id);
  res.json(currentPost);
  console.log("Lettura del post " + id);
});

module.exports = router;
