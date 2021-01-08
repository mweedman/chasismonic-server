

const artService = {
  getArtwork(db) {
    return db('artwork')
      .select('*');
  }   


};


module.exports = artService;