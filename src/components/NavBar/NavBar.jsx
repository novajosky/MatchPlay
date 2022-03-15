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
    <Navbar bg="success" expand="lg" className="color-nav" sticky="top">
      <Container>
        <Navbar.Brand className="logo" href="/"><img className="mplogo" src={logo} alt="MatchPlay"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ?
              <>
              <p className='navp'>Welcome {user.name}&nbsp;&nbsp;</p>
                <Link className="link" style={{ textDecoration: 'none' }} to="/profile">&nbsp;&nbsp;My Profile&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/messages">&nbsp;&nbsp;Messages&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/golfers">&nbsp;&nbsp;Golfers&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/courses">&nbsp;&nbsp;Courses&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/mail">&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="" onClick={handleLogOut}>&nbsp;&nbsp;Log Out&nbsp;&nbsp;</Link>
              </>
              :
              <>
                <Link className="link" style={{ textDecoration: 'none' }} to="/messages">&nbsp;&nbsp;Messages&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/golfers">&nbsp;&nbsp;Golfers&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/courses">&nbsp;&nbsp;Courses&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/mail">&nbsp;&nbsp;Contact Us&nbsp;&nbsp;</Link>
                <Link className="link" style={{ textDecoration: 'none' }} to="/login">&nbsp;&nbsp;Log In&nbsp;&nbsp;</Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}