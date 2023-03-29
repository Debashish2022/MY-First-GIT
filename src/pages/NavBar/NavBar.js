import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "./NavBar.css";
import { MdNotificationsNone } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../Redux/Actions";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavBar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    if (window.confirm("Are You Sure, You Want To Log Out")) {
      dispatch(signout());
      navigate("/");
    } else {
    }
  };
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Navbar
              style={{ background: "transparent" }}
              collapseOnSelect
              expand="lg"
            >
              {auth.authenticate && (
                <Container>
                  <Navbar.Brand href="#home">
                    <Row id="helloAdminTxt">Hello Admin !</Row>
                    <Row id="timeDateTxt">
                      {currTime} {currDate}
                    </Row>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                      <Nav.Link className="">
                        {/* <Form className="d-flex">
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-1"
                            aria-label="Search"
                          />
                          <Button variant="outline-success">
                            <FiSearch />
                          </Button>
                        </Form> */}
                      </Nav.Link>
                    </Nav>
                    <Nav className="d-flex me-1">
                      <Row className="align-items-center mt-1">
                        <Col md={1} xs={5}>
                          {/* <Nav.Link className="me-3" id="notificationIcon">
                            <MdNotificationsNone />
                          </Nav.Link> */}
                        </Col>
                        <Col md={10} xs={7} className="justify-content-end">
                          <Row id="sagarikaTxt">
                            <Col
                              md={6}
                              xs={5}
                              onClick={logOut}
                              style={{ cursor: "pointer" }}
                            >
                              Logout
                            </Col>
                            {/* <Col md={1} xs={1}><GoPerson /></Col> */}
                            <Col
                              md={1}
                              xs={1}
                              onClick={logOut}
                              style={{ cursor: "pointer" }}
                            >
                              <IoMdLogOut
                                style={{
                                  height: "1.2em",
                                  width: "1.2em",
                                  color: "red",
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              )}
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
