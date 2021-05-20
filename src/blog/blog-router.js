const express = require('express');
const BlogService = require('./blog-service');


const blogRouter = express.Router();
const jsonBodyParser = express.json();

blogRouter
  .route('/')
  .get(async (req, res, next) => {
    try{
      const blogPosts = await BlogService.getBlogs(
        req.app.get('db')
      );
      res.json({
        blogPosts
      });
      next();
    }
    catch(error) {
      next(error);
    }
  })
  .post(jsonBodyParser, async(req, res, next) => {

  }) 
  .put(jsonBodyParser, async(req, res, next) => {

  })
  .delete();

module.exports = blogRouter;