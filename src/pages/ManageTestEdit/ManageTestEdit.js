import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Managetest from "../../components/Managetest/Managetest";
import "./ManageTestEdit.css";
import { TiArrowBackOutline } from "react-icons/ti";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";

export default function ManageTestEdit() {
  const [uStatus, setUstatus] = useState([]);
  const [updateVal, setUpdateVal] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("lab detail data is", location.state.id);
  // const [testBookingDetails, setTestBookingDetails] = useState({});
  const testBookingDetails = location.state.item;
  // console.log(testBookingDetails);
  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   getTestBookingDetails();
  // }, []);

  // const getTestBookingDetails = () => {
  //   apicaller(`/${location.state.id}`, null, "get", null).then(
  //     (res) => {
  //       console.log(res.data);
  //       setTestBookingDetails(res.data);
  //     }
  //   );
  // };
  const updateStatusVal = () => {
    apicaller(`all-reports/${auth?.user?.pathology_id?._id}`, null, "get", null)
      .then((res) => {
        setUstatus(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const updateStatus = (id) => {
    if (window.confirm("are you sure you want to change status : ")) {
      const data = {
        _id: id,
        status: updateVal,
      };
      // const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzNDE2Mjg0MjY5NDE4NzdkZDlmNTY0ZSIsImVtYWlsIjoiYWRtaW5Abm92YS5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ0V281cTZVejBlajZTcGYyaWwvV1N1TGxMaE9XYk9ZVXVXV2cvcXVsYlB1MVBTbkovVkRKLiIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiaXNfZmFjZWJvb2tfdmVyaWZpZWQiOmZhbHNlLCJpc19hcHBsZV92ZXJpZmllZCI6ZmFsc2UsImlzX3Byb2ZpbGVfY29tcGxldGVkIjp0cnVlLCJ1c2VyX3R5cGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMDhUMTE6NDQ6MDQuMDY0WiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMDhUMTE6NDQ6MDQuMDY0WiIsIl9fdiI6MH0sImlhdCI6MTY2Nzg4Mzg3MSwiZXhwIjoxNjcwNDc1ODcxfQ.4fIAxpn7lpFWmF5OmTSagHAvVhQ87K8PwsTDVx9LQpM"
      apicaller("report", data, "put", null)
        .then((res) => {
          updateStatusVal();
          alert("Status Changed Succesfully");
          navigate("/managetest");
          // window.location.reload();
        })
        .catch((e) => {
          // console.log(e);
        });
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row style={{ marginTop: "1.5rem" }}>
          <Link to="/managetest" element={<Managetest />}>
            <TiArrowBackOutline
              style={{ height: "1.5em", width: "1.5em", color: "green" }}
            />
          </Link>
          <Col>
            {/* {testBookingDetails.test_category_id?.map((item) => ( */}
            <Form>
              <Row id="testmodaledit3">
                <Col>Case number : {testBookingDetails.case_number}</Col>
                <Col>Current status : {testBookingDetails.status}</Col>
              </Row>
              <Row>
                <Col></Col>
                <Col id="edittestmodal7">
                  <Form.Select
                    aria-label="Default select example"
                    id="testeditmodal6"
                    value={updateVal}
                    onChange={(e) => setUpdateVal(e.target.value)}
                  >
                    <option>Change order status</option>
                    <option value="order confirmed">order confirmed</option>
                    <option value="sample collected">sample collected</option>
                    <option value="test completed">test completed</option>
                  </Form.Select>
                </Col>
                <Col></Col>
              </Row>
              <Row id="testmodaledit3">
                <Col>
                  Report date & time :{" "}
                  {new Date(testBookingDetails.createdAt).toLocaleDateString()},{" "}
                  {new Date(
                    testBookingDetails.user.createdAt
                  ).toLocaleTimeString()}{" "}
                </Col>
                <Col></Col>
                <Col>
                  {/* {testBookingDetails?.status === "test completed" && ( */}
                  <Button
                    disabled={
                      testBookingDetails?.status === "test completed"
                        ? false
                        : true
                    }
                    // id="edittestmodal8"
                    onClick={() => {
                      navigate("/report", {
                        state: { testBookingDetails: testBookingDetails },
                      });
                    }}
                  >
                    Generate Report
                  </Button>
                  {/* )} */}
                </Col>
              </Row>
              <Row
                style={{
                  backgroundColor: "gray",
                  padding: "30px",
                  borderRadius: "10px",
                }}
              >
                <Col style={{ color: "white", fontWeight: "bolder" }}>
                  Slot Time : {testBookingDetails?.order_id?.booking_time}
                </Col>
                <Col style={{ color: "white", fontWeight: "bolder" }}>
                  Slot Date : {testBookingDetails?.slot?.slot_date}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label id="testmodaledit2">First name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    value={testBookingDetails.user.first_name}
                    disabled
                  />
                </Col>
                <Col>
                  <Form.Label id="testmodaledit2">Last name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    value={testBookingDetails.user.last_name}
                    disabled
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="testmodaledit4">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={testBookingDetails.user.email}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="testmodaledit2">Mobile number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="mobile number"
                  disabled
                  value={testBookingDetails?.user?.phone_number}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Label id="testmodaledit2">Category</Form.Label>
                  <Form.Control
                    placeholder="category"
                    value={testBookingDetails?.test_category_id?.category_name}
                    disabled
                  />
                </Col>
                <Col>
                  <Form.Label id="testmodaledit2">Sub-category</Form.Label>
                  <Form.Control
                    placeholder="sub-category"
                    value={testBookingDetails?.lab_test_id?.test_name}
                    disabled
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label id="testmodaledit4">Booking for others</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="others"
                  value={
                    testBookingDetails?.booking_for_other
                      ? testBookingDetails?.booking_for_other?.employe_user_name
                      : "N.A"
                  }
                  disabled
                />
              </Form.Group>
              <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                <Button
                  id="testeditmodal5"
                  onClick={() => updateStatus(testBookingDetails._id)}
                >
                  Save
                </Button>
              </div>
            </Form>
            {/* ))} */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
