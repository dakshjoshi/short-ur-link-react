import React from "react";
//import { Nav, NavItem, Navbar, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Heading";
import { LoginRegister } from "./components/LoginRegister";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <LoginRegister />
    </div>
  );
};

{
  /* <Navbar className="bg-dark">
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
      </Navbar> */
}
