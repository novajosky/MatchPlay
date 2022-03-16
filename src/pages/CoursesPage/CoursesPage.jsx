import React from 'react';
import CourseBoard from '../../components/CourseBoard/CourseBoard';
import CourseMap from '../../components/CourseMap/CourseMap';

export default function CoursesPage() {  

  return (

    <main>
      <h1>Courses</h1>
      <div className="container">
        <CourseBoard />
        <CourseMap />
      </div>

    </main>
  )
}

