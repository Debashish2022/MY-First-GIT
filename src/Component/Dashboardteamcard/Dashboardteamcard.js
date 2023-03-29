import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiVipCrown2Fill } from "react-icons/ri";
import {RiTeamFill} from 'react-icons/ri';
import "./Dashboardteamcard.css";
function Dashboardteamcard() {
  return (
    <div>
      <Container id="dashboardteampcard_main">
        <Row>
          <Col id="dashboardteamcard_team"> Team </Col>
        </Row>
        <Row id="totaladmin_maindiv">
          <Col md={4}>
            {" "}
            <RiVipCrown2Fill
              style={{ color: "green", fontSize: "3rem" }}
            />{" "}
          </Col>
          <Col>
            <Row> Total Admin</Row>
            <Row> 6</Row>
          </Col>
        </Row>
        <Row id="teamember_maindiv">
          <Col md={4}>
            {" "}
            <RiTeamFill
              style={{ color: "green", fontSize: "3rem" }}
            />{" "}
          </Col>
          <Col>
            <Row> Team member</Row>
            <Row> 12 </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboardteamcard;
