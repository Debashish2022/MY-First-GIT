import React, { useState } from "react";
import { Col, Container, Form, Row, Image, Button } from "react-bootstrap";
import "./Login.css";
import { BsPersonFill } from "react-icons/bs";
import { IoKey } from "react-icons/io5";
import AtharwLogo from "../../assets/logo.png";
import { apicaller } from "../../utils/api";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";
import {
  setUserEmail,
  setUserType,
  setUserToken,
  setUser_Id,
} from "../../Redux/Slice/UserSlice";
import Utility from "../../utils/Utility";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [revealPassword, setRevealPassword] = useState(false);

  // to show loader
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

  function validation() {
    if (email.length === 0) {
      Utility.eToast("Enter your Email Id");
      return false;
    } else if (!regEmail.test(email)) {
      Utility.eToast("Enter a valid Email Id");
      return false;
    } else if (password.length === 0) {
      Utility.eToast("Enter a valid Password");
      return false;
    } else {
      return true;
    }
  }

  const loginUserFun = async () => {
    if (validation()) {
      setIsLoading(true);

      const data = {
        email: email,
        password: password,
      };

      await apicaller("admin/login", data, "POST", null)
        .then((res) => {
          setIsLoading(false);
          console.log("data was ", data);
          var decoded = jwt_decode(res?.data?.token);
          console.log("my token data is ", decoded.data);

          var user = decoded.data;
          dispatch(setUserEmail(user?.email));
          dispatch(setUserType(user?.user_type));
          dispatch(setUser_Id(user._id));
          dispatch(setUserToken(res?.data?.token));
          navigate("/");
        })
        .catch((err) => {
          Utility.eToast(err?.response?.data?.error);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Container>
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src={AtharwLogo}
            style={{ height: "auto", width: "15rem", marginTop: "3rem" }}
          />
        </Col>
      </Row>

      <Row>
        <Col md={1}></Col>
        <Col md={10}>
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
                      <Row id="usericonrow">
                        <Col md={2} xs={2}>
                          <BsPersonFill size={25} />
                        </Col>
                        <Col md={10} xs={10} id="usernametext">
                          Enter Email Id
                        </Col>
                      </Row>
                      <Row>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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

                      <Form.Group className="mb-3 pb-3">
                        <Row>
                          <Col md={11} xs={10} style={{ paddingRight: "0px" }}>
                            <Form.Control
                              id="passwordInpField"
                              type={revealPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Col>
                          <Col md={1} xs={2} id="passwordVisibleOrNotDiv">
                            <div
                              id="passwordVisibleOrNot"
                              onClick={() => setRevealPassword(!revealPassword)}
                            >
                              {revealPassword ? (
                                <AiFillEyeInvisible />
                              ) : (
                                <AiFillEye />
                              )}
                            </div>
                          </Col>
                        </Row>
                      </Form.Group>
                    </div>
                  </Col>

                  <Col md={2}></Col>
                </Row>
                <Row>
                  <Col md={4}></Col>
                  <Col md={4}>
                    <Button id="buttondiv" onClick={() => loginUserFun()}>
                      {isLoading ? (
                        <Loader animation="border" size="sm" variant="light" />
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </div>
            </div>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default Login;
