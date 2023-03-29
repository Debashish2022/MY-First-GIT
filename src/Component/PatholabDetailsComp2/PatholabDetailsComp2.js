import React from "react";
import { Col, Container, Form, Image, Row, Table } from "react-bootstrap";
import "./PatholabDetailsComp2.css";
import life from "../../asset/Life.png";
import { AiFillStar } from "react-icons/ai";
import { TbEdit } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5";

export default function PatholabDetailsComp2(props) {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col  id="patho1">
            <Row>
              <Col xs="12" md="6">
                <Image src={props.img} id="patholab6" />
              </Col>
              <Col>
                <Row>
                  {" "}
                  <Col id="patho3">
                    {props.labname} <TbEdit id="pathoediticon" />
                  </Col>
                  <Col xs="4" md="2">
                    <IoTrashOutline id="patho5" />
                  </Col>
                </Row>
                <div style={{ flexDirection: "row", marginBottom: "0.7rem" }}>
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                  <AiFillStar id="starIcon" />
                </div>
                <div id="patho2">Address : {props.address}</div>
                <div id="patho2">Email Id : {props.email}</div>
                <div id="patho2">Phone Number : {props.phone}</div>
                <div id="patho2">
                  {props.para}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
