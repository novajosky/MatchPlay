const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

//GET all reviews
router.get('/:golferId', reviewsCtrl.getForGolfer);
//POST create reviews
router.post('/:golferId', reviewsCtrl.create);
//DELETE delete reviews
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router;