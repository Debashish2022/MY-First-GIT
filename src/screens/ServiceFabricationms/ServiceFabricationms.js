import React from "react";
import "./ServiceFabricationms.css";
import image1 from "../../assets/Service/MS1.jpg";
import image2 from "../../assets/Service/MS2.jpg";
import image3 from "../../assets/Service/MS3.jpg";
import { Col, Row, Container } from "react-bootstrap";
import image from "../../assets/service.png";
import ServiceconstructionComp from "../../components/ServiceConstructionComp/ServiceconstructionComp";
import image4 from "../../assets/Project/arch1.jpg";
function ServiceFabricationms() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} xs={12} id="service5">
            <img src={image} id="service1" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="service2">Services - Construction - Fabrication-MS</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
          img3={image4}
          text="We make UPVC windows and sliding doors and cater to various industries. Our state of the art production facility and cutting edge technology helps us to deliver on time and ensure hassle free installations."
        />
      </Container>
    </>
  );
}

export default ServiceFabricationms;
