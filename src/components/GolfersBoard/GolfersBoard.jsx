import React, { useEffect, useState } from 'react'
import * as usersAPI from '../../utilities/users-api'
import DisplayGolfers from '../DisplayGolfers/DisplayGolfers'

export default function GolfersBoard() {
    const [golfers, setGolfers] = useState([]);

    useEffect(function() {
        async function getGolfers() {
            const golfers = await usersAPI.getAll();
            setGolfers(golfers);
        }
        getCourses();
    }, []);

    return (
        <main>
            <div></div>
            <DisplayGolfers />
            <div></div>
        </main>
    )
}

