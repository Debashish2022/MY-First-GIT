import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutuscomp.css";
function Aboutuscomp(props) {
  return (
    <div>
      <Container id="aboutuscardcompallign">
        <Row>
          <Row id="iconmaincontainer">
            {" "}
            <div id="aboutus_iconcontainer"> {props.icon}</div>
          </Row>
          <Row id="aboutuscomp_title"> {props.title} </Row>
          <Row id="aboutus_text"> {props.text} </Row>
          <Row id="aboutus_enddiv"> </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutuscomp;
