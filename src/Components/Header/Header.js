import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContect } from "../../Context/UserContext";

import LeftSideNav from "../../Pages/Shared/LeftSideNave/LeftSideNav";

const Header = () => {
  const { user, logout } = useContext(AuthContect);
  console.log("user", user?.displayName);
  const handleLogout = () => {
    logout()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon News</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">All News</Nav.Link>
              <Nav.Link href="#link">
                {user?.uid && "Welcome " + (user.displayName || user.email)}
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {user?.uid ? (
                <Button variant="primary" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Link className="m-2" to="/login">
                    Login
                  </Link>
                  <Link className="m-2" to="/sign-up">
                    Register
                  </Link>
                </>
              )}

              <Nav.Link>
                <Link to="/profile">
                  {user?.photoURL ? (
                    <Image
                      style={{ height: "40px" }}
                      roundedCircle
                      src={user?.photoURL}
                    ></Image>
                  ) : (
                    <FaUserAlt className="my-auto"></FaUserAlt>
                  )}
                </Link>
              </Nav.Link>
            </Nav>

            <div className="d-lg-none d-block">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
