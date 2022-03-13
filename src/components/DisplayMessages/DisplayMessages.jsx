import React from 'react'
import {Container, Col, Row} from "react-bootstrap";
import MessageCard from '../../components/MessageCard/MessageCard'

export default function DisplayMessages({ posts, handleDelete }) {
  const post = posts.map((p, index) => (
    <MessageCard key={index} post={p} handleDelete={handleDelete} />
  ))

  return (
    <div>
      <Container>
        <Row>
          <Col sm='4'>
            {post}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
