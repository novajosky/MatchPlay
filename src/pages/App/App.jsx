import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import MessagesPage from '../MessagesPage/MessagesPage';
import GolfersPage from '../GolfersPage/GolfersPage';
// import GolferCardDetail from '../GolferCardDetail/GolferCardDetail';
import CoursesPage from '../CoursesPage/CoursesPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/profile" element={<ProfilePage user={user} />}/>
        <Route path="/messages" element={<MessagesPage />}/>
        <Route path="/golfers" element={<GolfersPage />}/>
        <Route path="/courses" element={<CoursesPage />}/>
        <Route path="/login" element={<AuthPage setUser={setUser}/>}/>
        {/* <Route path="/golfer/:id" element={<GolferCardDetail />}/> */}
      </Routes>
    </main>
  );
}
