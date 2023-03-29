import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Architecture";
import Proj1 from "../../assets/Project/project1.png";
import Proj2 from "../../assets/Project/project2.png";
import Proj3 from "../../assets/Project/project3.png";
function Architecture() {
  return (
    <>
      <Container>
        <Row id="projectcomp2">
          <Col md="4" xs="6">
            <img src={Proj1} id="projectcomp1" />
          </Col>
          <Col md="4" xs="6">
            <img src={Proj2} id="projectcomp1" />
          </Col>

          <Col md="4" xs="6">
            <img src={Proj3} id="projectcomp1" />
          </Col>
        </Row>
        <Row id="projectcomp2">
          <Col md="4" xs="6">
            <img src={Proj1} id="projectcomp1" />
          </Col>
          <Col md="4" xs="6">
            <img src={Proj2} id="projectcomp1" />
          </Col>

          <Col md="4" xs="6">
            <img src={Proj3} id="projectcomp1" />
          </Col>
        </Row>
        <Row id="projectcomp2">
          <Col md="4" xs="6">
            <img src={Proj1} id="projectcomp1" />
          </Col>
          <Col md="4" xs="6">
            <img src={Proj2} id="projectcomp1" />
          </Col>

          <Col md="4" xs="6">
            <img src={Proj3} id="projectcomp1" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Architecture;
