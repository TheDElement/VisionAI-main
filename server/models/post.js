const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  feeds: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Post', PostSchema);
