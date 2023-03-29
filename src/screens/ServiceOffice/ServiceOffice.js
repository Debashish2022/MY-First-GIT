import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp'

import image1 from "../../assets/Service/Office1.jpg"
import image from "../../assets/service.png";
import image2 from "../../assets/Project/int2.jpg";
import image3 from "../../assets/Project/out1.jpg";

function ServiceOffice() {
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
          <Col id="service2">Interiors- Commercial-Officespaces</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
          img3={image3}
          text="MPL is a brand renowned for quality workmanship and timely delivery . MPL has a strong state of the art manufacturing facility to support our claim of Delivery and Quality."
        />
      </Container>
    
    
    </>
  )
}

export default ServiceOffice