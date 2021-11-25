const PostMessage = require("../models/postMessage.js");

const getPosts = (req, res) => {
  res.send("THIS WORKS");
};

const createPost = (req, res) => {
  res.send("Post creation");
};

module.exports = getPosts;
module.exports = createPost;
