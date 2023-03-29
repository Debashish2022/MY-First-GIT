import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddTestModal.css";

export default function AddTestModal(props) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Add Test
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row id="test1">
              <Col>
                <div id="test2">Name</div>
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row id="test1">
              <Col>
                <div id="test2">Test Name</div>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>

            <Row id="test1">
              <Col>
                <div id="test2">Price</div>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>

            <Row id="test1">
              <Col>
                <div id="test2">Discount</div>
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row id="test1">
              <Col>
                <div id="test2">Notes</div>
                <Form.Control placeholder="Address" as="textarea" rows={5} />
              </Col>
            </Row>

            <Row>
              <Col md={9} xs={9}></Col>
              <Col md={3} xs={3}>
                <Button id="test3" variant="success">
                  Add
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
