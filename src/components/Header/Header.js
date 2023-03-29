import React, { useState } from "react";
import "./Header.css";
import {
  Image,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  NavDropdown,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Logo from "../../assets/header/logo.png";
import JbsLogo from "../../assets/header/logoJbs.png";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
// import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const showDropdown2 = (e) => {
    setShow2(!show2);
  };
  const hideDropdown2 = (e) => {
    setShow2(false);
  };
  const showDropdown3 = (e) => {
    setShow3(!show3);
  };
  const hideDropdown3 = (e) => {
    setShow3(false);
  };
  const showDropdown4 = (e) => {
    setShow4(!show4);
  };
  const hideDropdown4 = (e) => {
    setShow4(false);
  };
  const showDropdown5 = (e) => {
    setShow5(!show5);
  };
  const hideDropdown5 = (e) => {
    setShow5(false);
  };
  const showDropdown6 = (e) => {
    setShow6(!show6);
  };
  const hideDropdown6 = (e) => {
    setShow6(false);
  };
  const showDropdown7 = (e) => {
    setShow7(!show7);
  };
  const hideDropdown7 = (e) => {
    setShow7(false);
  };

  const location = useLocation();
  return (
    <>
      {location.pathname !== "/jbs.home" ? (
        <>
          <Navbar id="header1">
            <Container>
              <Navbar.Brand id="header2"></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text id="header2">
                  <div id="header23">
                    <div id="header21">
                      <div id="header22">
                        <MdPhone />
                      </div>
                      <div>
                        <a href="tel:+81234-13533" id="header24">
                          (+91) 81234-13533
                        </a>
                      </div>
                    </div>
                    <div id="header21">
                      <div id="header22">
                        <FiMail />
                      </div>
                      <div>
                        <a href="mailto:info@mailstone.co.in" id="header24">
                          info@mailstone.co.in
                        </a>
                      </div>
                    </div>

                    <a
                      href="https://twitter.com/i/flow/login"
                      target="_blank"
                      id="header10"
                    >
                      {/* <GrTwitter id="header4" /> */}
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      id="header10"
                    >
                      {/* <RiInstagramFill id="header4" /> */}
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      id="header10"
                    >
                      {/* <FaFacebook id="header4" /> */}
                    </a>
                    <Link to="/contact" id="header10">
                      {/* <MdCall /> */}
                    </Link>
                  </div>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : null}

      {
        location.pathname !== "/jbs.home" && (
          // (

          // ) : (
          <>
            {" "}
            {["sm"].map((expand) => (
              <Navbar
                key={expand}
                expand={expand}
                className="mb-3"
                style={{ backgroundColor: "#fff" }}
                collapseOnSelect="true"
              >
                <Container fluid>
                  <Navbar.Brand>
                    <Link id="dropdrowitems" to="/" className="Header24">
                      <Image
                        src={Logo}
                        id="logo"
                        style={{ marginLeft: "1rem" }}
                      />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                        eventKey="1"
                      >
                        <Link id="dropdrowitems" to="/" className="Header24">
                          <Image src={Logo} id="logo" />
                        </Link>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link id="navItemsLink" eventKey="2">
                          <Link
                            to="/"
                            id="navItems"
                            className="animate__animated animate__bounce"
                            style={
                              location.pathname === "/"
                                ? { color: "#ff5e14", fontWeight: "bolder" }
                                : null
                            }
                          >
                            HOME
                          </Link>
                        </Nav.Link>
                        <Nav.Link id="navItemsLink" eventKey="3">
                          <Link
                            to="/about"
                            id="navItems"
                            style={
                              location.pathname === "/about"
                                ? { color: "#ff5e14", fontWeight: "bolder" }
                                : null
                            }
                          >
                            ABOUT US
                          </Link>
                        </Nav.Link>
                        <div id="Head1">
                          <Nav.Link id="header11">
                            <div id="headerDropdown">
                              <div id="Header25">SERVICES</div>
                              <div className="dropdown-content">
                                <div id="header14">
                                  <div id="header17">
                                    {/* <Link id="dropdrowitems" to="/getintouch" className="Header24"> */}
                                    <DropdownButton
                                      // as={ButtonGroup}
                                      key="start"
                                      id={`dropdown-button-drop-start`}
                                      drop="start"
                                      title={` CONSTRUCTION `}
                                      show={show}
                                      onMouseEnter={showDropdown}
                                      onMouseLeave={hideDropdown}
                                    >
                                      <Dropdown.Item
                                        id="Header21"
                                        eventKey="10"
                                      >
                                        <Link
                                          id="dropdrowitems"
                                          to="/services"
                                          className="Header24"
                                        >
                                          COMMERCIAL
                                        </Link>
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        id="Header21"
                                        eventKey="11"
                                      >
                                        <Link
                                          id="dropdrowitems"
                                          to="/residential"
                                          className="Header24"
                                        >
                                          RESIDENTIAL
                                        </Link>
                                      </Dropdown.Item>
                                    </DropdownButton>
                                    {/* </Link> */}
                                  </div>
                                  <div id="header17">
                                    {/* <Link id="dropdrowitems"> */}
                                    <DropdownButton
                                      // as={ButtonGroup}
                                      key="start"
                                      id={`dropdown-button-drop-start`}
                                      drop="start"
                                      title={` FABRICATION `}
                                      show={show2}
                                      onMouseEnter={showDropdown2}
                                      onMouseLeave={hideDropdown2}
                                    >
                                      <Dropdown.Item
                                        id="Header21"
                                        eventKey="12"
                                      >
                                        <Link
                                          // id="dropdrowitems"
                                          to="/fabrication"
                                          className="Header24"
                                        >
                                          UPVC
                                        </Link>
                                      </Dropdown.Item>
                                      <Dropdown.Item
                                        id="Header21"
                                        eventKey="13"
                                      >
                                        <Link
                                          id="dropdrowitems"
                                          to="/fabricationms"
                                          className="Header24"
                                        >
                                          MS & SS
                                        </Link>
                                      </Dropdown.Item>
                                    </DropdownButton>
                                    {/* </Link> */}
                                  </div>
                                  <div id="header17">
                                    {/* <Link
                                    id="dropdrowitems"
                                    className="Header24"
                                  > */}
                                    <DropdownButton
                                      // as={ButtonGroup}
                                      key="start"
                                      id={`dropdown-button-drop-start`}
                                      drop="start"
                                      title={` INTERIORS `}
                                      show={show3}
                                      onMouseEnter={showDropdown3}
                                      onMouseLeave={hideDropdown3}
                                    >
                                      <Dropdown.Item id="Header21">
                                        <DropdownButton
                                          // as={ButtonGroup}
                                          key="start"
                                          id={`dropdown-button-drop-start`}
                                          drop="start"
                                          title={` COMMERCIAL `}
                                          show={show4}
                                          onMouseEnter={showDropdown4}
                                          onMouseLeave={hideDropdown4}
                                        >
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="14"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/office"
                                              className="Header24"
                                            >
                                              OFFICE SPACE
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="15"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/restaurant"
                                              className="Header24"
                                            >
                                              RESTAURANT
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="16"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/garden"
                                              className="Header24"
                                            >
                                              LANDSCAPE & GARDEN
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="17"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/outdoor"
                                              className="Header24"
                                            >
                                              OUTDOOR LIVINGS
                                            </Link>
                                          </Dropdown.Item>
                                        </DropdownButton>
                                      </Dropdown.Item>
                                      <Dropdown.Item id="Header21">
                                        <DropdownButton
                                          // as={ButtonGroup}
                                          key="start"
                                          id={`dropdown-button-drop-start`}
                                          drop="start"
                                          title={` RESIDENTIAL `}
                                          show={show7}
                                          onMouseEnter={showDropdown7}
                                          onMouseLeave={hideDropdown7}
                                        >
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="18"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/wardrobes"
                                              className="Header24"
                                            >
                                              WARDROBES
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="19"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/kitchen"
                                              className="Header24"
                                            >
                                              KITCHENS
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="20"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              to="/false-ceiling"
                                              className="Header24"
                                            >
                                              FALSE CEILING
                                            </Link>
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            id="Header21"
                                            eventKey="21"
                                          >
                                            <Link
                                              id="dropdrowitems"
                                              className="Header24"
                                            >
                                              SHOWER CUBICLES
                                            </Link>
                                          </Dropdown.Item>
                                        </DropdownButton>
                                      </Dropdown.Item>
                                    </DropdownButton>
                                    {/* </Link> */}
                                  </div>
                                  <div id="header17">
                                    <Link
                                      id="dropdrowitems"
                                      // to="/termsandconditions"
                                      className="Header24"
                                    >
                                      <DropdownButton
                                        // as={ButtonGroup}
                                        key="start"
                                        id={`dropdown-button-drop-start`}
                                        drop="start"
                                        title={` ELECTRICALS `}
                                        show={show5}
                                        onMouseEnter={showDropdown5}
                                        onMouseLeave={hideDropdown5}
                                      >
                                        <Dropdown.Item
                                          id="Header21"
                                          eventKey="22"
                                        >
                                          <Link
                                            id="dropdrowitems"
                                            className="Header24"
                                          >
                                            HVAC
                                          </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          id="Header21"
                                          eventKey="23"
                                        >
                                          <Link
                                            id="dropdrowitems"
                                            className="Header24"
                                          >
                                            WIRING & INSTALLATION
                                          </Link>
                                        </Dropdown.Item>
                                      </DropdownButton>
                                    </Link>
                                  </div>
                                  <div id="header17">
                                    <Nav.Link id="navItemsLink" eventKey="24">
                                      <Link
                                        id="dropdrowitems"
                                        className="Header24"
                                        eventKey="24"
                                      >
                                        PLUMBING
                                      </Link>
                                    </Nav.Link>
                                  </div>

                                  <div id="header17">
                                    <Link
                                      id="dropdrowitems"
                                      // to="/homebanner"
                                      className="Header24"
                                    >
                                      <DropdownButton
                                        // as={ButtonGroup}
                                        key="start"
                                        id={`dropdown-button-drop-start`}
                                        drop="start"
                                        title={` DECORS `}
                                        show={show6}
                                        onMouseEnter={showDropdown6}
                                        onMouseLeave={hideDropdown6}
                                      >
                                        <Dropdown.Item
                                          id="Header21"
                                          eventKey="24"
                                        >
                                          <Link
                                            id="dropdrowitems"
                                            className="Header24"
                                          >
                                            WALLPAPER
                                          </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          id="Header21"
                                          eventKey="25"
                                        >
                                          <Link
                                            id="dropdrowitems"
                                            className="Header24"
                                          >
                                            ARTIFACTS
                                          </Link>
                                        </Dropdown.Item>
                                      </DropdownButton>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Nav.Link>
                        </div>

                        <Nav.Link id="navItemsLink" eventKey="4">
                          <Link
                            to="/projects"
                            id="navItems"
                            style={
                              location.pathname === "/projects"
                                ? { color: "#ff5e14", fontWeight: "bolder" }
                                : null
                            }
                          >
                            PROJECTS
                          </Link>
                        </Nav.Link>
                        <Nav.Link id="navItemsLink" eventKey="5">
                          <Link
                            to="/jbs.home"
                            id="navItems"
                            style={{ color: "#A80000" }}
                          >
                            JBS INTERIOR
                          </Link>
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}{" "}
          </>
        )
        // )
      }
    </>
  );
}
