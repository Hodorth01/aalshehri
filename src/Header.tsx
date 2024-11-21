import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = ()=> {
  return (
    <>
      <Navbar bg="transparent" data-bs-theme="light" className='nav'>
        <Container>
          <Navbar.Brand href="/">Aalshehri</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}

