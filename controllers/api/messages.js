const { Post } = require("../../routes/api/messages");

async function getAll(req, res) {
    const posts = await Post.find({
        user: req.user._id
    });
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const post = await Post.create(req.body);
    res.json(post);
}