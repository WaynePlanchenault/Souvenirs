const { Mongoose } = require("mongoose");
const PostMessage = require("../models/postMessage.js");

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
    // error 409 La requête ne peut être traitée en l’état actuel.
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  // check if _id is a mongoose object id
  const post = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};

module.exports = {
  getPosts: getPosts,
  createPost: createPost,
  updatePost: updatePost,
};
// si double ligne de module exports Error: Route.get() requires a callback function but got a [object Undefined]
