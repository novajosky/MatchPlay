import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../images/MatchPlay.png';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }

  return (
    <Navbar bg="success" expand="lg" className="color-nav">
      <Container>
        <Navbar.Brand className="logo" href="/"><img className="mplogo" src={logo} alt="MatchPlay"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ?
              <>
              <p className='navp'>Welcome {user.name}</p>
                <Link className="link" to="/profile">My Profile</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/golfers">Golfers</Link>
                <Link className="link" to="/courses">Courses</Link>
                <Link className="link" to="mailto:MikeNovajosky@gmail.com">Contact Us</Link>
                <Link className="link" to="" onClick={handleLogOut}>Log Out</Link>
              </>
              :
              <>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/golfers">Golfers</Link>
                <Link className="link" to="/courses">Courses</Link>
                <Link className="link" to="mailto:MikeNovajosky@gmail.com">Contact Us</Link>
                <Link className="link" to="/login">Log In</Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}