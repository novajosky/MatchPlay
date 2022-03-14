import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import {Button} from "react-bootstrap";

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <h1>Golfers</h1>
            {/* <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body>
                        {user.name}
                        <hr />
                        {user}
                        <hr />
                        {user}
                        <hr />
                        <Button className='button' onClick={ e => deleteCourse(e, course._id)} type="submit">Delete</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </div>
    )
}