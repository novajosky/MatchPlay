const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

//GET all posts
router.get('/', postsCtrl.getAll);
//POST create posts
router.post('/', postsCtrl.create);
//DELETE delete posts
router.post('/', postsCtrl.deletePost);

module.exports = router;