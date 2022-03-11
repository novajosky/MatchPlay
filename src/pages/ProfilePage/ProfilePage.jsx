import React, {useState, useEffect} from "react";
// import * as usersAPI from '../..utilities/users-api'


export default function Profile() {
  // const [user] = useState([]);

  // useEffect (function() {
  //   const UserDetail = usersAPI.getUser();
  //   setUser(user);
  // })

  return (
    <main>
      <h1>Profile</h1>
      <div className="profile">
      <div className="card">
        <header className="card-header">
          <figure className="image profile-avatar">
            <img className="is-rounded" src={this.state.profile_pic} alt=""/>
          </figure>
          <div className="card-header-content profile-info">
            <h1 className="title">{this.state.name}</h1>
            <div className="stats">
              <ul>
                <li>Name: { this.state.name }</li>
                <li>Location: { this.state.citystate }</li>
                <li>Handicap:{ this.state.handicap }</li>
                <li>drinker: { this.state.drinker }</li>
                <li>gender: { this.state.gender }</li>
                <li>pfgender: { this.state.pfgender }</li>
                <li>playage: { this.state.playage }</li>
                <li>drinker: { this.state.drinker }</li>
                <li>meticulous: { this.state.meticulous }</li>
                <li>etiquette: { this.state.etiquette }</li>
                <li>skillset: { this.state.skillset }</li>
              </ul>
            </div>
            <p>{this.state.description}</p>
          </div>
        </header>
      </div>
      </div>
    </main>
  );
}
