import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Addcategory from "../../Component/Addcategory/Addcategory";
import PatholabDetailsComp1 from "../../Component/PatholabDetailsComp1/PatholabDetailsComp1";
import PatholabDetailsComp2 from "../../Component/PatholabDetailsComp2/PatholabDetailsComp2";
import TotalRevenue from "../../Component/TotalRevenue/TotalRevenue";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import NavBar2 from "../NavBar2/NavBar2";
import logo from "../../asset/novalogo.png";

export default function PatholabDetail() {
  const location = useLocation();
  // console.log("lab detail data is", location.state.id);
  // const [pathoDetailData, setPathoDetailData] = useState([]);

  // useEffect(() => {
  //   getPathoDetailData();
  // }, []);

  // const getPathoDetailData = () => {
  //   apicaller(
  //     `pathology-by-status?status=approved/${location.state.id}`,
  //     null,
  //     "get",
  //     null
  //   ).then((res) => {
  //     console.log(res.data);
  //     setPathoDetailData(res.data);
  //   });
  // };
  const pathoDetailData = location.state.id;
  // alert (JSON.stringify(pathoDetailData));
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2" xs="3">
            <Slidebar />
          </Col>
          <Col
            md="10"
            xs="9"
            style={{ backgroundColor: "aliceblue", paddingTop: "2rem" }}
          >
            <Container>
              <Row>
                <Row>
                  {" "}
                  <Col>
                    <NavBar2 />
                  </Col>
                </Row>
              </Row>
            </Container>

            <Container fluid>
              <Row>
                <Col md="8">
                  <PatholabDetailsComp2
                    img={pathoDetailData?.lab_img[0]?.img}
                    labname={pathoDetailData.lab_name}
                    // address={pathoDetailData.location}
                    email={pathoDetailData.email}
                    phone={pathoDetailData.phone_number}
                    para={pathoDetailData.value_for_money_description}
                  />
                </Col>
                <Col md="4">
                  <TotalRevenue />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <Addcategory />
                    </Col>
                  </Row>
                </Col>
                <Col md="4">
                  <PatholabDetailsComp1 />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
