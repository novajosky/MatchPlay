import React from 'react'
import {Container, Col, Row} from "react-bootstrap";
import GolfersCard from '../../components/GolfersCard/GolfersCard'

export default function DisplayCourses({ users }) {
  const golfer = courses.map((g, index) => (
    <GolfersCard key={index} golfer={g} />
  ))

  return (
    <div>
      <Container>
        <Row>
          <Col sm='4'>
            {golfer}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
