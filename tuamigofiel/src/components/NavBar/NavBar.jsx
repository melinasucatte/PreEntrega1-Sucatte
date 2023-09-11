import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';




const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to='/'>TU AMIGO FIEL</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/category/alimento'>ALIMENTO</NavLink>
              <NavLink to='/category/accesorios'>ACCESORIOS</NavLink>
              <NavLink to='/category/higiene'>HIGIENE</NavLink>
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