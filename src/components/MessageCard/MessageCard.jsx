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
            <Card border="success">
                <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                <Card.Body>
                    <Card.Text>{post.title}</Card.Text>
                    <Card.Text>{post.content}</Card.Text>
                    <Button variant="success" className='button' onClick={ e => deletePost(e, post._id)} type="submit">Delete</Button>
                </Card.Body>
            </Card>
            {/* <ReviewBoard /> */}
        </div>
    )
}
