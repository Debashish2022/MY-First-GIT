import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import FlagIcon from "./FlagIcon.js";
import { IoIosMailUnread } from "react-icons/io";
import {ImSwitch} from "react-icons/im";
import { VscBellDot } from "react-icons/vsc";
import dinesh from "../../assets/dinesh.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear, getUserToken } from "../../Redux/Slice/UserSlice";

export default function Header() {
  const token = useSelector(getUserToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [countries] = useState([
    { code: "in", title: "India" },
    { code: "gr", title: "Greece" },
    { code: "gb", title: "United Kingdom" },
    { code: "us", title: "United States" },
  ]);
  const [toggleContents, setToggleContents] = useState("Select a country");
  const [selectedCountry, setSelectedCountry] = useState();

  const logoutFun = () => {
    if (window.confirm("Do you sure want to Logout ?")) {
      dispatch(clear());
      navigate("/login");
    }
  };
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand>
              <Link to="/" id="linkh">
                {" "}
                <Image src={logo} alt="logo" style={{ height: "2rem" }} />{" "}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" style={{alignItems:"center"}}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="&#128269; search"
                      className="me-2"
                      id="header1"
                      aria-label="Search"
                    />
                  </Form>
                  <Form>
                    <Dropdown
                      onSelect={(eventKey) => {
                        const { code, title } = countries.find(
                          ({ code }) => eventKey === code
                        );

                        setSelectedCountry(eventKey);
                        setToggleContents(
                          <>
                            <FlagIcon code={code} /> {title}
                          </>
                        );
                      }}
                    >
                      <Dropdown.Toggle
                        variant="light"
                        id="dropdown-flags"
                        className="text-left"
                      >
                        {toggleContents}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {countries.map(({ code, title }) => (
                          <Dropdown.Item key={code} eventKey={code}>
                            <FlagIcon code={code} /> {title}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form>
                  <Nav.Link>
                    <IoIosMailUnread
                      style={{
                        height: "1.5rem",
                        width: "1.5rem",
                        color: "#FA4159",
                      }}
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <VscBellDot
                      style={{
                        height: "1.2rem",
                        width: "1.2rem",
                        color: "#FA4159",
                      }}
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <Image src={dinesh} alt="img" id="header2" />
                  </Nav.Link>
                  <Nav.Link href="#">
                    <div id="header3">Dinesh Panda</div>
                    <div id="header4">Super Admin</div>
                  </Nav.Link>
                  <Nav.Link href="#">
                    {token ? (
                      <ImSwitch style={{color:"#FC3973"}} onClick={() => logoutFun()}/>
                    ) : null}
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
