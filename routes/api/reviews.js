const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');

//GET all reviews
router.get('/', reviewsCtrl.getAll);
//POST create reviews
router.post('/', reviewsCtrl.create);
//DELETE delete reviews
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router;