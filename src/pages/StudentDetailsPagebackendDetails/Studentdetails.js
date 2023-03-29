import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

import "./Studentdetails.css";
import subham from "../../assets/Studentimage/studentimage.png";
import { VscBellDot } from "react-icons/vsc";
import { FiArrowDown } from "react-icons/fi";
import MyLearningComp from "../../components/Mylearningcomponent/Mylearning";
import { BsArrowRight } from "react-icons/bs";

import { Link } from "react-router-dom";

export default function Studentdetails() {
  return (
    <>
      <Container id="studentdash6">
        <Row style={{ marginTop: "2rem" }}>
          <Col id="studentdash11">
            <div className="studentdash7">
              <div>
                <Link to="/studentanalysis">
                  <Image src={subham} alt="img" id="studentdash8" />
                </Link>
              </div>
              <div>
                <div className="studentdash9">Subham Mohapatro</div>
                <div className="studentdash10">
                  B.Tech-computer science | KIIT, Bhubaneswar subham@gmail.com,
                  +91 23443 54553
                </div>
              </div>
            </div>
            {/* <div>
              <VscBellDot id="studentdash12" />
            </div> */}
          </Col>
          <Col id="studentdash13">
            <div style={{ fontSize: "1.3rem", fontWeight: "500" }}>UID : </div>
            <div
              style={{
                fontSize: "1.3rem",
                color: "#38AF0F",
                fontWeight: "500",
              }}
            >
              K34sUhsZ
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col id="studentdash27">My Learnings</Col>
        </Row> */}
        <Row>
          <Col>
            <MyLearningComp />
          </Col>
        </Row>
        <Row>
          <Col>
            <MyLearningComp />
          </Col>
        </Row>
      </Container>
    </>
  );
}
