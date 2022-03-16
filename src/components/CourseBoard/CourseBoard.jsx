import React, { useEffect, useState } from 'react'
import * as coursesAPI from '../../utilities/courses-api'
import CourseForm from '../CourseForm/CourseForm'
import DisplayCourses from '../DisplayCourses/DisplayCourses'

export default function CourseBoard() {
    const [courses, setCourses] = useState([]);

    useEffect(function() {
        async function getCourses() {
            const courses = await coursesAPI.getAll();
            setCourses(courses);
        }
        getCourses();
    }, []);
        async function handleAddCourse(courseData) {
        const course = await coursesAPI.add(courseData);
        setCourses([...courses, course]);
    }

    async function handleDelete(id) {
        const deletedCourse = await coursesAPI.deleteCourse(id)
        const updatedCourses = courses.filter(course => course._id !== deletedCourse._id)
        setCourses (updatedCourses)
    }

    return (
        <main>
            <div></div>
            <CourseForm handleAddCourse={handleAddCourse}/>
            <DisplayCourses handleDelete={handleDelete} courses={courses} />
            <div></div>
        </main>
    )
}

