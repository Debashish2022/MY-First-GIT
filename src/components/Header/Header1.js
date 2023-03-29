import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  Image,
} from "react-bootstrap";
import "./Header1.css";
import Atharwlogo from "../../assets/Atharwlogo/AtharwLogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { VscBellDot } from "react-icons/vsc";
import dinesh from "../../assets/Profileimage/profileImage.png";
export default function Header1() {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  } else {
    return (
      <>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            collapseOnSelect
            expand={expand}
            bg="light"
            className="mb-3"
          >
            <Container>
              <Navbar.Brand href="#">
                <Link to="/">
                  <img
                    src={Atharwlogo}
                    width="180"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Atharw logo"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Image src={dinesh} alt="img" id="header2" />
                  </Nav.Link>
                  <Nav.Link href="#action2">
                    <div id="header3">Subham Mohapatra</div>
                    <div id="header4">Super Admin</div>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}
