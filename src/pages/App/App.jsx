import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import MessagesPage from '../MessagesPage/MessagesPage';
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/messages" element={<MessagesPage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
