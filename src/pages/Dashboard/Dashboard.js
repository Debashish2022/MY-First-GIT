import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Dashboard.css";
import { FcCalendar } from "react-icons/fc";
import GLineChart from "../../components/GLineChart/GLineChart";
import GPieChart from "../../components/GPieChart/GPieChart";
import Header2 from "../../components/Header2/Header2";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import { Link } from "react-router-dom";
import DashboardTable from "../DashboardTable/DashboardTable";

export default function Dashboard() {
  return (
    <>
      <Header2 />
      <Container>
        <Row id="dash1">
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <DashboardCard
              title="Total visitor"
              quantity="100000"
              percentage="92% unique title"
            />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <DashboardCard
              title="Products Sold"
              quantity="100000"
              percentage="92% unique title"
            />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3} id="dash3">
            <DashboardCard
              title="Order Received"
              quantity="100000"
              percentage="92% unique title"
            />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3} id="dash3">
            <DashboardCard
              title="Total Revenue"
              quantity="100000"
              percentage="92% unique title"
            />
          </Col>
        </Row>
        <Row id="dash2">
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Link to="/studentlist" id="dash4"><DashboardCard
              title="Total Student"
              quantity="100000"
              percentage="92% unique title"
            /></Link>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3}>
            <Link to="/managesubadmin" id="dash4">
              <DashboardCard
              title="Total Subadmin"
              quantity="100000"
              percentage="92% unique title"
            />
            </Link>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3} id="dash3">
            <DashboardCard
              title="Total Teacher"
              quantity="100000"
              percentage="92% unique title"
            />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3} xl={3} xxl={3} id="dash3">
            <DashboardCard
              title="Total Center"
              quantity="100000"
              percentage="92% unique visitor"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
          <Col id="dash10">Revenue Statistics</Col>
        </Row>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <GLineChart />
          </Col>
          <Col>
            <GPieChart />
          </Col>
        </Row>
        <Row>
        <DashboardTable/>
        </Row>
      </Container>
    </>
  );
}
