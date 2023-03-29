import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Header2 from '../../components/Header2/Header2'
import dp from "../../assets/StudentImage.png";
import "./StudentDetails.css";
import course from "../../assets/Course.png";
import ProgressBar from '../../components/ProgresBar/ProgresBar';
import { Link } from 'react-router-dom';

export default function StudentDetails() {
  return (
    <>
        <Header2 />
        <Container>
            <Row style={{marginTop:"3rem", marginBottom:"2rem"}}>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="sdl1">
                    <Image src={dp} alt='display picture' id="sdl2"/>
                </Col>
                <Col xs={12} sm={12} md={9} lg={9} xl={9} xxl={9} id="sdl3">
                    <div id="sdl4">Subham Mohapatra</div>
                    <div id="sdl5">Email: subham@mohapatra.com</div>
                    <div id="sdl5">phone: 9861123456</div>
                    <div id="sdl5">District: Bhadrak</div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3} id="sdl1">
                    <Image src={course} alt="course" id="sdl6"/>
                </Col>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} xxl={5}>
                <div id="sdl7">MERN, Full Stack Web Development (MongoDB, ExpressJS, React, Node) from scratch to expert level</div>
                <div id="sdl11"><Button id="sdl8"><Link to="/enrolledcoursedetails">View details</Link></Button></div>
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="sdl9">
                ₹22,000
                </Col>
                <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2}>
                    <div id="sdl10">Offline Mode</div>
                </Col>
            </Row>
            <Row style={{marginTop:"1rem"}}>
                <Col id="sdl12">
                    <ProgressBar percentage="90"/>
                </Col>
            </Row>
        </Container>
    </>
  )
}
