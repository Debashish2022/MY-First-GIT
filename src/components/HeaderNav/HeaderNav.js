import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderNav.css";
import MentorClub from "../../assets/Dashboard/mentorsClub.png";
import {FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="hn2">
        <Container>
          <Navbar.Brand href=""><Image src={MentorClub} alt="logo" id="hn1"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"flex-end"}}>
            <Nav>
              <Nav.Link href="" id="hn3"><Link to="/dashboard" id="hn4">Dashboard</Link></Nav.Link>
              <Nav.Link href="" id="hn3"><Link to="/myprofile" id="hn4">Profile</Link></Nav.Link>
              <Nav.Link href="" id="hn3"><Link to="/coursesunderme" id="hn4">My Courses</Link></Nav.Link>
              <Nav.Link href="" id="hn3"><Link to="/teacher" id="hn4">Teacher</Link></Nav.Link>
              {/* <Nav.Link href="" id="hn3"><Link to="/revenue" id="hn4">My Earnings</Link></Nav.Link> */}
              <Nav.Link href="" id="hn3"><Link to="/veiwdetails" id="hn4">Veiw Details</Link></Nav.Link>
              <Nav.Link href="" id="hn3">Logout <FiLogOut /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
