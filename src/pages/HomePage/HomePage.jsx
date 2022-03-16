import React from 'react'
import "./HomePage.css"
import golfpic from '../../images/golfoldman.jpeg';
import { Container, Card } from 'react-bootstrap';

export default function HomePage() {
  return (
    <>
    <h1>What is MatchPlay?</h1>
    <Container className='body'>
      <Card className="text-center" border="success" style={{ width: '85vw' }}>
        <Card.Text>Match play is an app that connects golfers of all types. Wether you are a beginner or a seasoned veteran, MatchPlay will allow you to play with like minded people.</Card.Text> <br/>
        <Card.Text>Playing golf as a single player is a crapshoot because you could get matched up with anyone with a much different skill set or mind set than your own which can result in a very poor experience for all parties.</Card.Text><br/>
        <Card.Text>Match Play will allow you to create your golf profile and help find you the right partners for your next golf adventure.</Card.Text><br/>
        <img className="golferpic" src={golfpic}/>
        <br></br>
      </Card>
    </Container>
    </>
  );
}
