import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";
import './MessageCard.css';

export default function DisplayMessages({ post, handleDelete }) {
    function deletePost(e, id) {
        e.preventDefault();
        handleDelete(id);
    }
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body>
                        {post.title}
                        <hr />
                        {post.content}
                        <hr />
                        <Button className='button' onClick={ e => deletePost(e, post._id)} type="submit">Delete</Button>
                        <hr />
                        {post.timestamp}
                        <hr />
                        <input></input>
                        <Button onClick="" className="commentbutton" type="submit">Comment</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
