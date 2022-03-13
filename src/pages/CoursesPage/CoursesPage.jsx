import React from 'react';
import './CoursesPage.css'
import CourseBoard from '../../components/CourseBoard/CourseBoard';
import CourseMap from '../../components/CourseMap/CourseMap';

export default function CoursesPage() {  

  return (

    <main>
      <div className="container">
        <CourseBoard />
        <CourseMap />
      </div>

    </main>
  )
}

