import React from "react";
import "./ProfilePage.css";

export default function Profile({ user }) {

  return (
    <main>
      <h1 className="title">{user.name}</h1>
        <div className="stats">
          <ul>
            <li>Location: { user.citystate }</li>
            <li>Handicap: { user.handicap }</li>
            <li>Gender: { user.gender }</li>
            <li>How do you feel about alcohol on the course? { user.drinker }</li>
            <li>Do you have a preferred gender you would like to play with? { user.pfgender }</li>
            <li>Do you mind playing with people much older or younger than you? { user.playage }</li>
            <li>How do you feel about drinking on the course? { user.drinker }</li>
            <li>Are you a meticulous player? { user.meticulous }</li>
            <li>Are you a stickler for eqiquette? { user.etiquette }</li>
            <li>How do you feel about playing with players who have a different skillset? { user.skillset }</li>
          </ul>
        </div>
    </main>
  );
}
