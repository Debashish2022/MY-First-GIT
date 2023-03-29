import React from "react";
import "./Attendance.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";

export default function Attendance() {
  return (
    <>
    <Header2 />
      <Container>
        <Row style={{marginTop:"2rem"}}>
          <Col>
            <Form.Select id="attend1">
              <option>Default select</option>
              <option>option1</option>
              <option>option 2</option>
              <option>option 3</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select id="attend1">
              <option>Default select</option>
              <option>option1</option>
              <option>option 2</option>
              <option>option 3</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select id="attend1">
              <option>Default select</option>
              <option>option1</option>
              <option>option 2</option>
              <option>option 3</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Select id="attend1">
              <option>Default select</option>
              <option>option1</option>
              <option>option 2</option>
              <option>option 3</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col style={{textAlign:"center", fontSize:"2rem", color:"red", marginTop:"2rem"}}>
            Calender needs to be implemented
          </Col>
        </Row>
      </Container>
    </>
  );
}
