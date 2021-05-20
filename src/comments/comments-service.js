const CommentsService = {
  getComments(db) {
    return db('comments')
      .select('*');
  },

  postComment(db, user_id, data) {

  },

  updateComment(db, comment_id, data) {

  },

  deleteComment(db, comment_id) {

  }

};

module.exports = CommentsService;