import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./Bookinghistory.css";
import { TiArrowBack } from "react-icons/ti";
function Bookinghistory() {
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "3rem" }}>
          <Col
            md={2}
            style={{
              fontFamily: "exo",
              fontSize: "1.4rem",
              fontWeight: "500",
              marginBottom: "2rem",
              color: "#029967",
            }}
          >
            {" "}
            <TiArrowBack
              style={{
                backgroundColor: "#029967",
                color: "white",
                borderRadius: "1rem",
                fontSize: "2rem",
              }}
            />{" "}
            Back{" "}
          </Col>
          <Col md={4} xs={12}>
            <label
              for="datepicker"
              id="managetest_02"
              style={{
                marginRight: "1rem",
                color: "#029967",
                fontWeight: "600",
              }}
            >
              Select Date :{" "}
            </label>
            <input type="date" id="managetest_01" name="selecdate" />
          </Col>
          <Col md={0} xs={0}></Col>
        </Row>

        <Container id="managetest_tablemain">
          <Table
            striped
            bordered
            hover
            style={{ marginTop: "2rem", border: "0px" }}
          >
            <thead id="managetest_thead">
              <tr style={{ border: "none" }}>
                <th style={{ border: "none" }}>Sl.</th>
                <th>Name</th>
                <th>Company name</th>
                <th>Test type</th>
                <th> Timing</th>
                <th>Test status </th>
                <th> Report status </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Bhavani Khuntia</td>
                <td>Codekart</td>
                <td> Urine Test</td>
                <td> 9.00pm</td>
                <td>
                  {" "}
                  <div id="bookinghistory_teststatus"> Done </div>
                </td>
                <td>
                  {" "}
                  <div id="bookinghistory_reportststus"> Report sent </div>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default Bookinghistory;
