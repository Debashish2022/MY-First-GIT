import React from 'react'
import image1 from "../../assets/Service/Restaurant.jpg"
import { Col, Row, Container } from 'react-bootstrap';
import image from "../../assets/service.png";
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp';
import image2 from "../../assets/Project/res2.jpg";
import image3 from "../../assets/Project/int1.jpg"
function ServiceRestaurant() {
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
          <Col id="service2">Services - Interior - Commercial- Restaurant</Col>
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

export default ServiceRestaurant