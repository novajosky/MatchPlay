const Review = require("../../models/review");


module.exports = {
    create,
    getForGolfer,
    deleteReview,
};

async function getForGolfer(req, res) {
    const reviews = await Review.find({golfer: req.params.golferId});
    res.json(reviews);
}

async function create(req, res) {
    req.body.user = req.user._id
    req.body.golfer = req.params.golferId
    const review = await Review.create(req.body);
    res.json(review);
}

async function deleteReview(req, res) {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    console.log(req.body.user)
    res.json(deletedReview);
}
