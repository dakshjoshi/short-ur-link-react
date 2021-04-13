import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <NavbarBrand href="/" className="text-light">
            SHORT UR LINK
          </NavbarBrand>
          <Nav>
            <NavItem className="m-1">
              <Link className="btn btn-info rounded-0" to="/register">
                Register
              </Link>
            </NavItem>
            <NavItem className="m-1">
              <Link className="btn btn-info rounded-0" to="/login">
                Login
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
