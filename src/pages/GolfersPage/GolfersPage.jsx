import React, { useEffect, useState } from 'react';
import {Card} from "react-bootstrap";

export default function GolfersPage() {
  const[user, setUser] = useState([{
    name: '',
    citystate: '',
    handicap: '',
    drinker: '',
  }])

//   getUser = () => {
//     axios.get('api')
//       .then((response) => {
//         const data = response.data;
//         this.setState({ posts: data });
//         console.log('Data has been recieved!');
//       })
//       .catch(() => {
//         alert('error retriving data');
//       });
//   }
// }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>User</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

    // <div className="container">
    //     <div>
    //       <h1>Golfers</h1>
    //       {user.map(user =>
    //       <div>
    //         <h2>{user.name}</h2>
    //         <p>{user.citystate}</p>
    //         <p>{user.handicap}</p>
    //         <p>{user.drinker}</p>
    //       </div>
    //         )}
    //     </div>
    // </div>