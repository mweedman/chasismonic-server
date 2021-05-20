const express = require('express');
const blogService = require('./blog-service');


const blogRouter = express.Router();
const jsonBodyParser = express.json();

blogRouter
  .route('/blog')
  .get();


module.exports = blogRouter;