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
            <Card>
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body>
                        {post.title}
                        <hr />
                        {post.content}
                        <hr />
                        <Button className='button' onClick={ e => deletePost(e, post._id)} type="submit">Delete</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Card>
            {/* <ReviewBoard /> */}
        </div>
    )
}
