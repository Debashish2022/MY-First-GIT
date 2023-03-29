import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./Myprofile.css";
import dp from "../../assets/Mern/mern.png";

export default function Myprofile() {
  return (
    <>
      <HeaderNav />
      <Container>
        <Row id="mp16">
          <Col
            xs={{ span: 12, order: 2 }}
            sm={{ span: 12, order: 2 }}
            md={{ span: 8, order: 1 }}
            lg={{ span: 8, order: 1 }}
            xl={{ span: 8, order: 1 }}
            xxl={{ span: 8, order: 1 }}
          >
            <div id="mp1">Instructor</div>
            <div id="mp2">Mr Teacher</div>
            <div id="mp3">Head of Data Science at Pierian Training</div>
            <div>
              <Button id="mp4">Update</Button>
            </div>
            <Row style={{ marginTop: "2rem" }}>
              <Col>
                <div id="mp5">Total Student</div>
                <div id="mp6">12312312312</div>
              </Col>
              <Col>
                <div id="mp5">Total Ratings</div>
                <div id="mp6">12312312312</div>
              </Col>
            </Row>
            <div id="mp7">About</div>
            <div id="mp8">
              Jose Marcial Portilla has a BS and MS in Mechanical Engineering
              from Santa Clara University and years of experience as a
              professional instructor and trainer for Data Science, Machine
              Learning and Python Programming. He has publications and patents
              in various fields such as microfluidics, materials science, and
              data science. Over the course of his career he has developed a
              skill set in analyzing data and he hopes to use his experience in
              teaching and data science to help other people learn the power of
              programming, the ability to analyze data, and the skills needed to
              present the data in clear and beautiful visualizations. Currently
              he works as the Head of Data Science for Pierian Training and
              provides in-person data science and python programming training
              courses to employees working at top companies, including General
              Electric, Cigna, The New York Times, Credit Suisse, McKinsey and
              many more. Feel free to check out the website link to find out
              more information about training offerings.
            </div>
            <div>
              <Button id="mp9">Update</Button>
            </div>
          </Col>

          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            md={{ span: 4, order: 2 }}
            lg={{ span: 4, order: 2 }}
            xl={{ span: 4, order: 2 }}
            xxl={{ span: 4, order: 2 }}
            style={{ marginTop: "5rem" }}
            id="mp10"
          >
            <div style={{ width: "100%" }}>
              <div id="mp15">
                <Image src={dp} alt="dp" id="mp11" />
              </div>
              <div>
                <Button id="mp12">Linkedin</Button>
              </div>
              <div>
                <Button id="mp13">Twitter</Button>
              </div>
              <div>
                <Button id="mp14">Instagram</Button>
              </div>
              <div>
                <Button id="mp12">Facebook</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
