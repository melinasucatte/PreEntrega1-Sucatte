import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';



const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">TU AMIGO FIEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="GATOS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Alimento</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Higiene</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PERROS" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Alimento</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Higiene</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PEQUEÑOS ANIMALES" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Alimento</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Higiene</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>  
              <Nav.Link href="#deets"> 0<CartWidget /> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar