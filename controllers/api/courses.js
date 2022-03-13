const Course = require("../../models/courses");

module.exports = {
    create,
    getAll,
    deleteCourse,
};

async function getAll(req, res) {
    const courses = await Course.find({
        user: req.user._id
    });
    res.json(courses);
}

async function create(req, res) {
    req.body.user = req.user._id
    const course = await Course.create(req.body);
    res.json(course);
}

async function deleteCourse(req, res) {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    console.log(req.body.user)
    res.json(deletedCourse);
}
