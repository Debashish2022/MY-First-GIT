import React from "react";
import "./TestCardComponent.css";
import kidney from "../../asset/kidney.png";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TestCardComponent(props) {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ marginBottom: "0.5rem" }}>
            <div id="testcardcomp1">
              <div
                style={{
                  height: "4rem",
                  width: "4rem",
                  marginBottom: "1.3rem",
                }}
              >
                <Image src={props.testimg} alt="image" id="testcardcomp4" />
              </div>
              <div id="testcardcomp2">{props.testName}</div>
              <div id="testcardcomp3"></div>
              <div id="testcardcomp5">
                <div id="testcardcomp6">MRP</div>
                <div id="testcardcomp6">
                  <strike> ${props.acPrice} </strike>
                </div>
                <div id="testcardcomp7">{props.percentage}% off</div>
              </div>
              <div id="testcardcomp8">$ {props.price}</div>
              <div id="testcardcomp9">
                extra ${props.discount_price} Cashback
              </div>
              {/* <Link to="/cart"> */}
              {/* <Button id="testcardcomp10" onClick={props.addToCart}>
                Add to Cart
              </Button> */}
              {/* </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
