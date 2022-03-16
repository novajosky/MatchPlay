import React from 'react';
import { Card } from "react-bootstrap";
import ReviewBoard from '../ReviewBoard/ReviewBoard';

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <br/>
            <Card className="text-center" border="success" style={{ width: '85vw' }}>
                <Card.Body>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>{user.citystate}</Card.Text>
                    <Card.Text>Handicap: {user.handicap}</Card.Text>
                    <Card.Text>Alcohol use? {user.drinker}</Card.Text>
                    <Card.Text>{user.meticulous}</Card.Text>
                </Card.Body>
            </Card>
            <ReviewBoard golfer={user}/>
        </div>
    )
}