const Courses = require("../../models/courses");


module.exports = {
    create,
    getAll,
    deleteReview,
};

async function getAll(req, res) {
    const reviews = await Review.find({});
    res.json(reviews);
}

async function create(req, res) {
    req.body.user = req.user._id
    const review = await Review.create(req.body);
    res.json(review);
}

async function deleteReview(req, res) {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    console.log(req.body.user)
    res.json(deletedReview);
}
