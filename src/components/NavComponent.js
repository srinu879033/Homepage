import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import styles from "../styles/NavStyles";
import "bootstrap/dist/css/bootstrap.min.css";
const useStyles = makeStyles(styles);

const NavComponent = () => {
  const classes = useStyles();

  return (
    /*<nav>
      <ul>
        <li>Menu</li>
        <li>Ritual</li>
        <li>Who We Are</li>
      </ul>
    </nav>*/
    <Navbar fixed="top" className={classes.navContainer}>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Nav.Link href="#home" className={classes.listItem}>
          Menu
        </Nav.Link>
        <Nav.Link href="#home" className={classes.listItem}>
          Ritual
        </Nav.Link>
        <Nav.Link href="#features" className={classes.listItem}>
          Who We Are
        </Nav.Link>
      </Container>
    </Navbar>
  );
};
export default NavComponent;
