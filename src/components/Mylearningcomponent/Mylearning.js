import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "./Mylearning.css";
import mern from "../../assets/Mern/mern.png";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import Progressbar from "../../components/Progressbar/Progressbar";

import { Link } from "react-router-dom";

export default function MyLearningComp() {
  return (
    <>
      <Container>
        <Row
          style={{
            marginBottom: "1rem",
            marginTop: "3rem",
            marginLeft: "3rem",
          }}
        >
          <Col xs={12} md={3}>
            <Image src={mern} alt="mern" style={{ width: "100%" }} />
          </Col>
          <Col xs={12} md={5}>
            <div
              id="mlc1"
              style={{ color: "Black", fontSize: "1rem", fontWeight: 600 }}
            >
              MERN, Full Stack Web Development (MongoDB, ExpressJS, React, Node)
              from scratch to expert level.
            </div>
            <span style={{ color: "Black", fontSize: "1rem", fontWeight: 600 }}>Payment Status : </span>
            <span style={{ color: "#FC3973", fontSize: "1rem", fontWeight: 600 }}>Done</span>
            <div id="mlc3">
              <Button
                id="mlc2"
                style={{
                  marginTop: "2rem",
                  background:
                    "linear-gradient(90.27deg,#FC3973 49.3%, #F05904 79.09%)",
                }}
              >
                <Link
                  to="/subscriberdetails"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Analysis
                  <BsArrowRight style={{ marginLeft: "1rem" }} />
                </Link>
              </Button>
            </div>
          </Col>
          <Col xs={12} md={2} id="mlc8">
            <div
              id="mlc4"
              style={{ color: "#EB6262", fontSize: "1rem", fontWeight: 600 }}
            >
              &#8377; 22,000
            </div>
          </Col>
          <Row>
            <Col md={12}>
              <div className="progressText">Course Progress</div>
              <Progressbar bgcolor="#EB6262" progress="70" height={30} />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
