import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import "./Myprofile.css";
import profile1 from "../../assets/image 46.png";
export default function Myprofile() {
  return (
    <>
      <Container id="dp14">
        <Row>
          <Col md={3} lg={3} sm={12} xs={12} id="dp12">
            <img src={profile1} alt="logo" id="dp1" />
          </Col>
          <Col md={4} lg={4} sm={12} xs={12}>
            <div id="dp2">manager</div>
            <div id="dp3">Dinesh panda</div>
            <div id="dp4">Khordha dist</div>
            <div id="dp5">dineshpanda@gmail.com</div>
            <Button id="dp6">UPDATE</Button>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12}>
            <Row id="dp8">Total Students</Row>
            <Row id="dp9">12312312312</Row>
            <Row id="dp7">Total Teachers</Row>
            <Row id="dp10">12312312312</Row>
          </Col>
          <Col md={1} lg={1} sm={12} xs={12}></Col>
        </Row>
        <Row id="dp11">About me</Row>
        <Row>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={7} />
            </Form.Group>
          </Form>
        </Row>
        <Button id="dp6">UPDATE</Button>
      </Container>
    </>
  );
}
