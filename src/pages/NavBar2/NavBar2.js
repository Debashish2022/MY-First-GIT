import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './NavBar2.css';
import { MdNotificationsNone } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import {FiSearch} from 'react-icons/fi';

export default function NavBar2() {
  return (
    <div>
      <Container fluid >
        <Row>
          <Col>
            <Navbar  style={{ background: 'transparent' }} collapseOnSelect expand="lg">
              <Container>
                <Navbar.Brand href="#home">
                  <Row id="navb1">Hello Admin !</Row>
                  <Row id="navb2">2.45 pm 09 Jan 2022</Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link className="">
                      
                    </Nav.Link>
                  </Nav>
                  <Nav className='d-flex me-1'>
                    <Row className='align-items-center mt-1'>
                      <Col md={1} xs={5}>
                        <Nav.Link className='me-3' id="navb3">
                          <MdNotificationsNone />
                        </Nav.Link>
                      </Col>
                      <Col md={10} xs={7} className="justify-content-end">
                        <Row id="navb4">
                          <Col md={3} xs={3} ></Col>
                          <Col md={6} xs={5}>Sagarika</Col>
                          <Col md={1} xs={1}><GoPerson /></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}