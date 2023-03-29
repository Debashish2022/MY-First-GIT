import React, { useState } from "react";
import "./Help.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

export default function Help() {
  const [click, setClick] = useState("");
  return (
    <>
    <HeaderNav />
      <Container>
        <Container>
          <Row id="help3">Choose your subject</Row>
          <Row>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "paymentrelated"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("paymentrelated");
              }}
            >
              Payment Related
            </Col>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help2"
              style={
                click === "studentrelated"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("studentrelated");
              }}
            >
              Student Related
            </Col>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Attachment related"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Attachment related");
              }}
            >
              Attachment related
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Profile related"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Profile related");
              }}
            >
              Profile related
            </Col>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Chapter related"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Chapter related");
              }}
            >
              Chapter related
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Website related"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Website related");
              }}
            >
              Website related
            </Col>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Course related"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Course related");
              }}
            >
              Course related
            </Col>
            <Col></Col>
            <Col
              md={2}
              xs={0}
              id="help1"
              style={
                click === "Others"
                  ? { backgroundColor: "#F05904" }
                  : { backgroundColor: "#343434" }
              }
              onClick={() => {
                setClick("Others");
              }}
            >
              Others
            </Col>
          </Row>
          <Row id="help4">Let us know, What we can improve</Row>
          <Row id="help5">
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={10} lg={11} xs={9}></Col>
            <Col md={2} lg={1} xs={2} id="help7">
              <Button id="help6">Send</Button>
            </Col>
            <Col md={0} lg={0}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
