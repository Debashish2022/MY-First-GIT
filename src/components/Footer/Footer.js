import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import mail from "../../assets/Group 1.png";
import jbs from "../../assets/header/jbsfooterlogo.png";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/jbs.home" ? (
        <>
          <Container fluid id="footer1" className="backgroundGreenFooter">
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <Row>
                    <img src={jbs} alt="logo" id="footer11" />
                  </Row>
                </Col>
                <Col md={4} lg={4} sm={12} xs={12} id="footer3">
                  <Row id="footer4">Get In Touch</Row>
                  <Row id="footer2">
                    <a
                      id="footer10"
                      target="_blank"
                      href="https://goo.gl/maps/TiUKdcGjbYQsAuVD8"
                    >
                      Site #42, Katearamma Layout, Channasandra Kadugodi ,
                      Bengaluru- 560067
                    </a>
                  </Row>
                  <Row id="footer2">
                    <a id="footer10" href="tel:+16782767119">
                      (+91) 81234-13533
                    </a>
                  </Row>
                </Col>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <Row id="footer4">Follow Us</Row>
                  <Row id="footer5">
                    <div id="footer6">
                      <a href="http://www.youtube.com/" target="_blank">
                        <AiOutlineYoutube id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.facebook.com/" target="_blank">
                        <RiFacebookCircleFill id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.twitter.com/" target="_blank">
                        <AiOutlineTwitter id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram id="footer9" />
                      </a>
                    </div>
                  </Row>
                </Col>
                <Col md={2} lg={2} sm={12} xs={12} id="footer3"></Col>
              </Row>
            </Container>
          </Container>
          <Container fluid>
            <Row id="footer8" className="greenfooterbelowdiv">
              @2021 Mailstone Pvt.Ltd. Designed By Codekart Solutions Pvt.Ltd.
            </Row>
          </Container>
        </>
      ) : (
        <>
          <Container fluid id="footer1" className="backgroundFooter">
            <Container>
              <Row>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <Row>
                    <img src={mail} alt="logo" id="footer7" />
                  </Row>
                  <div>
                    <Row id="footer2">
                      <Link to="/about" id="footer12">About Us</Link>
                    </Row>
                    <Row id="footer2"><Link to="/privacypolicy" id="footer12">Privacy Policy</Link></Row>
                    <Row id="footer2"><Link  to="/getintouch" id="footer12">Contact Us</Link></Row>
                    <Row id="footer2"><Link  to="/getintouch" id="footer12">Get in Touch</Link></Row>
                  </div>
                </Col>
                <Col md={4} lg={4} sm={12} xs={12} id="footer3">
                  <Row id="footer4">Get In Touch</Row>
                  <Row id="footer2">
                    <a
                      id="footer10"
                      target="_blank"
                      href="https://www.google.com/maps/place/1509+Lady+St+c,+Columbia,+SC+29201,+USA/@34.0046825,-81.0309434,17z/data=!3m1!4b1!4m5!3m4!1s0x88f8a52ade2e2f3b:0x398bf97742ead4b8!8m2!3d34.0046825!4d-81.0287547"
                    >
                      Site #42, Katearamma Layout, Channasandra Kadugodi ,
                      Bengaluru- 560067
                    </a>
                  </Row>
                  <Row id="footer2">
                    <a id="footer10" href="tel:+81234-13533">
                      (+91) 81234-13533
                    </a>
                  </Row>
                </Col>
                <Col md={3} lg={3} sm={12} xs={12} id="footer3">
                  <Row id="footer4">Follow Us</Row>
                  <Row id="footer5">
                    <div id="footer6">
                      <a href="http://www.youtube.com/" target="_blank">
                        <AiOutlineYoutube id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.facebook.com/" target="_blank">
                        <RiFacebookCircleFill id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.twitter.com/" target="_blank">
                        <AiOutlineTwitter id="footer9" />
                      </a>
                    </div>
                    <div id="footer6">
                      <a href="https://www.instagram.com/" target="_blank">
                        <AiOutlineInstagram id="footer9" />
                      </a>
                    </div>
                  </Row>
                </Col>
                <Col md={2} lg={2} sm={12} xs={12} id="footer3"></Col>
              </Row>
            </Container>
          </Container>
          <Container fluid>
            <Row id="footer8" className="footerbelowdiv">
              @2021 Mailstone Pvt.Ltd. Designed By Codekart Solutions Pvt.Ltd.
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
