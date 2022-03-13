import React, {useState, useEffect} from "react";

export default function Profile({ user }) {

  return (
    <main>
      <h1>Profile</h1>
      <div className="profile">
      <div className="card">
        <header className="card-header">
          <figure className="image profile-avatar">
            <img className="is-rounded" src={user.profile_pic} alt=""/>
          </figure>
          <div className="card-header-content profile-info">
            <h1 className="title">{user.name}</h1>
            <div className="stats">
              <ul>
                <li>Name: { user.name }</li>
                <li>Location: { user.citystate }</li>
                <li>Handicap:{ user.handicap }</li>
                <li>drinker: { user.drinker }</li>
                <li>gender: { user.gender }</li>
                <li>pfgender: { user.pfgender }</li>
                <li>playage: { user.playage }</li>
                <li>drinker: { user.drinker }</li>
                <li>meticulous: { user.meticulous }</li>
                <li>etiquette: { user.etiquette }</li>
                <li>skillset: { user.skillset }</li>
              </ul>
            </div>
            <p>{user.description}</p>
          </div>
        </header>
      </div>
      </div>
    </main>
  );
}
