import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import "./LoginAdminPanel.css";
import logo from "../../asset/novalogo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions";
import { Navigate } from "react-router-dom";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import {Icon} from "react-icons-kit"
import { toast } from "react-toastify";

export default function SignUpAdminPanel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [type, setType] =useState('password');
  const[icon, setIcon]=useState(eyeOff);
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };
  const sToast = (msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "top-center",
    });
  };


  const userLogIn = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      eToast("please enter email and password");
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const user = {
          email,
          password,
        };
        // console.log("User Is : ", user);
        dispatch(login(user));
        setIsLoading(false);
      }, 500);
    }
  };

  const buttonToggle =()=>{
    if (type==='password'){
      setIcon(eye);
      setType('text');
    }
    else {
      setIcon(eyeOff);
      setType('password')
    }
  }

  if (auth.authenticate) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <Container id="containerDiv">
      <Row className="mt-5 mb-5">
        <Col md={1}></Col>
        <Col md={10}>
          <Row id="signInMainDiv">
            <Col xs={12} md={6} id="logoDiv">
              <Image src={logo} alt="logo" />
            </Col>
            <Col xs={12} md={6} id="signInDiv">
              <Form>
                <Row id="signInTxt">Sign In</Row>
                <Row>
                  <Col md={1}></Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        id="adminlogin3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group >
                      <InputGroup id="adminlogin1">
                        <Form.Control
                          type={type}
                          id="adminlogin3"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span>
                          <Icon
                            icon={icon}
                            id="adminlogin2"
                            onClick={() => buttonToggle()}
                          />
                        </span>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={1}></Col>
                </Row>
                <Row style={{ margin: "0px" }}>
                  <Col md={3} xs={1}></Col>
                  <Col md={6} xs={10} id="signInBtnDiv">
                    {" "}
                    <Button
                      variant="success"
                      id="signInBtn"
                      onClick={userLogIn}
                    >
                      {isLoading && <Spinner animation="border" size="sm" />}
                      {"  "}
                      Sign in
                    </Button>
                  </Col>
                  <Col md={3} xs={1}></Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}
