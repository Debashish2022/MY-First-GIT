import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Revenue.css";
import { FaHandHoldingHeart } from "react-icons/fa";
import Chart from "react-apexcharts";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
export default function Revenue() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [24, 40, 25, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [34, 30, 35, 56, 63, 33, 73, 36],
      },
      {
        name: "series-3",
        data: [67, 40, 45, 31, 36, 66, 37, 63],
      },
    ],
  });
  return (
    <>
    <HeaderNav />
      <Container fluid id="venue15">
        <Container>
          <Row id="venue1">
            <Col md={9} lg={9} sm={9} sx={9}>
              <Row id="venue11">My Life time Earnings</Row>
              <Row id="vanue12">23,2456</Row>
            </Col>
            <Col md={3} sm={3} sx={3} lg={3} id="venue13">
              <FaHandHoldingHeart />
            </Col>
          </Row>
          <Row></Row>
          <div id="venue14">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
            />
          </div>
          <Row id="venue5">Earning from courses</Row>
          <Row id="venue8">
            <Col md={8} lg={8} sm={12} sx={12} id="venue9">
              1.Mern stack Course 2023-MongoDB,Express,React and NodeJS
            </Col>
            <Col md={4} lg={4} sm={12} sx={12} id="venue10">
              23,400
            </Col>
          </Row>
          <Row id="venue8">
            <Col md={8} lg={8} sm={12} sx={12} id="venue9">
              1.Mearn stack Course 2023-MongoDB,Express,React and NodeJS
            </Col>
            <Col md={4} lg={4} sm={12} sx={12} id="venue10">
              23,400
            </Col>
          </Row>
          <Row id="venue8">
            <Col md={8} lg={8} sm={12} sx={12} id="venue9">
              1.Mearn stack Course 2023-MongoDB,Express,React and NodeJS
            </Col>
            <Col md={4} lg={4} sm={12} sx={12} id="venue10">
              23,400
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
