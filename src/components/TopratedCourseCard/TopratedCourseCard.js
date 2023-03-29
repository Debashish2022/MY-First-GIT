import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./TopratedCourseCard.css";
// import Course from "../../assets/Dashboard/course.png";
import StarComponent from "../StarComponent/StarComponent";
import {useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import live from "../../assets/AllCourse/live.gif";
import EditNewCourseModal from "../EditNewCourseModal/EditNewCourseModal";

export default function TopratedCourse_Card(props) {
  const [modalShow, setModalShow] = useState(false);

  console.log('visibility', props.visibility);

  const navigate = useNavigate();
  return (
    <>
      <Row>
        <Col id="tcc1">
          <div>
          <div id="tcc3">
            {/* <Link to="/coursedetails" id="tcc6"> */}
            <Image
              onClick={() => {
                navigate("/coursedetails", { state: { res: props.response } });
              }}
              src={props.image}
              alt="Course image"
              style={{ width: "95%", height: "25vh",borderRadius:'1rem' }}
            />
            <div id="tcc7" onClick={() => setModalShow(true)}>
              <MdModeEditOutline id="tcc8" />
            </div>

            {/* </Link> */}
          </div>
          <div
            id="tcc2"
            onClick={() => {
              navigate("/coursedetails", { state: { res: props.response } });
            }}
          >
            <div>
             {props.visibility === 'active' && (<img src={live} id="tcc10" />)}
              {props.title}
            </div>{" "}
            <div>{props.price ? `${props.price}/-` : "N/A"}</div>
            {/* <div id="tcc9"></div> */}
          </div>
          <div id="tcc4">by {props.author}</div>
          <div>
            <StarComponent />
          </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col id="tcc5">
          <span style={{ color: "#F05904" }}>{props.student}</span> people have
          rolled in recently
        </Col>
      </Row>

      <EditNewCourseModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          props.onHide();
        }}
        response={props.response}
      />
    </>
  );
}
