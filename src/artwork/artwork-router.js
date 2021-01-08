const express = require('express');
const ArtService = require('./artwork-service');


const artRouter = express.Router();
const jsonBodyParser = express.json();

artRouter
  .route('/')
  .get(async (req, res, next) => {
    try {
      const artwork = await ArtService.getArtwork(
        req.app.get('db')
      );
      res.json({
        artwork
      })
      next()
    }
    catch(error) {
      next(error)
    }
  })
  .post(jsonBodyParser, async(req, res, next) => {
    const newArt = req.body;

  })

module.exports = artRouter;