import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import {useEffect} from "react";

export const Header = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 800, // Customize the animation duration if needed
      once: true, // Trigger animation only once
      mirror: false, // Do not trigger animation when scrolling back up
    });
  }, []);
  return (
    <>
      <Navbar bg="transparent" data-bs-theme="light" className='nav'>
        <Container data-aos="fade-in" data-aos-delay="300">
          <Navbar.Brand href="/" >Aalshehri</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/gallary">Gallery</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </>
  );
}
