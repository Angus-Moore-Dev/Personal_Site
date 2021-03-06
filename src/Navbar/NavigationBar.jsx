import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to="/Projects" className="nav-link">Projects</Link>
                    <Link to="/HireMe" className="nav-link">Hire Me</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}