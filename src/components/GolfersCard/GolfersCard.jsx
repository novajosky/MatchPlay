import React from 'react'
import {Card, Row, Col} from "react-bootstrap";

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body>
                        {user.name}
                        <hr />
                        Location: {user.citystate}
                        <hr />
                        Handicap: {user.handicap}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}