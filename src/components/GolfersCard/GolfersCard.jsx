import React from 'react'
import {Card, Row, Col} from "react-bootstrap";
import "./GolfersCard.css"

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card style={{ width: '30vw', height: "36vh" }}>
                    <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                    <Card.Body className="cardtext">
                        {user.name}
                        <hr />
                        Location: {user.citystate}
                        <hr />
                        Handicap: {user.handicap}
                        <hr />
                        Alcohol? {user.drinker}
                        <hr />
                        Meticulous? {user.meticulous}
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}