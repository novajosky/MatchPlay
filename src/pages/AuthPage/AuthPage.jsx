import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react'
import Logo from '../../components/Logo/Logo';

export default function Auth({ setUser }) {

  const [showSignUp, setShowSignUp] = useState(true);
  
  return (
    <main>
      <div>
        <Logo />
        <button onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? "Switch to Log In" : "Switch to Sign Up"}
        </button>
      </div>
      {showSignUp ? 
        <SignUpForm setUser={setUser}/>
        :
        <LoginForm setUser={setUser}/>
      }
    </main>
  );
}
