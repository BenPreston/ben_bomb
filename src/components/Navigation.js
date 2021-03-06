import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";

export default function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <img
          className="statsbomb_logo"
          src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_48yk2xpw/def_height/237/def_width/1485/version/100012/type/1"
          alt="statsbomb_logo"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Stats" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Teams</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Players</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Your Area</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
