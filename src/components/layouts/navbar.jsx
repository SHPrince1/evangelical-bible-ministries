import React from "react";
// import { ReactDOM } from "react-dom";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  
  Nav,
  Navbar,
  NavDropdown,
 
} from "react-bootstrap";
import "../../styles/navbar.css";

function CusNavbar() {
  return (
    <div className="all">
      <Navbar
        className="color-nav fixed-top"
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Container className="cent">
          <Navbar.Brand href="/">Evangelical Bible Ministries INC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              {/* nav content */}
              <Nav.Link className="new" href="/">
                Home
              </Nav.Link>

              <Nav.Link className="new" href="about-us">
                About Us
              </Nav.Link>
              
             
              <Nav.Link className="new" href="/contact">
                Contact Us
              </Nav.Link>

              <NavDropdown title="Media" className="new">
              <NavDropdown.Item href="/article">
                Articles
                </NavDropdown.Item>
                <NavDropdown.Item className="dropi" href="/vission">
                Word Gallery
                </NavDropdown.Item>
                <NavDropdown.Item href="/history">
                Something
                </NavDropdown.Item>
              </NavDropdown>

              
              <Nav.Link className="new" href="/giving">
                Online Giving
              </Nav.Link>
              

              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item className="dropi" href="#action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="dropi" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="dropi" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

              {/* <Nav.Link className="new" eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default CusNavbar;
