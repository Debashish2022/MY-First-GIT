import React, { useState } from "react";
import { Col, Container, Form, Row, Image, InputGroup } from "react-bootstrap";
import "./Login.css";
import { BsPersonFill } from "react-icons/bs";
import { IoKey } from "react-icons/io5";
import Logo from "../../assets/Atharwlogo/AtharwLogo.png";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Icon from "react-icons-kit";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // to show password
  const [eyeicon, setEyeicon] = useState(eyeOff);
  const [eyepassword, setEyepassword] = useState("password");
  const navigate = useNavigate();

  // password show hide function
  const passwordeyebutton = () => {
    if (eyepassword === "password") {
      setEyeicon(eye);
      setEyepassword("text");
    } else {
      setEyeicon(eyeOff);
      setEyepassword("password");
    }
  };
  return (
    <Container>
      <Row id="logoMain">
        <Image src={Logo} id="logo" />
      </Row>
      <Row id="loginwholediv">
        <div>
          <Row id="loginheader">
            <Col id="loginrow">Login</Col>
          </Row>

          <div>
            <Row>
              <Col md={2}></Col>

              <Col md={8}>
                <div id="usernamediv">
                  <Row id="usericonrow" md={6}>
                    <Col md={1} xs={2}>
                      <BsPersonFill size={25} />
                    </Col>
                    <Col md={5} xs={4} id="usernametext">
                      Username
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Enter User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                </div>
              </Col>

              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>

              <Col md={8}>
                <div id="passworddiv">
                  <Row id="usericonrow" md={6}>
                    <Col md={1} xs={2}>
                      <IoKey size={25} />
                    </Col>
                    <Col md={5} xs={4} id="usernametext">
                      Password
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <InputGroup id="login5">
                        <Form.Control
                          type={eyepassword}
                          placeholder="Password"
                          id="login7"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>
                          <Icon
                            icon={eyeicon}
                            id="login6"
                            onClick={() => passwordeyebutton()}
                          />
                        </span>
                      </InputGroup>{" "}
                    </Form.Group>
                  </Row>
                </div>
              </Col>

              <Col md={2}></Col>
            </Row>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <div id="buttondiv">
                  <Link
                    to="attendance"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Login
                  </Link>
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </div>
        </div>
      </Row>
    </Container>
  );
}
