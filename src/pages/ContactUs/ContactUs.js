import React, { useEffect, useState } from "react";
import "./ContactUs.css";
import Table from "react-bootstrap/Table";
import Header2 from "../../components/Header2/Header2";
import Container from "react-bootstrap/Container";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import Loader from "../../components/Loader/Loader";
import { Col, Row } from "react-bootstrap";

export default function ContactUs() {
  return (
    <>
      <Header2 />
      <>
        <Container id="contact2">
          <Row><Col id="contact4">
          <Table striped bordered hover>
            <thead id="contact3">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Subject</th>
                <th id="contact1">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pragati</td>
                <td>pb@gmaqil.com</td>
                <td>90901234565</td>
                <td>Kalahandi</td>
                <td>Course</td>
                <td>test in course</td>
              </tr>
              <tr>
                <td>Bhavna</td>
                <td>bk@gmail.com</td>
                <td>+91 9178 587 486</td>
                <td>Plot No 504 Patia Bhubaneswar. ODISHA [751024]</td>
                <td>Course</td>
                <td>test in course</td>
              </tr>
              <tr>
                <td>Bhavna</td>
                <td>bk@gmail.com</td>
                <td>+91 9178 587 486</td>
                <td>Plot No 504 Patia Bhubaneswar ODISHA [751024]</td>
                <td>Course</td>
                <td>test in course</td>
              </tr>
              <tr>
                <td>Bhavna</td>
                <td>bk@gmail.com</td>
                <td>+91 9178 587 486</td>
                <td>Plot No 504 Patia Bhubaneswar. ODISHA [751024]</td>
                <td>Course</td>
                <td>test in course</td>
              </tr>
              <tr>
                <td>Bhavna</td>
                <td>bk@gmail.com</td>
                <td>+91 9178 587 486</td>
                <td>Plot No 504 Patia Bhubaneswar. ODISHA [751024]</td>
                <td>Course</td>
                <td>test in course</td>
              </tr>
            </tbody>
          </Table>
          </Col></Row>
        </Container>
      </>
    </>
  );
}
