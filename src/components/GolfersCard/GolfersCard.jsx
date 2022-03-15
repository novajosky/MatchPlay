import React from 'react';
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import "./GolfersCard.css";
import ReviewBoard from '../ReviewBoard/ReviewBoard';
import Button from "react-bootstrap/Button";

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <Card border="success">
                <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                <Card.Body>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>{user.citystate}</Card.Text>
                    <Card.Text>Handicap: {user.handicap}</Card.Text>
                    <Card.Text>Alcohol use? {user.drinker}</Card.Text>
                    <Card.Text>{user.meticulous}</Card.Text>
                </Card.Body>
                <Button variant="success" size="sm" component={Link} to={`/golfer/${user._id}`}>Details</Button>
            </Card>
            <ReviewBoard golfer={user}/>
        </div>
    )
}