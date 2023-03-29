import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header2.css";
import { BiHome } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
import { BsRecordBtn } from "react-icons/bs";
import { HiOutlineSaveAs } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header2() {
  return (
    <>
      <Container id="subadmin1">
        <Row>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/" id="linkh">
              <BiHome style={{ color: "red" }} /> Dashboard
            </Link>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/studentdetails" id="linkh">
              <GiBookshelf style={{ color: "red" }} /> Courses{" "}
            </Link>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <RiLiveLine style={{ color: "red" }} /> Live classes
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/liveclassrecordings" id="linkh">
              <BsRecordBtn style={{ color: "red" }} /> Recordings{" "}
            </Link>
          </Col>
          {/* <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1"><HiOutlineSaveAs style={{color:"red"}}/> Saved classes</Col> */}
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/userdetails" id="linkh">
              <AiOutlineUsergroupAdd style={{ color: "red" }} /> User details{" "}
            </Link>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/attendance" id="linkh">
              <FaRegIdCard style={{ color: "red" }} /> Attendance{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
