import React from 'react'
import TopratedCourse_Card from "../../components/TopratedCourseCard/TopratedCourseCard";
import { Col, Container, Row } from "react-bootstrap";
// import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./Coursesunderme.css";
export default function Coursesunderme() {
  return (
    <>
    {/* <HeaderNav /> */}
      <Container id="cont1">
        {/* <Row>
          <Col id="mac1">My Courses</Col>
        </Row> */}
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
            <TopratedCourse_Card
              title="MERN Stack Course 2023 - MongoDB, Express, React and NodeJS"
              author="Debashish Jena"
              student="3423"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
