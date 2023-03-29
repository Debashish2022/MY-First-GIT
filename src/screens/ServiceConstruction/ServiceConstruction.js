import React from "react";
import "./ServiceConstruction.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/service.png";
import image1 from "../../assets/construction.png";
import Header from "../../components/Header/Header";
import ServiceconstructionComp from "../../components/ServiceConstructionComp/ServiceconstructionComp";
import image2 from "../../assets/Project/arch1.jpg";
import image3 from "../../assets/Project/arch3.jpg";

export default function ServiceConstruction() {
  return (
    <>
    {/* <Header /> */}
      <Container fluid >
        <Row>
          <Col md={12} xs={12}id="service5">
            <img src={image} id="service1" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="service2">Services - Construction - Commercial</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
          img3={image3}
          text="Our focus primarily has been our residential portfolio ,however we have forayed into commercial segment recently after few successful ventures We are pro-actively exploring every opportunity in the Retail segments, Office spaces, Warehousing and Co-working spaces, restaurants, Malls, etc."
        />
      </Container>
    </>
  );
}
