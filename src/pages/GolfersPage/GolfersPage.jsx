import React, {useEffect, useState } from 'react';
import * as usersAPI from '../../utilities/users-api';
import ReviewBoard from '../../components/ReviewBoard/ReviewBoard';
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
      <div className="container">
        <DisplayGolfers golfers={golfers}/>
        {/* <ReviewBoard /> */}
      </div>

    </main>
  )
}

