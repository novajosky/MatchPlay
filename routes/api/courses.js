const express = require('express');
const router = express.Router();
const coursesCtrl = require('../../controllers/api/courses');

//GET all courses
router.get('/', coursesCtrl.getAll);
//POST create courses
router.post('/', coursesCtrl.create);
//DELETE delete courses
router.delete('/:id', coursesCtrl.deleteCourse);

module.exports = router;