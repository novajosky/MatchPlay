import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function ReviewCard({ review, handleDelete }) {
    if (!review) return null;
    function deleteReview(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        {review.rating}
                        <hr />
                        {review.content}
                        <hr />
                        <Button className='button' onClick={ e => deleteReview(e, review._id)} type="submit">Delete</Button>
                        <hr />
                        {review.timestamp}
                        <hr />
                        <ReviewCard />
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
