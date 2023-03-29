import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Projectcomp.css";
import arch1 from "../../assets/Project/arch1.jpg";
import arch2 from "../../assets/Project/arch2.jpg";
import arch3 from "../../assets/Project/arch3.jpg";
import arch4 from "../../assets/Project/arch4.jpg";
import arch5 from "../../assets/Project/arch5.jpg";

import decor1 from "../../assets/Project/decor1.jpg";
import decor2 from "../../assets/Project/decor2.jpg";
import decor3 from "../../assets/Project/decor3.jpg";
import decor4 from "../../assets/Project/decor4.jpeg";
import decor5 from "../../assets/Project/decor5.jpg";

import out1 from "../../assets/Project/out1.jpg";
import out2 from "../../assets/Project/out2.jpg";
import out3 from "../../assets/Project/out3.jpg";
import out4 from "../../assets/Project/out4.jpg";
import out5 from "../../assets/Project/out5.jpeg";

import int1 from "../../assets/Project/int1.jpg";
import int2 from "../../assets/Project/int2.jpg";
import int3 from "../../assets/Project/int3.jpg";
import int4 from "../../assets/Project/int4.jpg";
import int5 from "../../assets/Project/int5.jpg";

import res1 from "../../assets/Project/res1.jpg";
import res2 from "../../assets/Project/res2.jpg";
import res3 from "../../assets/Project/res3.jpg";
import res4 from "../../assets/Project/res4.jpg";
import res5 from "../../assets/Project/res5.jpg";

function Projectcomp(props) {
  const all = [
    {
      allimg: arch1,
    },
    {
      allimg: arch2,
    },
    {
      allimg: arch3,
    },
    {
      allimg: arch4,
    },
    {
      allimg: arch5,
    },
    {
      allimg: decor1,
    },
    {
      allimg: decor2,
    },
    {
      allimg: decor3,
    },
    {
      allimg: decor4,
    },
    {
      allimg: decor5,
    },
    {
      allimg: out1,
    },
    {
      allimg: out2,
    },
    {
      allimg: out3,
    },
    {
      allimg: out4,
    },
    {
      allimg: out5,
    },
    {
      allimg: int1,
    },
    {
      allimg: int2,
    },
    {
      allimg: int3,
    },
    {
      allimg: int4,
    },
    {
      allimg: int5,
    },
    {
      allimg: res1,
    },
    {
      allimg: res2,
    },
    {
      allimg: res3,
    },
    {
      allimg: res4,
    },
    {
      allimg: res5,
    },
  ];

  const Architecture = [
    {
      archimg: arch1,
    },
    {
      archimg: arch2,
    },
    {
      archimg: arch3,
    },
    {
      archimg: arch4,
    },
    {
      archimg: arch5,
    },
  ];

  const Decore = [
    {
      decorimg: decor1,
    },
    {
      decorimg: decor2,
    },
    {
      decorimg: decor3,
    },
    {
      decorimg: decor4,
    },
    {
      decorimg: decor5,
    },
  ];

  const Outdoor = [
    {
      outdoorimg: out1,
    },
    {
      outdoorimg: out2,
    },
    {
      outdoorimg: out3,
    },
    {
      outdoorimg: out4,
    },
    {
      outdoorimg: out5,
    },
  ];

  const Interior = [
    {
      intimg: int1,
    },
    {
      intimg: int2,
    },
    {
      intimg: int3,
    },
    {
      intimg: int4,
    },
    {
      intimg: int5,
    },
  ];

  const Residential = [
    {
      resimg: res1,
    },
    {
      resimg: res2,
    },
    {
      resimg: res3,
    },
    {
      resimg: res4,
    },
    {
      resimg: res5,
    },
  ];

  return (
    <>
      {props.store === "All" ? (
        <Container>
          <Row id="projectcomp2">
            {all.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.allimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}

      {props.store === "Architecture" ? (
        <Container>
          <Row>
            {Architecture.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.archimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}

      {props.store === "Decor" ? (
        <Container>
          <Row>
            {Decore.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.decorimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}

      {props.store === "Outdoor" ? (
        <Container>
          <Row>
            {Outdoor.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.outdoorimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}

      {props.store === "Interior" ? (
        <Container>
          <Row>
            {Interior.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.intimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}

      {props.store === "Residential" ? (
        <Container>
          <Row>
            {Residential.map((item) => (
              <Col md="4" xs="12" id="projectcomp2">
                <img src={item.resimg} id="projectcomp1" />
              </Col>
            ))}
          </Row>
        </Container>
      ) : null}
    </>
  );
}

export default Projectcomp;
