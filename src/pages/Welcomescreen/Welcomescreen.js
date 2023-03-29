import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row,InputGroup } from "react-bootstrap";
import "./Welcomescreen.css";
import { FcGoogle } from "react-icons/fc";
import nova from "../../asset/novalogo.png";
import whitelogo from "../../asset/whitelogo.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import {Icon} from "react-icons-kit"
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

export default function Welcomescreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [type, setType] =useState('password');
  const[icon, setIcon]=useState(eyeOff);

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
  

  const userLogIn = () => {
    if (email === "" || email === undefined) {
      alert("Please Enter Email");
      setIsLoading(false);
      return false;
    } else if (password === "") {
      alert("Please Enter Password");
      setIsLoading(false);
      return false;
    } else {
      setIsLoading(true);
      setTimeout(() => {
        const user = {
          email,
          password,
          type: "pathology",
        };
        // console.log("User Is : ", user);
        dispatch(login(user));
        setIsLoading(false);
      }, 500);
    }
  };
  const userLogInData = (e) => {
    // e.preventDefault();
  };

  if (auth.authenticate) {
    return <Navigate to={"/home"} />;
  }
  return (
    <>
      <Container id="welcome8">
        <Row style={{ textAlign: "center" }}>
          <Col xs={1} md={1}></Col>
          <Col xs={10} md={10} id="welcome1">
            <Row>
              <Col>
                <Image src={whitelogo} alt="logo" id="welcome3" />
              </Col>
            </Row>
            <Row>
              <Col id="welcome2">Patholab Panel</Col>
            </Row>
            <Row>
              <Col>
                <Form id="welcome4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="User Email"
                      className="welcome5"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <InputGroup  id="welcome13">
                    <Form.Control
                      type={type}
                      placeholder="Password"
                      className="welcome10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                     <span>
                 <Icon icon={icon} id="welcome14"  onClick={()=>buttonToggle()}/>
                 </span>
                 </InputGroup>
                  </Form.Group>
                  <Button variant="primary" id="welcome6" onClick={userLogIn}>
                    {isLoading && <Loader size="sm" />} Login
                  </Button>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col
                id="welcome11"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  alert("Please Contact Admin To reset Your Password")
                }
              >
                {/* <Link to="/forgetpwd" id="welcome12"> */}
                Forgot Password
                {/* </Link> */}
              </Col>
            </Row>
            <Row>
              <Col id="welcome7">
                <Link to="/labreg" id="welcome12">
                  Register your Lab Now{" "}
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={1} md={1}></Col>
        </Row>
      </Container>
    </>
  );
}
