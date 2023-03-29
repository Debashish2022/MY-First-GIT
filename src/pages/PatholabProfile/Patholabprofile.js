import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Patholabprofile.css";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import { useState } from "react";

function Patholabprofile() {
  const auth = useSelector((state) => state.auth.user.pathology_id);
  // console.log("profile dashboard", auth?.lab_img);
  // for(let i=0; i<6; i++ ){
  //   console.log('yes');
  // }

  // const labimgshow = useSelector((state) => state.authauth?.lab_img);
  // const [labimg, setLabimg] = useState();

  //  setLabimg(auth?.lab_img);

  return (
    <>
      <Header />
      <Container fluid id="patholabprofile3">
        <Container>
          <Row id="patholabprofile11">
            <Col id="patholabprofile12" md={1} xs={3}>
              <div id="patholabprofile4">DL</div>
            </Col>
            <Col id="patholabprofile5" md={4}>
              <Row id="patholabprofile9">{auth?.lab_name} </Row>
              <Row id="patholabprofile10"> Email id : {auth?.email} </Row>
              <Row id="patholabprofile10"> In-charge :{auth?.full_name}</Row>
              <Row id="patholabprofile10">
                {" "}
                Contact no : {auth?.phone_number}{" "}
              </Row>
            </Col>
            <Col id="" md={7}>
              <Row id="patholabprofile10">
                Registration number : {auth?.gov_registration_no}
              </Row>
              <Row id="patholabprofile10">
                {" "}
                Facilities :{auth?.facilities.join()}
              </Row>
              <Row id="patholabprofile10">
                {" "}
                Timing : {auth?.week_start} - {auth?.week_end}{" "}
              </Row>
              <Row id="patholabprofile10">
                {" "}
                {auth?.time_start} - {auth?.time_end}{" "}
              </Row>
              <Row id="patholabprofile10">
                {" "}
                Specialization : {auth?.specialization}{" "}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row id="patholabprofile6">
          <Col md={1}></Col>
          <Col md={2}>
            <Row id="patholabprofile16">Description: </Row>
          </Col>
          <Col>
            <Row id="patholabprofile15">{auth?.description}</Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Container fluid>
        <Row id="patholabprofile7">
          {" "}
          <Col id="patholabprofile8"> Images </Col>
        </Row>

        <Row id="patholabprofile14">
          {auth?.lab_img &&
            auth?.lab_img?.map((item) => (
              <Col md={4} id="patholabprofile13">
                <Image src={item?.img} style={{ width: "100%" }} />
              </Col>
            ))}
        </Row>
        {/* <Row id="patholabprofile14">
          <Col md={1}> </Col>
          <Col md={5} id="patholabprofile13">
            {" "}
            dfs
          </Col>
          <Col md={5} id="patholabprofile13">
            sdf{" "}
          </Col>
          <Col md={1}> </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Patholabprofile;
