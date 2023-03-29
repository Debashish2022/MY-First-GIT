import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bookingtablecomp from "../../Component/Bookingtable.js/Bookingtablecomp";
import Dashboardcomp from "../../Component/Dashboardcomp/Dashboardcomp";
import Dashboardteamcard from "../../Component/Dashboardteamcard/Dashboardteamcard";
import Loader from "../../Component/Loader/Loader";
import Requestable from "../../Component/Requestable/Requestable";
import Revenuecard from "../../Component/Revenuecard/Revenuecard";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";

export default function Dashboard() {
  const [totalLab, setTotalLab] = useState([]);
  const [newLab, setNewLab] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [load, setLoad] = useState(true);
  
  useEffect(() => {
    getTotalLab();
  }, []);

  const getTotalLab = () => {
    apicaller("pathology", null, "get", null)
      .then((res) => {
        setTotalLab(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });

    apicaller("pathology-by-status?status=pending", null, "get", null)
      .then((res) => {
        setNewLab(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  
    apicaller("admin/all-order", null, "get", null)
      .then((res) => {
        setAllOrder(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  

    apicaller("admin/user-list", null, "get", null)
      .then((res) => {
        setTotalUser(res.data);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoad(false);
      });
  };
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
            style={{
              backgroundColor: "aliceblue",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <div id="dashboard_maincontainer">
            {load ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight:"80vh",
            }}
          >
            {" "}
            <Loader animation="border" size="md" variant="dark" />
          </div>
        ) : (
              <>
              <Container>
                <Row>
                  <Col>
                    <NavBar />
                  </Col>
                </Row>
              </Container>
             
              <Container fluid>
                <Row>
                  <Col>
                    <Dashboardcomp title="Total Lab" count={totalLab.length} />
                  </Col>
                  <Col>
                    <Dashboardcomp
                      title="New Lab Request"
                      count={newLab.length}
                    />
                  </Col>
                  <Col>
                    <Dashboardcomp
                      title="Total Booking"
                      count={allOrder.length}
                    />
                  </Col>
                  <Col>
                    <Dashboardcomp
                      title="Total user"
                      count={totalUser.length}
                    />
                  </Col>
                </Row>
              </Container>
              <Container style={{ marginTop: "1rem" }}>
                <Row>
                  <Col md={9}>
                    <Requestable />
                  </Col>
                  <Col md={3}>
                    <Revenuecard />
                  </Col>
                </Row>
              </Container>
              <Container style={{ marginTop: "1rem" }}>
                <Row>
                  <Col md={12}>
                    <Bookingtablecomp />
                  </Col>
                  <Col md={3} style={{ marginTop: "-2rem" }}>
                    {/* <Dashboardteamcard /> */}
                  </Col>
                </Row>
              </Container>
              </>
        )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
