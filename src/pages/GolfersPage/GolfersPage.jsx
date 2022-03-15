import React, {useEffect, useState } from 'react';
import * as usersAPI from '../../utilities/users-api';
import DisplayGolfers from '../../components/DisplayGolfers/DisplayGolfers';

export default function GolfersPage() {  
  const [golfers, setGolfers] = useState([]);

  useEffect(function() {
    async function getGolfers() {
        const golfers = await usersAPI.getAll();
        setGolfers(golfers);
    }
    getGolfers();
}, []);
  console.log(golfers)

  return (

    <main>
      <h1>Golfers</h1>
      <div className="container">
        <DisplayGolfers golfers={golfers}/>
      </div>

    </main>
  )
}

