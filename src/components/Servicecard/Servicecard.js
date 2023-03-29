import React, { useEffect, useState } from "react";
import "./Servicecard.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import { useNavigate } from "react-router-dom";
import Utility from "../../utils/Utility";

function Servicecard(props) {

  const [showMore, setShowMore] = useState(false);

  const token = useSelector(getUserToken);
  const navigate = useNavigate();

  const deleteCard = () => {
    if(window.confirm("Are you sure you want to remove ?")) {
      var FormData = require("form-data");
      var data = new FormData();
      const response = apicaller(`service/${props.id}`, data, "delete", token, null);
      // console.log("delete response is ", response);
      Utility.sToast("Service deleted successfully");
      navigate("/");
    }
  }

  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <Row className="center" style={{ alignItem: "center" }}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="servicecard_single">
              <img
                src={props.dice}
                className="Servicecard_dice"
                alt="serviceimg"
              />
              <div className="Servicecard_heading">{props.head}</div>
              <div className="Servicecard_paragraph">
                {showMore ? props.para : `${props.para.substring(0, 250)}` }
                <Button id="sc2" onClick={()=>setShowMore(!showMore)}>
                  {showMore ? "showless" : "showmore.."}
                </Button>
              </div>
            </div>
            <Row>
              <Col>
                <Button id="sc1" onClick={deleteCard}>Remove</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Servicecard;
