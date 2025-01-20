const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
router.delete('/delete/:postId', async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    if (post.userId.toString() !== userId) {
      return res.status(403).json({ error: 'Unauthorized to delete this post.' });
    }

    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post.' });
  }
});

module.exports = router;

