const express = require('express');
const ArtService = require('./artwork-service');


const artRouter = express.Router();
const jsonBodyParser = express.json();

artRouter
  .route('/')
  .get('/')
  .post('/')
  .patch('/:id');

module.exports = artRouter;