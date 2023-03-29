import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderNav.css";
import MentorClub from "../../assets/Dashboard/mentorsClub.png";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { clear } from "../../redux/Slice/userSlice";
import { useDispatch } from "react-redux";
import Utility from "../../utils/Utility";

export default function HeaderNav() {
  const location = useLocation();
  const dispatch = useDispatch();

  const LogoutFunction = () => {
    if (window.confirm("Are you sure, you want to leave?")) {
      dispatch(clear());
      Utility.sToast(`Logout Successfully`);
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="hn2">
        <Container>
          <Navbar.Brand href="">
            <Image src={MentorClub} alt="logo" id="hn1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          >
            <Nav>
              <Nav.Link href="" id="hn3">
                <Link to="/dash" id="hn4" style={location.pathname === "/dash"  ? {fontWeight: '700'}: null}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="" id="hn3">
                <Link to="/profile" id="hn4" style={location.pathname === "/profile"  ? {fontWeight: '700'}: null}>
                  Profile
                </Link>
              </Nav.Link>
              <Nav.Link href="" id="hn3">
                <Link to="/courses" id="hn4" style={location.pathname === "/courses"  ? {fontWeight: '700'}: null}>
                  My Courses
                </Link>
              </Nav.Link>
              {/* <Nav.Link href="" id="hn3">
                <Link to="/coursetup" id="hn4">
                  Course Setup
                </Link>
              </Nav.Link> */}
              <Nav.Link href="" id="hn3">
                <Link to="/revenue" id="hn4" style={location.pathname === "/revenue"  ? {fontWeight: '700'}: null}>
                  My Earnings
                </Link>
              </Nav.Link>
              <Nav.Link href="" id="hn3">
                <Link to="/help" id="hn4" style={location.pathname === "/help"  ? {fontWeight: '700'}: null}>
                  Help
                </Link>
              </Nav.Link>
              <Nav.Link href="" id="hn3" onClick={() => LogoutFunction()}>
                Logout <FiLogOut />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
