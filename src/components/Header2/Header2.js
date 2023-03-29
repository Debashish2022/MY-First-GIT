import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Header2.css";
import { BiHome } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { RiLiveLine } from "react-icons/ri";
import { BsRecordBtn } from "react-icons/bs";
import { HiOutlineSaveAs } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegIdCard } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

export default function Header2() {
  const [selectVal, setSelectVal] = useState("");
  return (
    <>
      <Container style={{padding:"0.5rem"}}>
        <Row>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/" id="linkh">
              <BiHome style={{ color: "red" }} /> Dashboard
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/totalcourses" id="linkh">
              <GiBookshelf style={{ color: "red" }} /> Courses{" "}
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/liveclass" id="linkh">
              <RiLiveLine style={{ color: "red" }} /> Live classes
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/liveclassrecordings" id="linkh">
              <BsRecordBtn style={{ color: "red" }} /> Recordings{" "}
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2} id="header2_1">
            <Link to="/studentlist" id="linkh">
              <AiOutlineUsergroupAdd style={{ color: "red" }} /> User list{" "}
            </Link>
          </Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2} xxl={2}>
            <Form.Select
              size="sm"
              id="header2_2"
              onChange={(e) => setSelectVal(e.target.value)}
            >
              <option value="">Other</option>
              <option value="about_us">About us</option>
              <option value="contact_us">Contact us</option>
              <option value="services">Services</option>
              <option value="privacy_policy">Privacy policy</option>
              <option value="disclaimer">Disclaimer</option>
              <option value="coachingCenter">Coaching Centers</option>
              <option value="banner">Banner</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>

      {selectVal === "about_us" ? <Navigate to="/aboutus" /> : null}
      {selectVal === "coachingCenter" ? <Navigate to="/coachingCenter" /> : null}
      {selectVal === "services" ? <Navigate to="/services" /> : null}
      {selectVal === "banner" ? <Navigate to="/banner" /> : null}
      {selectVal === "privacy_policy" ? <Navigate to="/privacy_policy" /> : null}
      {selectVal === "contact_us" ? <Navigate to="/contact" /> : null }
    </>
  );
}
