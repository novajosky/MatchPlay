import React from 'react';
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap";
import "./GolfersCard.css";
import ReviewBoard from '../ReviewBoard/ReviewBoard';
import Button from "react-bootstrap/Button";

export default function DisplayGolfers({ user }) {

    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/120px120">{}</Card.Img>
                <Card.Body>
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
                <Button variant="success" size="sm" component={Link} to={`/golfer/${user._id}`}>Details</Button>
            </Card>
            <ReviewBoard golfer={user}/>
        </div>
    )
}