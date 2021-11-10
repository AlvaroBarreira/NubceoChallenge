import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'

function Navigation() {

    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem("token");
        history.push('/')
    }

    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand className="navbar-brand text-white" href="/home">apibands</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="drop">
                        <Nav.Link className="justify-content-center text-white" href="/home">Home</Nav.Link>
                        <Nav.Link className="justify-content-center text-white" href="/list">Bands</Nav.Link>
                        <Nav.Link className="justify-content-center text-white" onClick={() => logOut()}>Log Out</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
