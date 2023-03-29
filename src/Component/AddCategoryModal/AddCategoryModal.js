import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddCategoryModal.css"


export default function AddCategoryModal(props) {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          add category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row >
              <Col>
                <div id="category1">Category Name</div>
                <Form.Control type="text" />
              </Col>
            </Row>

            <Row>
              <Col md={9} xs={9}></Col>
              <Col md={3} xs={3}>
                <Button id="category2" variant="success">
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
