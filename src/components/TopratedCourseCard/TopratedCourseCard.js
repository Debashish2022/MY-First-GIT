import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./TopratedCourseCard.css";
import StarComponent from "../StarComponent/StarComponent";
import { Link, useNavigate } from "react-router-dom";
import Course from "../../assets/cardImg.png";
import { BiHide, BiShow } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import EditCourseModal from "../EditCourseModal/EditCourseModal";
import live from "../../assets/live.gif";

export default function TopratedCourseCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  // console.log(
  //   "visibility status in top rated course card : ",
  //   props.visibility
  // );
  const [visibility, setVisibility] = useState(props.visibility);

  return (
    <>
      <Row>
        <Col id="tcc1">
          <div id="tcc3">
            <div id="tcc9">
              {visibility === "active" ? (
                <Image
                  src={live}
                  alt="live course"
                  style={{ height: "1rem", width: "1rem" }}
                />
              ) : (
                <span style={{ display: "none" }} />
              )}
            </div>
            <div id="tcc7">
              <FaEdit
                onClick={() => setModalShow(true)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <EditCourseModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={props.item}
            />
            {/* <Link to="/coursedetails" id="tcc6"> */}
            <Image
              src={props.courseImage}
              alt="Course image"
              id="tcc8"
              // onClick={() => {navigate("/aspdetail", {state: { id: item.aspirant }})}
              // onClick={()=>{navigate("/coursedetails", {state: {item: props.item}})}}
              onClick={() => {
                navigate("/coursedetails", {
                  state: { item: props.item },
                });
              }}
            />
            {/* </Link> */}
          </div>
          <div id="tcc2">{props.title}</div>
          <div id="tcc4">by {props.author}</div>
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <StarComponent />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4}>
              <span id="tcc10">&#8377; {props.price}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
