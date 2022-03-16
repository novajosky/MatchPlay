import React from "react";
import "./ProfilePage.css";
import { Card, Container} from "react-bootstrap";

export default function Profile({ user }) {

  return (
    <>
    <h1 className="title">{user.name}</h1>
    <Container>
      <Card className="text-center" border="success" style={{ width: '85vw' }}>
        <Card.Text>Location: { user.citystate }</Card.Text>
        <Card.Text>Handicap: { user.handicap }</Card.Text>
        <Card.Text>Gender: { user.gender }</Card.Text>
        <Card.Text>How do you feel about alcohol on the course? { user.drinker }</Card.Text>
        <Card.Text>Do you have a preferred gender you would like to play with? { user.pfgender }</Card.Text>
        <Card.Text>Do you mind playing with people much older or younger than you? { user.playage }</Card.Text>
        <Card.Text>How do you feel about drinking on the course? { user.drinker }</Card.Text>
        <Card.Text>Are you a meticulous player? { user.meticulous }</Card.Text>
        <Card.Text>Are you a stickler for eqiquette? { user.etiquette }</Card.Text>
        <Card.Text>How do you feel about playing with players who have a different skillset? { user.skillset }</Card.Text>
      </Card>
    </Container>
    </>
  );
}
