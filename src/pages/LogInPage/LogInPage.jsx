import React from 'react'
import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import { getUser } from '../../utilities/users-service';

export default function LogInPage() {
  const [user, setUser] = useState(getUser());
  return (
    <main>
      <AuthPage user={user} setUser={setUser}/>
    </main>

  )
}
