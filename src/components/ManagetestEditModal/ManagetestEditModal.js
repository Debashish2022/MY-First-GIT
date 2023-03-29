import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./ManagetestEditModal.css";

export default function ManagetestEditModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="testmodaledit">
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row id="testmodaledit3">
              <Col>Case Number : 123456#</Col>
              <Col>status : Order Successful</Col>
            </Row>
            <Row id="testmodaledit3">
              <Col></Col>
              <Col>Report date & time : </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <Form.Label id="testmodaledit2">First name</Form.Label>
                <Form.Control placeholder="First name" disabled/>
              </Col>
              <Col>
                <Form.Label id="testmodaledit2">Last name</Form.Label>
                <Form.Control placeholder="Last name" disabled/>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="testmodaledit4">Email</Form.Label>
              <Form.Control type="email" placeholder="email" disabled/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="testmodaledit2">Mobile number</Form.Label>
              <Form.Control type="text" placeholder="mobile number" disabled/>
            </Form.Group>

            <Row>
              <Col>
                <Form.Label id="testmodaledit2">Category</Form.Label>
                <Form.Control placeholder="category" disabled/>
              </Col>
              <Col>
                <Form.Label id="testmodaledit2">Sub-category</Form.Label>
                <Form.Control placeholder="sub-category" disabled/>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label id="testmodaledit4">Booking for others</Form.Label>
              <Form.Control type="text" placeholder="others" disabled/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="testmodaledit">
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
