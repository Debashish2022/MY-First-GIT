import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import about1 from "../../assets/image 1.png";
import first from "../../assets/Target.png";
import Second from "../../assets/Vision.png";
import Third from "../../assets/Philosophy.png";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Container fluid id="about12">
        <Row>
          <img src={about1} alt="logo" id="fluid1" />
        </Row>
        <Container>
          <Row id="about1">About</Row>
          <Row id="about2">
            <Col md={12} lg={12} sm={12} xs={12}>
              From the house of Konark Projects we proudly introduce Mailstone
              Pvt Ltd a one stop solution for all your Exterior & Interior
              needs. MPL carry forwards its expertise in Exterior, Interior and
              Rennovation Services, being in the competition for past 12 years
              with its dedicated and strong workforce MPL has catapaulted itself
              to the league of serving some of the big corporates in India.
              Founded by Mr.Tapan Kumar Panigrahi the company has grown tenfold
              from its inception, as a determined Captain Mr. Tapan Kumar
              Panigrahi has been successfully steering the ship through the
              tides and Storm.Till date MPL has completed 150+ projects and has
              been a regular name with its clients and their first choice to
              entrust their Construction, Rennovation and Maintenance Services .
            </Col>
          </Row>
          <Row id="about5">
            <Col md={4} lg={4} sm={2} xs={2}></Col>
            <Col md={4} lg={4} sm={8} xs={8} id="about4">
              <Link to="/services"><Button id="about3">Veiw Services</Button></Link>
            </Col>
            <Col md={4} lg={4} sm={2} xs={2}></Col>
          </Row>
          <Row id="about7">
            <Col sm={12} xs={12} lg={4} md={4} >
              <div id="div10">
                <div id="about11">
                  <img src={first} alt="logo" id="about8" />
                </div>
                <div id="about9">Mission</div>
                <div id="about10">
                  To Provide quality services in the area of Construction and
                  interior,to grow with a determination to be a brand.
                </div>
              </div>
            </Col>
            <Col sm={12} xs={12} lg={4} md={4} >
              <div id="div10">
                <div id="about11">
                  <img src={Second} alt="logo" id="about8" />
                </div>
                <div id="about9">Vision</div>
                <div id="about10">
                  Transform The Way People per recieve "Quality".
                </div>
              </div>
            </Col>
            <Col sm={12} xs={12} lg={4} md={4} >
              <div id="div10">
                <div id="about11">
                  <img src={Third} alt="logo" id="about8" />
                </div>
                <div id="about9">Philosophy</div>
                <div id="about10">Passion to Work.</div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
