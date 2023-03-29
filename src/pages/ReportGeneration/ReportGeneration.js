import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { apicaller } from "../../utils/api";
import "./ReportGeneration.css";

export default function ReportGeneration() {
  const location = useLocation();
  const getTestBookingDetails = location?.state?.testBookingDetails;
  // console.log("abcd", getTestBookingDetails);
  const navigate = useNavigate();

  const [rString, setRString] = useState("");
  const [rString1, setRString1] = useState("");

  const [reportArr, setReportArr] = useState([]);

  // add this value function
  const addThisValueFun = () => {
    let reportGenObj = new Object();
    reportGenObj.reportName = rString;
    reportGenObj.reportValue = rString1;
    reportArr.push(reportGenObj);
    setRString("");
    setRString1("");
    // console.log("report generated array ", reportArr);
  };

  const addValue = () => {
    // console.log(rString);
  };

  const generateReport = () => {
    const data = JSON.stringify({
      diagnosis: "abcd",
      gross_examination: reportArr,
      specimen: "",
      _id: getTestBookingDetails?._id,
    });

    apicaller("report", data, "put", null)
      .then((res) => {
        reportArr.splice(0, reportArr.length);
        navigate("/managetest");
        alert("Report Generated Successfully");
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <>
      <Header />
      <Container>
        {/* <Row id="rg2">
          <Col>
            <Button id="rg1">Upload report PDF</Button>
          </Col>
        </Row> */}
      </Container>
      <Container id="rg4">
        <Row>
          <Col id="rg3">Generate Report</Col>
        </Row>
        <Row id="rg5">
          <Col>
            <div id="rg7">
              <span id="rg6">Patient Name :</span>{" "}
              {getTestBookingDetails?.booking_for_other
                ? getTestBookingDetails?.booking_for_other?.employe_user_name
                : getTestBookingDetails.user.first_name +
                  getTestBookingDetails.user.last_name}
            </div>
            <div id="rg7">
              <span id="rg6">Age/sex :</span>{" "}
              {getTestBookingDetails?.booking_for_other
                ? new Date().getFullYear() -
                  new Date(
                    getTestBookingDetails?.booking_for_other?.employe_user_dob
                  ).getFullYear()
                : new Date().getFullYear() -
                  new Date(getTestBookingDetails?.user?.dob).getFullYear()}{" "}
              /{" "}
              <span>
                {getTestBookingDetails?.booking_for_other
                  ? getTestBookingDetails?.booking_for_other
                      ?.employe_user_gender
                  : getTestBookingDetails?.user?.gender}{" "}
              </span>
            </div>
            <div id="rg7">
              <span id="rg6">Email :</span>
              {getTestBookingDetails?.booking_for_other
                ? getTestBookingDetails?.booking_for_other?.employe_user_email
                : getTestBookingDetails.user?.email}
            </div>

            <div id="rg7">
              <span id="rg6">Organization : </span>
              {getTestBookingDetails?.user?.organization_name
                ? getTestBookingDetails?.user?.organization_name
                : "N/A"}
            </div>
          </Col>
          <Col>
            {/* <div id="rg7">
              <span id="rg6">Case No:</span> #123456
            </div> */}
            <div id="rg7">
              <span id="rg6">Case No : </span>
              {getTestBookingDetails.case_number}
            </div>
            <div id="rg7">
              {/* <span id="rg6">Collected on :</span>{getTestBookingDetails.createdAt} */}
              <span id="rg6">Booked on :</span>
              {new Date(getTestBookingDetails.createdAt)?.toLocaleString()}
            </div>
            <div id="rg7">
              {/* <span id="rg6">Received on :</span>{getTestBookingDetails.lab_test_id[0].createdAt} */}
              <span id="rg6">Contact Number :</span>
              {getTestBookingDetails?.booking_for_other
                ? getTestBookingDetails?.booking_for_other?.employe_user_phone
                : getTestBookingDetails.user?.phone_number}
            </div>
          </Col>
        </Row>
        <Row>
          <Col id="rg8">
            {getTestBookingDetails?.lab_test_id?.test_name} :{" "}
            {getTestBookingDetails?.test_category_id?.category_name}
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label className="rg9">Diagnosis</Form.Label> */}
                <Row>
                  <Col>
                    <Form.Control
                      className="rg10"
                      value={rString}
                      placeholder="Name"
                      onChange={(e) => setRString(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className="rg10"
                      value={rString1}
                      onChange={(e) => setRString1(e.target.value)}
                      placeholder="Value"
                    />
                  </Col>
                </Row>

                {/* 
                <Form.Label className="rg9">Microscopic Examination</Form.Label>
                <Form.Control as="textarea" rows={3} className="rg10" />

                <Form.Label className="rg9">Gross Examination</Form.Label>
                <Form.Control as="textarea" rows={3} className="rg10" />

                <Form.Label ClassName="rg9">Specimen</Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" />

                <Form.Label className="rg9">pertinent history</Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" />

                <Form.Label className="rg9">
                  Add Address, Contact number and other details
                </Form.Label>
                <Form.Control as="textarea" rows={1} className="rg10" /> */}
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button id="rg12" onClick={() => addThisValueFun()}>
              Add This Value
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        className="mb-5"
        style={{
          padding: "1rem 3rem",
          color: "#029967",
          borderRadius: "10px",
          border: "2px solid #029967",
        }}
      >
        <>
          {reportArr?.map((item, index) => (
            <div key={index}>
              <span>{item.reportName}</span> : <span>{item.reportValue}</span>
            </div>
          ))}
        </>
      </Container>
      <Container>
        <Row>
          <Col id="rg11">
            <Button id="rg12" onClick={generateReport}>
              Generate Report
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
