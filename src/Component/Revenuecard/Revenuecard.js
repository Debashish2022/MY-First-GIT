import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import "./Revenuecard.css";
import { apicaller } from "../../utils/api";
function Revenuecard() {

  const [totalRevenue, setTotalRevenue] = useState([]);

  useEffect(() => {
    getTotalRevenue();
  }, []);


  const getTotalRevenue = () => {
    apicaller("all-pathology-income", null, "get", null)
      .then((res) => {
        setTotalRevenue(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container id="revenuecard_maindiv">
        <Row
          style={{
            alignItems: "center",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          <Col id="revenuecard_title"> Revenue</Col>
          <Col id="revenuecard_addicon">
            {" "}
            <MdAddBox
              style={{
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              }}
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <BiDollar style={{ fontSize: "1.5rem", color: "green" }} />
          </Col>

          <Col md={4} id='revenuecard_dollartext' >  Dollar</Col>
        </Row> 
        <Row id='revenuecard_revenueamount'>{totalRevenue.income}</Row>
      </Container>
    </div>
  );
}

export default Revenuecard;
