import React from 'react'
import "./HomePage.css"
import golfpic from '../../images/golfoldman.jpeg';

export default function HomePage() {
  return (
    <main className='body'>
      <h1>What is MatchPlay?</h1>
      <h6>Match play is an app that connects golfers of all types. Wether you are a beginner or a seasoned veteran, MatchPlay will allow you to play with like minded people.</h6> <br/>
      <h6>Playing golf as a single player is a crapshoot because you could get matched up with anyone with a much different skill set or mind set than your own which can result in a very poor experience for all parties.</h6><br/>
      <h6>Match Play will allow you to create your golf profile and help find you the right partners for your next gold adventure.</h6><br/>
      <img className="golferpic" src={golfpic}/>
    </main>
  );
}
