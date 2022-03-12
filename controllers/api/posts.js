const Post = require("../../models/posts");

module.exports = {
    create,
    getAll,
    deletePost,
};

async function getAll(req, res) {
    const posts = await Post.find({
        user: req.user._id
    });
    res.json(posts);
}

async function create(req, res) {
    console.log(req.body.user)
    req.body.user = req.user._id
    console.log(req.body.user)
    const post = await Post.create(req.body);
    res.json(post);
}

async function deletePost(req, res) {
    const posts = await Post.findOneAndDelete({ 
        user: req.user._id 
    });
    res.json(posts);
}
