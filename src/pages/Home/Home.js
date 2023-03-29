import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import GLineChart from "../../components/GLineChart/GLineChart";
import GPieChart from "../../components/GPieChart/GPieChart";
import { IoIosContact } from "react-icons/io";
import { FaSyringe } from "react-icons/fa";
import Managetest from "../../components/Managetest/Managetest";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";

export default function Home() {
  //  const [chooseUsData, setChooseUsData] = useState([]);
  const [income, setIncome] = useState([]);
  const auth = useSelector((state) => state.auth);
  const [totalTest, setTotalTest] = useState(0);

  const localStorageItem =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getIncome();
    getMtest();
  }, []);

  const getMtest = () => {
    apicaller(`all-reports/${localStorageItem?.pathology_id?._id}`, null, "get", null)
      .then((res) => {
        setTotalTest(res.data?.length);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const getIncome = () => {
    apicaller(
      `pathology-income/${localStorageItem?.pathology_id?._id}`,
      null,
      "get",
      null
    )
      .then((res) => {
        setIncome(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <>
      <Header />
      <Container fluid id="home1">
        <Row id="home2">
          <Col xs={12} md={12} id="home3">
            Welcome to
          </Col>
        </Row>
        <Row id="home2">
          <Col xs={12} md={12} id="home4">
            Patholab Panel
          </Col>
        </Row>
        <Row>
          <Col></Col>

          <Col xs={12} md={3} id="home5">
            <div id="home6">Total revenue</div>
            <div id="home9">$</div>
            <div id="home7">{income.income}</div>
            <div id="home8"></div>
          </Col>
  <Col xs={12} md={3} id="home5">
            <div od="home6">Total Orders</div>
            <div id="home9">
              <FaSyringe />
            </div>
            <div id="home7">{totalTest}</div>
            <div id="home8"></div>
          </Col>
          <Col></Col>
        </Row>
        
      </Container>
      <Managetest />
    </>
  );
}
