import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hourglass from "../../asset/hourglass.gif";
import "./Waiting.css";
import { TiArrowBack } from "react-icons/ti";
function Waiting() {
  return (
    <div>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Row>
          <Col id="waiting_01">
            <img src={hourglass} alt="" />
          </Col>
        </Row>

        <Row>
          <Col id="waiting_02">Thank you for Submitting your Details</Col>
        </Row>

        <Row>
          <Col id="waiting_03">
            We will communicate you within 24-48hrs through Mail
          </Col>
        </Row>
        <Row>
          <Col id="waiting_04">Verification Pending...</Col>
        </Row>

        <Row>
          <Col id="waiting_05">
            <button id="waiting_06">
              {" "}
              <TiArrowBack
                style={{ fontSize: "1.3rem", marginRight: ".4rem" }}
              />{" "}
              Return login
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Waiting;
