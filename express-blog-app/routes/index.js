const express = require('express');
const router = express.Router();
const verifyToken = require('../auth/verifyToken');

const post_controller = require('../controller/postController')
const user_controller = require('../controller/userController')
const comment_controller = require('../controller/commentController')

router.get("/", function (req, res) {
  res.redirect("/posts");
});

// Posts Routing
router.get('/posts', post_controller.get_all_posts);

router.get('/posts/:id', post_controller.get_post);

router.post('/posts', verifyToken, post_controller.create_post);

router.put('/posts/:id', verifyToken, post_controller.update_post);

router.delete('/posts/:id', verifyToken, post_controller.delete_post);

// Users Routing
router.post('/login', user_controller.log_in);

router.post('/signup', user_controller.sign_up);

// Comments Routing
router.post('/posts/:postid/comments', verifyToken, comment_controller.create_comment)

router.delete('/comments/:id', verifyToken, comment_controller.delete_comment);

module.exports = router;