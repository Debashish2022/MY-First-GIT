import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddPatholabModal.css";

export default function AddPatholabModal(props) {
    
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Add Patholab
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row id="patholab1" >
              <Col>
                <div id="patholab4" >Enter Lab Name</div>
                <Form.Control id="patholab2" type="text" />
              </Col>
            </Row>

            <Row id="patholab1">
              <Col>
                <div id="patholab4">Enter Email Id</div>
                <Form.Control id="patholab2" type="text" />
              </Col>
            </Row>

            <Row id="patholab1">
              <Col>
                <div id="patholab4">Enter Phone Number</div>
                <Form.Control id="patholab2" type="text" />
              </Col>
            </Row>

            <Row id="patholab1">
              <Col>
                <div id="patholab4">Opening date</div>
                <Form.Control id="patholab2" type="text" />
              </Col>
            </Row>

           

            <Row id="patholab1">
              <Col>
                <div id="patholab4">Description</div>
                <Form.Control as="textarea" rows={5} />
              </Col>
            </Row>
            <Row id="patholab1">
              <Col>
                <div id="patholab4">Address</div>
                <Form.Control as="textarea" rows={5} />
              </Col>
            </Row>
           

            
            

            <Row >
              <Col md={10} xs={10}></Col>
              <Col md={2} xs={2}>
                <Button id="patholab3" variant="success">
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
