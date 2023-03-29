import React from "react";
import "./TestCard.css";
import kidney from "../../asset/kidney.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function TestCard() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} xs={6} style={{ marginBottom: "1rem" }}>
            <div id="testcard1">
              <div>
                <Image src={kidney} alt="image" id="testcard4" />
              </div>
              <div id="testcard2">Complete Test</div>
              <div id="testcard3"></div>
              <div id="testcard5">
                <div id="testcard6">MRP</div>
                <div id="testcard6">
                  <strike> $380 </strike>
                </div>
                <div id="testcard7">19% off</div>
              </div>
              <div id="testcard8">$ 300</div>
              <div id="testcard9">extra $31 Cashback</div>
              <Button id="testcard10">Book Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
