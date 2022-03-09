import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import MessagesPage from '../MessagesPage/MessagesPage';
import GolfersPage from '../GolfersPage/GolfersPage';
import CoursesPage from '../CoursesPage/CoursesPage';
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service';
import Sidebar from '../../components/Sidebar/Sidebar';

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
            <Route path="/golfers" element={<GolfersPage />}/>
            <Route path="/courses" element={<CoursesPage />}/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
