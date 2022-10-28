import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Image from 'next/image';

const NavBar = () => {
    const expand = 'md'

    return ( 
      <>

      <Navbar key={expand} bg="white" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
            <Image
              src="/images/logo.svg" 
              height='60' 
              width='60' 
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-center flex-grow-1 pe-3" variant='pills' defaultActiveKey="#action1">
              <Nav.Link href="#action1" >Home</Nav.Link>
              <Nav.Link href="#action2">About Us</Nav.Link>
              <Nav.Link href="#action3">Services</Nav.Link>
              <Nav.Link href="#action4">Our work</Nav.Link>
            </Nav>
            <hr/>
            <Nav className="justify-content-end  pe-3" variant='pills' defaultActiveKey="#action1">
              <Nav.Link href="#action5">Contact Us</Nav.Link>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
     );
}
 
export default NavBar;