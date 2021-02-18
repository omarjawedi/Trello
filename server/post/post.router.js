// post.model.js



const express = require('express');
const postRouter = express.Router();
const postService = require('./post.service')


postRouter.route('/posts/add').post(postService.addPost);


postRouter.route('/').get(postService.getAll);
postRouter.route('/posts/:id').get(postService.getById);
postRouter.route('/posts/update').post(postService.editPost)
postRouter.route('/posts/delete').post(postService.deletePost);

module.exports = postRouter;
