import React from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import "./TopratedCourseCard.css";
import Course from "../../assets/Dashboard/course.png";
import StarComponent from '../StarComponent/StarComponent';
import { Link } from 'react-router-dom';

export default function TopratedCourse_Card(props) {
  return (
    <>
    
        <Row>
            <Col id="tcc1">
                <div id="tcc3">
                <Link to="/coursedetails" id="tcc6">
                    <Image src={Course} alt="Course image" style={{width:"100%"}}/>
                </Link>
                </div>
                <div id="tcc2">{props.title}</div>
                <div id="tcc4">by {props.author}</div>
                <div><StarComponent /></div>
            </Col>
        </Row>
        <Row>
            <Col id="tcc5">
                {/* <span style={{color:"#F05904"}}>{props.student}</span> people have rolled in recently */}
            </Col>
        </Row>
       
    </>
  )
}
