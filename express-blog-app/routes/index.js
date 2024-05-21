const express = require('express');
const router = express.Router();

const post_controller = require('../controller/postController')

router.get("/", function (req, res) {
  res.redirect("/posts");
});

// Posts
router.get('/posts', post_controller.get_all_posts);

router.put('/posts', post_controller.create_post);

router.get('/posts/:id', post_controller.get_post)

router.post('/posts/:id', post_controller.update_post)

router.delete('/posts/:id', post_controller.delete_post)

module.exports = router;