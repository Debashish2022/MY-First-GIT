import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Progress_bar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 40,
    marginTop: 10,
    //marginLeft: -10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 700,
  

  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div style={Parentdiv}>
            <div style={Childdiv}>
              <span style={progresstext}></span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Progress_bar;