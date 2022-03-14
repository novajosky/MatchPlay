import React from 'react'
import {Container, Col, Row} from "react-bootstrap";
import CourseCard from '../../components/CourseCard/CourseCard'
import "./DisplayCourses.css"

export default function DisplayCourses({ courses, handleDelete }) {
  const course = courses.map((c, index) => (
    <CourseCard key={index} course={c} handleDelete={handleDelete} />
  ))

  return (
    <div>
      <Container className="container">
        <Row>
          {course}
        </Row>
      </Container>
    </div>
  )
}
