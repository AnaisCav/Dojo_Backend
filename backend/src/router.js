const express = require("express");
const router = express.Router();

const postController = require("./controllers/post.controller.js");

router.get("/post", postController.browse);
router.get("/post/:id", postController.read);
router.post("/post", postController.add);
router.put("/post/:id", postController.edit);
router.delete("/post/:id", postController.destroy);

module.exports = router;
