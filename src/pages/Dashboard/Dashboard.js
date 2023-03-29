import React from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { MdSunny } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";
import { BsFillCloudMoonFill } from "react-icons/bs";
import TopratedCourse_Card from "../../components/TopratedCourseCard/TopratedCourseCard";
import "./Dashboard.css";
export default function Dashboard() {
  let Time = new Date();
  Time = Time.getHours();
  let Hours = "";

  if (Time < 12) {
    Hours = "Good morning";
    var icon = "Morning";
  } else if (Time < 18) {
    Hours = "Good Afternoon";
    var icon = "Afternoon";
  } else {
    Hours = "Good Evening";
    var icon = "Night";
  }
  return (
    <>
      <Container id="Dash16">
        <Row id="Dash1">
          <Col md={9} lg={9} sm={9} xs={9}>
            <Row id="Dash11">{Hours}</Row>
            <Row id="Dash12">Mr. Debashish Jena</Row>
          </Col>
          <Col md={3} sm={3} xs={3} lg={3} id="Dash13">
            {icon === "Morning" && <BsFillCloudSunFill id="Dash19" />}
            {icon === "Afternoon" && <MdSunny id="Dash20" />}
            {icon === "Night" && <BsFillCloudMoonFill id="Dash18" />}
            
          </Col>
        </Row>
        <Row id="Dash2">
          <Col md={3} lg={3} sm={12} xs={12} id="Dash17">
            <div id="Dash5">
              <Row id="Dash3">Total Teachers</Row>
              <Row id="Dash4">12</Row>
            </div>
          </Col>
          <Col md={3} lg={3} sm={12} xs={12} id="Dash17">
            <div id="Dash6">
              <Row id="Dash3">Total Students</Row>
              <Row id="Dash4">654</Row>
            </div>
          </Col>
          <Col md={3} lg={3} sm={12} xs={12} id="Dash17">
            <div id="Dash7">
              <Row id="Dash3">Total Courses Sold</Row>
              <Row id="Dash4">87</Row>
            </div>
          </Col>
          <Col md={3} lg={3} sm={12} xs={12} id="Dash17">
            <div id="Dash8">
              <Row id="Dash3">Total Revenue</Row>
              <Row id="Dash4">747477</Row>
            </div>
          </Col>
        </Row>
        <Row id="Dash9">Pending for Approval</Row>
        <Col id="Dash10">
          <Table>
            <thead>
              <tr style={{ color: "#F05904" }}>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Student id</th>
                <th>Course name</th>
                <th>Time & date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="Dash14">1</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
              <tr>
                <td id="Dash14">2</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
              <tr>
                <td id="Dash14">3</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
              <tr>
                <td id="Dash14">4</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
              <tr>
                <td id="Dash14">5</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
              <tr>
                <td id="Dash14">6</td>
                <td id="Dash14">Debashish jena</td>
                <td id="Dash14">jenadebashish@gmail.com</td>
                <td id="Dash14">SID4005</td>
                <td id="Dash14">Software Devloper</td>
                <td id="Dash14">13/03/2023</td>
                <th>
                  {" "}
                  <Button variant="primary">Approve</Button>{" "}
                </th>
                <th>
                  {" "}
                  <Button id="Dash15">View </Button>{" "}
                </th>
              </tr>
            </tbody>
          </Table>
        </Col>
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
  );
}
