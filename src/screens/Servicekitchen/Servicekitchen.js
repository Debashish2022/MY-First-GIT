import React from 'react'
import image1 from "../../assets/Service/Kitchen1.jpg"
import image22 from "../../assets/Service/Kitchen2.jpg"
import image33 from "../../assets/Service/Kitchen3.jpg"
import { Col, Row, Container } from 'react-bootstrap';
import image from "../../assets/service.png";
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp'
function Servicekitchen() {
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
          <Col id="service2">Services - Interior - Commercial- Kitchen</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image22}
          img3={image33}
          text=""
        />
      </Container>
    
    
    </>
  )
}

export default Servicekitchen