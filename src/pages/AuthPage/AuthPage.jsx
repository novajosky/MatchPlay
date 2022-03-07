import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from 'react'

export default function Auth({ setUser }) {

  const [showSignUp, setShowSignUp] = useState(true);
  
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Switch to Log In" : "Switch to Sign Up"}
      </button>
      {showSignUp ? 
        <SignUpForm setUser={setUser}/>
        :
        <LoginForm setUser={setUser}/>
      }
    </main>
  );
}
