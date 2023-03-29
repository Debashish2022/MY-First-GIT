import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile1 from "../../assets/image 46.png";
import profile2 from "../../assets/image 45.png";
import "./Veiwdetails.css";
export default function Veiwdetails() {
  return (
    <>
      <Container id="veiw3">
        <Row>
          <Col md={2} lg={2} sm={12} xs={12}>
            <img src={profile1} alt="logo" id="dp1" />
          </Col>
          <Col md={2} lg={2} sm={6} xs={6}>
            <div>Name : </div>
            <div>Teacher Id : </div>
            <div>Email Id : </div>
            <div>Contact No. : </div>
            <div>Designation : </div>
          </Col>
          <Col md={3} lg={3} sm={6} xs={6}>
            <div> Debashish Jena</div>
            <div>#T3256437</div>
            <div>jenadebashish@gmail.com</div>
            <div>1234567890</div>
            <div>Software Devloper</div>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12}>
            <img src={profile2} alt="logo" id="veiw1" />
          </Col>
        </Row>
        <Row id="veiw2">
          <Col md={2} lg={2} xs={2} sm={2}>
            Qualification :
          </Col>
          <Col md={10} lg={10} sm={10} xs={10}>
            +3 Graduate from Bhadrak Autonomous College
          </Col>
        </Row>
        <Row id="veiw2">
          <Col md={2} lg={2} xs={2} sm={2}>
            Short CV
          </Col>
          <Col md={10} lg={10} sm={10} xs={10}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Col>
        </Row>
        <Row id="veiw2">
          <Col md={2} lg={2} xs={2} sm={2}>
            Facebook Link :
          </Col>
          <Col md={10} lg={10} sm={10} xs={10}>
            facebook.com/23423rweds
          </Col>
        </Row>
        <Row id="veiw2">
          <Col md={2} lg={2} xs={2} sm={2}>
            Instagram Link :
          </Col>
          <Col md={10} lg={10} sm={10} xs={10}>
            instagram.com/23423rweds
          </Col>
        </Row>
        <Row id="veiw2">
          <Col md={2} lg={2} xs={2} sm={2}>
            Linkedin Link :
          </Col>
          <Col md={10} lg={10} sm={10} xs={10}>
            linkedin.com/23423rweds
          </Col>
        </Row>
      </Container>
    </>
  );
}
