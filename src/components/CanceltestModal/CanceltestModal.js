import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./CanceltestModal.css";

export default function CanceltestModal(props) {
  return (
    <div>
        
<Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container id="cancel4">
            <Row id="cancel1">
              <Col>Sure to cancel test !</Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md={2} xs={3} id="cancel2">
                Yes
              </Col>
              <Col md={1} xs={1}></Col>
              <Col md={2} xs={3} id="cancel3" onClick={props.onHide}>
                <div>No</div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  )
}
