import React from 'react'
import image1 from "../../assets/Service/Outdoor1.jpg"

import { Col, Row, Container } from 'react-bootstrap';
import image from "../../assets/service.png";
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp';
import image2 from "../../assets/Project/out6.jfif";
import image3 from "../../assets/Project/out7.jfif";

function Serviceoutdoor() {
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
          <Col id="service2">Services - Interior - Commercial- Outdoor Living</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
         img2={image2}
         img3={image3}
      
          text=""
        />
      </Container>
    
    
    </>
  )
}

export default Serviceoutdoor