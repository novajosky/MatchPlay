import React from 'react'
import {Container, Col, Row} from "react-bootstrap";
import GolfersCard from '../../components/GolfersCard/GolfersCard'

export default function DisplayGolfers({ golfers }) {
  const golfer = golfers.map((u, index) => (
    <GolfersCard key={index} user={u} />
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
