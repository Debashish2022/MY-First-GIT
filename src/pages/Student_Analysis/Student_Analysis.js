import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./Student_Analysis.css";
import Chart from "../../assets/Chart.png";
import StudentImage from "../../assets/StudentImage.png";
import Circle from "../../assets/Circle.png";
import Progressbar from "../../components/ProgressBarComp/Progressbar";
import Button from "../../components/ButtonComponent/Button";

function Student_Analysis() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="StudentActiveText">Student Active Hour</div>
        </Col>
        <Row>
          <Col md={4}>
            <Image src={StudentImage} className="StudentImage" />
          </Col>
          <Col md={8}>
            <Image src={Chart} className="ChartImage" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="progressText">Course Progress</div>
            <Progressbar bgcolor="#EB6262" progress="70" height={30} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="ExamResultDiv3">
              <div className="ModuleText">
                Module1
                <div className="modulemaindiv">
                  <div className="ModuleText1">
                    <div>Chapter1, Introduction</div>
                    <div>Chapter2, Get Started</div>
                    <div>Chapter3, Es6,Classes,function,Variables</div>
                    <div>SpreadOperator</div>
                  </div>
                  <div>
                    {/* <Image src={Circle} className="CircleImage" /> */}
                  </div>
                </div>
              </div>

              <div className="ModuleText">
                Module2
                <div className="modulemaindiv">
                  <div className="ModuleText1">
                    <div>Chapter1, Introduction</div>
                    <div>Chapter2, Get Started</div>
                    <div>Chapter3, Es6,Classes,function,Variables</div>
                    <div>SpreadOperator</div>
                  </div>
                  <div>
                    {/* <Image src={Circle} className="CircleImage" /> */}
                  </div>
                </div>
              </div>

              <div className="ModuleText">
                Module3
                <div className="modulemaindiv">
                  <div className="ModuleText1">
                    <div>Chapter1, Introduction</div>
                    <div>Chapter2, Get Started</div>
                    <div>Chapter3, Es6,Classes,function,Variables</div>
                    <div>SpreadOperator</div>
                  </div>
                  <div>
                    {/* <Image src={Circle} className="CircleImage" /> */}
                  </div>
                </div>
              </div>

              <div className="ModuleText">
                Module4
                <div className="modulemaindiv">
                  <div className="ModuleText1">
                    <div>Chapter1, Introduction</div>
                    <div>Chapter2, Get Started</div>
                    <div>Chapter3, Es6,Classes,function,Variables</div>
                    <div>SpreadOperator</div>
                  </div>
                  <div>
                    {/* <Image src={Circle} className="CircleImage" /> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="ExamResultDiv1">
              <div className="text">Shedule Exam</div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="ExamResultDiv">
              <div className="text">
                Exam Two Result
                <div className="moduleText">
                  <div>Module 1 - 67</div>
                  <div>Module 2 - 54</div>
                  <div>Module 3 - 21</div>
                  <div>
                    <hr />
                  </div>
                  <div>Total result =134</div>
                </div>
              </div>
              <div>
                <Button btn="post" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="ExamResultDiv">
              <div className="text">Exam Two Result</div>
              <div>
                <Button btn="post" />
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Student_Analysis;
