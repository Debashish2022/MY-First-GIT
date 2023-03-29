import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Dashboardcomp.css";
function Dashboardcomp(props) {
  return (
    <div>
      <Container fluid id="dashboardcomp_main">
        <Row>
          <Col md={12} id='dashboardcard_title'>{props.title}</Col>
        </Row>
        <Row>
          <Col md={7}></Col>
          <Col id='dashboard_count'> {props.count}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboardcomp;
