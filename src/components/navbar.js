import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

function Navbar_new() {
  return (
   <Navbar collapseOnSelect expand="lg" style={{height:'5rem'}}>
     <Container>
        <Navbar.Brand href="#home">YourChallenge</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
             </Nav>
             <Nav>
                <Nav.Link href="#deets">Product</Nav.Link>
                <Nav.Link href="#deets">Download</Nav.Link>
                <Nav.Link href="#deets">Pricing</Nav.Link>
             </Nav>
           </Navbar.Collapse>
       </Container>
  </Navbar>
  )
}

export default Navbar_new