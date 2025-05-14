const express = require("express");
const router = express.Router();
const posts = require("../posts");

// INDEX

router.get("", (req, res) => {
  res.json({
    description: "Lista di tutti i post",
    data: posts,
  });
});

// SHOW

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.posts.find((post) => post.id == id);
  res.json({
    description: "Lettura del post " + id,
    data: currentPost,
  });
});

// STORE

router.post("", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// UPDATE

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.posts.find((post) => post.id == id);
  res.send("Sostituzione del post " + id);
});

// MODIFY

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.posts.find((post) => post.id == id);
  res.send("Modifica del post" + id);
});

// DESTROY

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const currentPost = posts.posts.find((post) => post.id == id);
  res.send("Cancellazione del post " + id);
});

// EXPORTING

module.exports = router;
