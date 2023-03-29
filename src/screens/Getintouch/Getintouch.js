import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import get from "../../assets/image 1 (1).png";
import map from "../../assets/image 27.png";
import "./Getintouch.css";

export default function Getintouch() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Container fluid >
        <Row>
          <Image src={get} alt="logo" id="fluid1" />
        </Row>
        <Row>
          <Image src={map} alt="logo" id="get1"  />
        </Row>
        <Container>
          <Row id="get3">
            <Col md={1} lg={1}></Col>
            <Col md={5} lg={5} sm={12} xs={12}>
              <Row id="get2">Our Office</Row>
              <Row id="get4">
                {" "}
                Site #42,Katermma Layout,Chansendra Kadugodi Bengaluru-567077
              </Row>
              <Row id="get7">Phone No.</Row>
              <Row id="get4">(+91) 8452325377</Row>
              <Row id="get7">Email Address</Row>
              <Row id="get4">info@mailstone.co.in</Row>
            </Col>
            <Col md={6} lg={6} sm={12} xs={12} id="get8">
              <Form>
                <Row id="get6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Your Name*"
                      id="get20"
                    />
                  </Form.Group>
                </Row>
                <Row id="get6">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Email*"
                      id="get21"
                    />
                  </Form.Group>
                </Row>
                <Row id="get6">
                  <FloatingLabel controlId="floatingTextarea2" label="Your Message*">
                    <Form.Control
                      id="get22"
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                </Row>
              </Form>
              <Button id="get9">Contact Us</Button>{" "}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}