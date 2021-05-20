const express = require('express');
const CommentsService = require('./comments-service');

const commentsRouter = express.Router();
const jsonBodyParser = express.json();

commentsRouter
  .route('/')
  .get()
  .post()
  .put()
  .delete();

module.exports = commentsRouter;