import React from 'react'
import {Container, Col, Row} from "react-bootstrap";
import ReviewCard from '../../components/ReviewCard/ReviewCard'

export default function DisplayReviews({ reviews, handleDelete }) {
  const review = reviews.map((r, index) => (
    <ReviewCard key={index} review={r} handleDelete={handleDelete} />
  ))

  return (
    <div>
      <Container>
        <Row>
          <Col sm='4'>
            {review}
          </Col>
        </Row>
      </Container>
    </div>
  )
}