import React, { useEffect, useRef, useState } from "react";
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
import Utility from "../../utils/Utility";
import { apicaller } from "../../utils/api";
import jwt_decode from "jwt-decode";
import { setTeacherAddress, setTeacherCv, setTeacherEmail, setTeacherFacebook, setTeacherId, setTeacherName, setTeacherPhone, setTeacherQualification, setTeacherToken, setTeacherUid } from "../../redux/Slice/userSlice";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginButtonLoader, setLoginButtonLoader] = useState(false);
  const dispatch = useDispatch();


  // ENTER BUTTON PRESS LOGIN START 
  function useKey(key, cb) {
    const callbackRef = useRef(cb);
  
    useEffect(() => {
      callbackRef.current = cb;
    },);
  
    useEffect(() => {
      function handle(event) {
        if (event.code === key) {
          callbackRef.current(event);
        }
      }
  
      document.addEventListener("keypress", handle);
      return () => document.removeEventListener("keypress", handle);
    }, [key]);
  }

  // ENTER BUTTON PRESS LOGIN END


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

  const loginemail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;

  function validation() {
    if (email.length === 0) {
      Utility.eToast("Please Enter Your Email");
      return false;
    } else if (!loginemail.test(email)) {
      Utility.eToast("Please Enter a Valid Email");
      return false;
    } else if (password.length === 0) {
      Utility.eToast("Please Enter Your Password");
      return false;
    } else {
      return true;
    }
  }

  const LoginFunction = async () => {
    if (validation()) {
      setLoginButtonLoader(true);
      const data = {
        email: email,
        password: password,
      };

      await apicaller("teacher-login", data, "POST", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log(
              "success..Token .......$$$$$",
              jwt_decode(res.data.token)
            );
            var token = res.data.token;

            const userDecodeData = jwt_decode(res?.data?.token);
            const user = userDecodeData.data;
            console.log("success..User .......$$$$$", user);
            dispatch(setTeacherToken(token));
            dispatch(setTeacherId(user._id));
            dispatch(setTeacherName(user?.first_name));
            dispatch(setTeacherAddress(user?.address));
            dispatch(setTeacherCv(user?.cv));
            dispatch(setTeacherEmail(user?.email));
            dispatch(setTeacherFacebook(user?.facebook));
            dispatch(setTeacherQualification(user?.highest_qualification));
            dispatch(setTeacherPhone(user?.phone_number));
            dispatch(setTeacherUid(user?.uid));

            if(token) {
              Utility.sToast(`Welcome to Teacher Panel ${user?.first_name}`);
              navigate("/dash");
              setEmail("");
              setPassword("");
            }
          }
        })
        .catch((error) => {
          // console.log('error isss', error.response.data.error);
          Utility.eToast(error.response.data.error);
        })
      .finally(() =>{
        setLoginButtonLoader(false);
      });
    }
  };


  useKey("Enter", LoginFunction);

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
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Enter User Name"
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
                  <Row>
                    <Form.Group className="mb-3">
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
              <Col md={8} >
                <div id="buttondiv" onClick={() => LoginFunction()}>{loginButtonLoader ?  <Loader animation="border" variant="light"  size="sm"/> : 'Login' }</div>
                <div style={{ textAlign: "center", marginBottom: "3rem",marginTop:"3rem" }}>
                  <Link
                    to="/teacherreg"
                    style={{ color: "#F05904", textDecoration: "none" }}
                  >
                    Register
                  </Link>{" "}
                  yourself if you are a new teacher
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
