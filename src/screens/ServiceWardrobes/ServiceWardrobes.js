import React from 'react'
import image1 from "../../assets/Service/Wardrobes1.jpg"
import image2 from "../../assets/Service/Wardrobes2.jpg"
import image3 from "../../assets/Service/Wardrobe3.jpg"
import { Col, Row, Container } from 'react-bootstrap';
import image from "../../assets/service.png";
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp'
function ServiceWardrobes() {
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
          <Col id="service2">Services - Interior - Commercial- Wardrobe</Col>
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

export default ServiceWardrobes