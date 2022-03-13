const Post = require("../../models/posts");

module.exports = {
    create,
    getAll,
    deletePost,
};

async function getAll(req, res) {
    const posts = await Post.find({});
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user._id
    const post = await Post.create(req.body);
    res.json(post);
}

async function deletePost(req, res) {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    console.log(req.body.user)
    res.json(deletedPost);
}
