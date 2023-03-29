import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Userdetails.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileimage from "../../assets/Profileimage/profileImage.png";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "../../components/Header2/Header2";
function Userdetail() {
  var api = [
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
    {
      centername: "Order with prescription or MRN Number",
      url: profileimage,
      name: "Mr Rudra Narayan Dash",
      studentid: "#12345",
      mail: "dineshpanda1256@gmail.com",
    },
  ];

  return (
    <>
     <Header2/>
      <Container id="con">
       
        <Row id="heading">
          <Col xs={2} md={2}>
            Image
          </Col>
          <Col xs={3} md={3}>
            Name
          </Col>
          <Col xs={2} md={2}>
            Student id
          </Col>
          <Col id="userheading2" xs={3} md={3}>
            Mail id
          </Col>
          <Col id="userheading2" xs={2} md={2}>
            More
          </Col>
        </Row>

        <div>
          {api.map((props, i) => (
            <Link
              to="/attendance"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Row key={i} id="userdata">
                <Col id="usertext" xs={2} md={2}>
                  <img id="profileimg" src={props.url} alt="profile" />
                </Col>
                <Col id="usertext" xs={3} md={3}>
                  {props.name}
                </Col>
                <Col id="usertext" xs={2} md={2}>
                  {props.studentid}
                </Col>
                <Col id="mail" xs={3} md={3}>
                  {props.mail}
                </Col>
                <Col id="icon" xs={2} md={2}>
                  <BsThreeDots id="iconsize" />
                </Col>
              </Row>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Userdetail;
