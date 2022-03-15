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
        <Card classsName="text-center" border="success" style={{ width: '85vw' }}>
        <Card.Body>
            Rating: {review.rating}
            <hr />
            {review.content}
            <hr />
            <Button variant="success" size="sm" className='button' onClick={ e => deleteReview(e, review._id)} type="submit">Delete</Button>
            <ReviewCard />
        </Card.Body>
        </Card>
    )
}
