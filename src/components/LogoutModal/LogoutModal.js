import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./LogoutModal.css";

export default function LogoutModal(props) {
  return (
    <div>

<Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Container id="logout4">
            <Row id="logout1">
              <Col>Confirm Logout !</Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md={2} xs={3} id="logout2">
                Yes
              </Col>
              <Col md={1} xs={1}></Col>
              <Col md={2} xs={3} id="logout3" onClick={props.onHide}>
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
