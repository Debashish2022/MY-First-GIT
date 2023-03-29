import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import jbsText from "../../assets/jbs.png";
import jbsIOne from "../../assets/image 4jbsIoNE.png";
import jbsITwo from "../../assets/image 5jbsITwo.png";
import vdo from "../../assets/video.mp4";
import Header from "../../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Homejbs.css";
import Logo from "../../assets/header/logo.png";
import JbsLogo from "../../assets/header/jbslogo.png";
import JbsImage from "../../assets/header/jbsimg2.png";
import arch1 from "../../assets/Project/arch1.jpg";
import arch3 from "../../assets/Project/arch3.jpg";



export default function HomeJbs() {
  const location = useLocation();
  return (
    <>
      <>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="mb-3"
            style={{ backgroundColor: "#fff" }}
            collapseOnSelect="true"
          >
            <Container fluid>
              <Navbar.Brand >
                <Image src={JbsLogo} id="logo1"  />
                <Image src={JbsImage} id="logoimg"  />

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
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Link to="/"><Image src={Logo} id="logo2" /></Link>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link  id="navItemsLink">
                      <AnchorLink
                        href="#homeJbshome"
                        className="animate__animated animate__bounce navItemsJbs"
                        style={location.pathname === "/jbs.home" ? {color:'#ff5e14', fontWeight:'bolder'}: null}
                      >
                        HOME
                      </AnchorLink>
                    </Nav.Link>
                    <Nav.Link id="navItemsLink" eventKey="2">
                      <AnchorLink
                        href="#aboutusHomejbs"
                        className="navItemsJbs"
                      >
                      
                        ABOUT US
                      
                      </AnchorLink>
                    </Nav.Link>
                    <Nav.Link  id="navItemsLink" eventKey="3">
                      <AnchorLink href="#worksHomejbs" className="navItemsJbs">
                        WORKS
                      </AnchorLink>
                    </Nav.Link>
                    <Nav.Link  id="navItemsLink" eventKey="4">
                      <AnchorLink
                        href="#contactusHomejbs"
                        className="navItemsJbs"
                      >
                        CONTACT US
                      </AnchorLink>
                    </Nav.Link>

                    <Nav.Link  id="navItemsLink" eventKey="5">
                      <Link to="/" className="navItemsJbs">
                        MAILSTONE-HOME
                        </Link>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
      <>
        {/* <Header /> */}
        <Container>
          {/* home */}
          <section id="homeJbshome">
          <div className="banner">
            <video autoPlay muted width={"100%"} loop>
              <source src={vdo} type="video/mp4" />
            </video>
            <h2>JBS</h2>
          </div>
          <Row id="Homejbs8">
            <Col>
              <div
                className="headingTextJbs"
                style={{
                  color: " #B6B6B6",
                  textAlign: "center",
                }}
              >
                INTERIORS
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} id="Homejbs18">
              <Image src={jbsIOne} width="100%" id="Homejbs4" />
            </Col>
            <Col md={4} id="Homejbs18">
              <Image src={jbsITwo} width="100%" id="Homejbs4" />
            </Col>
            <Col md={4} id="Homejbs1">
              <div id="Homejbs9">
                <div>We Make</div>
                <div>Your</div>
                <div>Home</div>
                <div>Better</div>
              </div>
            </Col>
          </Row>
          </section>

          {/* about us */}
          <section id="aboutusHomejbs">
            <Row>
              <Col md={4} id="aboutus">
                <div id="Homejbs2">
                  <div>About</div>
                  <div>Us</div>
                </div>
              </Col>
              <Col>
                <div id="Homejbs7">
                  From the house of Konark Projects we proudly introduce
                  Mailstone Pvt Ltd a one stop solution for all your Exterior &
                  Interior needs. MPL carry forwards its expertise in Exterior,
                  Interior and Rennovation Services, being in the competition
                  for past 12 years with its dedicated and strong workforce MPL
                  has catapaulted itself to the league of serving some of the
                  big corporates in India. Founded by Mr.Tapan Kumar Panigrahi
                  the company has grown tenfold from its inception, as a
                  determined Captain Mr. Tapan Kumar Panigrahi has been
                  successfully steering the ship through the tides and
                  Storm.Till date MPL has completed 150+ projects and has been a
                  regular name with its clients and their first choice to
                  entrust their Construction, Rennovation and Maintenance
                  Services .
                </div>
              </Col>
            </Row>
          </section>

          {/* works */}
          <section id="worksHomejbs">
            <Row>
              <Col md={4} id="Homejbs1">
                <div id="Homejbs9">
                  <div>Our work</div>
                  <div>is our</div>
                  <div>identity</div>
                </div>
              </Col>
              <Col md={8}>
                <Row id="Homejbs5">
                  <Col md={6} xs={12} id="Homejbs18">
                    <Image src={arch1} width="100%" id="Homejbs4" />
                  </Col>
                  <Col md={6} xs={12} id="Homejbs18">
                    <Image src={arch3} width="100%" id="Homejbs4" />
                  </Col>
                </Row>
                <Row id="Homejbs5">
                  <Col md={6} xs={12} id="Homejbs18">
                    <Image src={arch3} width="100%" id="Homejbs4" />
                  </Col>
                  <Col md={6} xs={12} id="Homejbs18">
                    <Image src={arch1} width="100%" id="Homejbs4" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>

          {/* contact us */}
          <section id="contactusHomejbs">
            <Row className="mb-5">
              <Col
                md={{ span: "4", order: "first" }}
                xs={{ span: "12", order: "last" }}
              >
                <Form>
                  <Row>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Control
                        type="text"
                        placeholder="Your Name*"
                        id="Homejbs15"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Your Email*"
                        id="Homejbs16"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        id="Homejbs17"
                        placeholder="Enter Your Message*"
                      />
                    </Form.Group>
                  </Row>
                </Form>
                <Button id="Homejbs14">Contact Us</Button>{" "}
              </Col>
              <Col id="Homejbs13">
                <iframe
                id="Homejbs10"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.826544026293!2d77.7454234078125!3d12.990605999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fb8ce2d32a5%3A0x7c04ebd9cb37088e!2sMailstone%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1679469566492!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
              <Col
                md={{ span: "4", order: "last" }}
                xs={{ span: "12", order: "first" }}
              >
                <div id="Homejbs12">
                  <div>Contact</div>
                  <div>Us</div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    </>
  );
}
