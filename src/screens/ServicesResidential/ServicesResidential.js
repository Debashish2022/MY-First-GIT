import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ServiceconstructionComp from '../../components/ServiceConstructionComp/ServiceconstructionComp'
import "./ServicesResidential.css"
import image from "../../assets/service.png";
import image1 from "../../assets/Service/Residential.jpg"
import image2 from "../../assets/Project/res2.jpg";
import image3 from "../../assets/Project/res4.jpg";

function ServicesResidential() {
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
          <Col id="service2">Services - Construction - Residential</Col>
        </Row>
        <ServiceconstructionComp
          img={image1}
          img2={image2}
          img3={image3}
          text="Since its inception, MPL has always strived for setting new benchmarks in quality, customer centricity, business ethics, and transparency. This unwavering commitment has made the company the most preferred brand."
        />
      </Container>
    
    
    </>
  )
}

export default ServicesResidential