import React from 'react'
import "./ServiceFabrication.css"
import image from "../../assets/service.png";
import image1 from "../../assets/Service/UPVC1.jpg"
import image2 from "../../assets/Service/UPVC2.jpg"
import { Col, Row, Container } from 'react-bootstrap';
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp';
import image3 from "../../assets/Project/res1.jpg";
function ServiceFabrication() {
  return (
    <>
    
    
    <Container fluid >
        <Row>
          <Col md={12} xs={12}id="service5">
            <img src={image} id="service1" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col id="service2">Services - Construction - Fabrication-UPVC</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
          img3={image3}
          text="We make UPVC windows and sliding doors and cater to various industries. Our state of the art production facility and cutting edge technology helps us to deliver on time and ensure hassle free installations."
        />
      </Container>
    
    
    </>
  )
}

export default ServiceFabrication