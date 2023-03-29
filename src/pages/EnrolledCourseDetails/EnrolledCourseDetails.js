import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GoVerified } from "react-icons/go";
import Header2 from "../../components/Header2/Header2";
import ProgresBar from "../../components/ProgresBar/ProgresBar";
import "./EnrolledCourseDetails.css";

export default function EnrolledCourseDetails() {
  return (
    <>
      <Header2 />
      <Container>
        <Row style={{ marginTop: "2rem", marginBotton: "2rem" }}>
          <Col>
            <ProgresBar percentage="30" />
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="ecd1">
              <Row>
                <div id="ecd2">Module 1</div>
                <Col>
                  <Row>
                    <Col>
                      <div id="ecd3">Chapter-1: Introduction</div>
                      <div id="ecd3">Chapter-2: Get Started</div>
                      <div id="ecd3">Chapter-3: Array</div>
                      <div id="ecd3">Chapter-4: Object</div>
                    </Col>
                  </Row>
                </Col>
                <Col id="ecd4">
                  <Row>
                    <Col>
                      <div>
                        {" "}
                        <GoVerified style={{ color: "#38AF0F" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "#38AF0F" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "#38AF0F" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "#38AF0F" }} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id="ecd1">
              <Row>
                <div id="ecd2">Module 2</div>
                <Col>
                  <Row>
                    <Col>
                      <div id="ecd3">Chapter-1: Introduction</div>
                      <div id="ecd3">Chapter-2: Get Started</div>
                      <div id="ecd3">Chapter-3: Array</div>
                      <div id="ecd3">Chapter-4: Object</div>
                    </Col>
                  </Row>
                </Col>
                <Col id="ecd4">
                  <Row>
                    <Col>
                      <div>
                        {" "}
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div id="ecd1">
              <Row>
                <div id="ecd2">Module 3</div>
                <Col>
                  <Row>
                    <Col>
                      <div id="ecd3">Chapter-1: Introduction</div>
                      <div id="ecd3">Chapter-2: Get Started</div>
                      <div id="ecd3">Chapter-3: Array</div>
                      <div id="ecd3">Chapter-4: Object</div>
                    </Col>
                  </Row>
                </Col>
                <Col id="ecd4">
                  <Row>
                    <Col>
                      <div>
                        {" "}
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                      <div>
                        <GoVerified style={{ color: "grey" }} />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

