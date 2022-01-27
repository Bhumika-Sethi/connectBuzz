const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller');

console.log('post route and controller is working fine');


router.get('/post', postController.posts);
module.exports = router;