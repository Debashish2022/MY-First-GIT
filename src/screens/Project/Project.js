import React, { useState } from "react";
import "./Project.css";
import { Row, Col, Container } from "react-bootstrap";
import Projectimg from "../../assets/image 1.png";
import Projectcomp from "../../components/ProjectComp/Projectcomp";
function Project() {
  const [category, setCategory] = useState("All");
  return (
    <>
      <Container fluid id="project3">
        {/* <Row>
          <Col id="project1">
            <img src={Projectimg} />
          </Col>
        </Row> */}
        <Row>
          <img src={Projectimg} alt="logo" id="privacypolicy1" />
        </Row>
        <Row>
          <Col id="project2">Project</Col>
        </Row>
        <Container className="mb-5">
          <Row>
            <Col md="3" xs="12">
              <Row
                id="project3"
                onClick={() => setCategory("All")}
                style={
                  category === "All"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                      }
                    : null
                }
              >
                All
              </Row>
              <Row
                id="project3"
                onClick={() => setCategory("Architecture")}
                style={
                  category === "Architecture"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                      }
                    : null
                }
              >
                Architecture{" "}
              </Row>
              <Row
                id="project3"
                onClick={() => setCategory("Decor")}
                style={
                  category === "Decor"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                      }
                    : null
                }
              >
                Decor
              </Row>
              <Row
                id="project3"
                onClick={() => setCategory("Outdoor")}
                style={
                  category === "Outdoor"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                        transition: "opacity 1s ease-in",
                      }
                    : null
                }
              >
                Outdoor
              </Row>
              <Row
                id="project3"
                onClick={() => setCategory("Interior")}
                style={
                  category === "Interior"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                        transition: "opacity 1s ease-in",
                      }
                    : null
                }
              >
                Interior
              </Row>
              <Row
                id="project3"
                onClick={() => setCategory("Residential")}
                style={
                  category === "Residential"
                    ? {
                        background: "#DFB946",
                        color: "#fff",
                        paddingLeft: ".4rem",
                        transition: "opacity 1s ease-in",
                      }
                    : null
                }
              >
                Residential
              </Row>
            </Col>
            <Col md="9" xs="12">
              {category === "All" ? <Projectcomp store="All"/> : null}
              {category === "Architecture" ? <Projectcomp  store="Architecture"/> : null}
              {category === "Decor" ? <Projectcomp  store="Decor"/> : null}
              {category === "Outdoor" ? <Projectcomp  store="Outdoor"/> : null}
              {category === "Interior" ? <Projectcomp  store="Interior"/> : null}
              {category === "Residential" ? <Projectcomp  store="Residential"/> : null}


            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Project;
