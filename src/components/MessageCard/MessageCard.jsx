import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
// import ReviewBoard from '../ReviewBoard/ReviewBoard';
import './MessageCard.css';

export default function DisplayMessages({ post, handleDelete }) {
    function deletePost(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <div>
            <Card className="text-center" border="success" style={{ width: '85vw' }}>
                <Card.Body>
                    <Card.Text size="sm">{post.title}</Card.Text>
                    <Card.Text size="sm">{post.content}</Card.Text>
                    <Button size="sm" variant="success" className='button' onClick={ e => deletePost(e, post._id)} type="submit">Delete</Button>
                </Card.Body>
            </Card>
            {/* <ReviewBoard /> */}
        </div>
    )
}
