

const blogService = {

  getBlogs(db) {
    return db('blog')
      .select('*');
  }

};

module.exports = blogService;