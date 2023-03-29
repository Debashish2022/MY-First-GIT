import React from 'react'
import image1 from "../../assets/Service/Ceiling1.jpg"
import image2 from "../../assets/Service/Ceiling2.jpeg"
import { Col, Row, Container } from 'react-bootstrap';
import image from "../../assets/service.png";
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp';
import image3 from "../../assets/Project/decor2.jpg";
function ServiceFalse() {
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
          <Col id="service2">Services - Interior - Commercial- False Ceiling</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
         img3={image3}
          text="MPL has a work force that delivers quality drafts and 3D drawings that helps customers to envision their house before it is built."
        />
      </Container>
    
    
    </>
  )
}

export default ServiceFalse