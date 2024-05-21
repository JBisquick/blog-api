const express = require('express');
const router = express.Router();

const post_controller = require('../controller/postController')
const user_controller = require('../controller/userController')

router.get("/", function (req, res) {
  res.redirect("/posts");
});

// Posts
router.get('/posts', post_controller.get_all_posts);

router.put('/posts', post_controller.create_post);

router.get('/posts/:id', post_controller.get_post);

router.post('/posts/:id', post_controller.update_post);

router.delete('/posts/:id', post_controller.delete_post);

// Users
router.post('/login', user_controller.log_in);

router.post('/signup', user_controller.sign_up);

router.post('/logout', user_controller.log_out);

module.exports = router;