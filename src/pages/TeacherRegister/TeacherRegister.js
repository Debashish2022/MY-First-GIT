import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Container, Form, Row, InputGroup } from "react-bootstrap";

import "./TeacherRegister.css";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import { ic_facebook } from "react-icons-kit/md/ic_facebook";
import { instagram } from "react-icons-kit/fa/instagram";
import { withBaseIcon } from "react-icons-kit";
import logo from "../../assets/Register/logo.png";
import { Link } from "react-router-dom";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import Loader from "../../components/Loader/Loader";

export default function TeacherRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [employe, setEmploye] = useState("");
  const [cv, setCv] = useState("");
  const [qualification, setQualification] = useState("");
  const [facebookId, setFacebookId] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [video, setVideo] = useState([]);
  const [profilePicture, setProfilePicture] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [emptyIntro, setEmptyIntro] = useState("");
  const [emptyProfile, setEmptyProfile] = useState("");
  const [introLink, setIntroLink] = useState("");
  const [profileLink, setProfileLink] = useState("");
  const [introUploadBtnLoader, setIntroUploadBtnLoader] =useState(false);
  const [profileBtnLoader, setProfileBtnLoader] = useState(false);
  const [desigNation, setDesigNation] = useState("");
  const [registerBtnLoader, setRegisterBtnLoader] = useState(false);


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





  function UploadIntro(e){
    setVideo(e.target.files[0]);
    setEmptyIntro(e.target.value);
  }
  function UploadProfilePic(e){
    setProfilePicture(e.target.files[0]);
    setEmptyProfile(e.target.value);
  }

function validation(){
  if(name.length === 0){
    Utility.eToast("Please Enter Your Name");
    return false;
  }else if(email.length === 0){
    Utility.eToast("Please Enter Your Email");
    return false;
  }else if(phoneNumber.length === 0){
    Utility.eToast("Please Enter Your Phone Number");
    return false;
  }else if(address.length === 0){
    Utility.eToast("Please Enter Your Address");
    return false;
  }else if(employe.length === 0){
    Utility.eToast("Please Select Employee Field");
    return false;
  }else if(emptyIntro === ""){
    Utility.eToast("Please Select Your Intro Video");
    return false;
  }else if(introLink === "" || introLink === undefined){
    Utility.eToast("Please Upload The Intro Video");
    return false;
  }else if(desigNation.length === 0){
    Utility.eToast("Please Enter Your Designation");
    return false;
  }else if(qualification.length === 0){
    Utility.eToast("Please Enter Your Highest Qualification");
    return false;
  }else if(cv.length === 0){
    Utility.eToast("Please Enter Your Short Cv");
    return false;
  }else if(emptyProfile === ""){
    Utility.eToast("Please Select Your Profile Picture");
    return false;
  }else if(profileLink === "" || profileLink === undefined){
    Utility.eToast("Please Upload The Profile Picture");
    return false;
  }else if(linkedinId.length === 0){
    Utility.eToast("Please Enter Your Linkdin Id");
    return false;
  }else if(facebookId.length === 0){
    Utility.eToast("Please Enter Your FaceBook Id");
    return false;
  }else if(instagramId.length === 0){
    Utility.eToast("Please Enter Your Instagram Id");
    return false;
  }else if(password.length === 0){
    Utility.eToast("Please Enter Password");
    return false;
  }else if(confirmPassword.length === 0){
    Utility.eToast("Please Enter Confirm Password");
    return false;
  }else if(password !== confirmPassword){
    Utility.eToast("Please Check PassWord & Confirm Password is Not Equal");
    return false;
  }else {
    return true;
  }


}


function UploadIntroVideo(){
  if (emptyIntro !== "") {
    setIntroUploadBtnLoader(true);
    Utility.sToast('Please wait introduction is upload it may take time');
    const data = new FormData();
    data.append("img", video);

     apicaller(
      "single-upload",
      data,
      "POST",
      null,
      "multipart/form-data"
    )
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          // setIsLoading1(false);
          // const img_path = res.data.img;
          // console.log("link getting", img_path);
          setIntroLink(res.data.img);
          console.log("aws", introLink);
          Utility.sToast('Intro Video Uploaded Successfully');
        }
      })
      .catch((err) => {
        Utility.eToast("error occured while cover img upload is ", err);
      })
      .finally(()=>{
        setIntroUploadBtnLoader(false);
      })
  }else{
    Utility.eToast('Please Select a Intro Video To Upload');
  }
}

function UploadProfilePicImage(){
  if (emptyProfile !== "") {
    setProfileBtnLoader(true);
    const data1 = new FormData();
    data1.append("img", profilePicture);

     apicaller(
      "single-upload",
      data1,
      "POST",
      null,
      "multipart/form-data"
    )
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          // setIsLoading1(false);
          // const img_path = res.data.img;
          // console.log("link getting", img_path);
          setProfileLink(res.data.img);
          console.log("aws", introLink);
          Utility.sToast('Intro Video Uploaded Successfully');
        }
      })
      .catch((err) => {
        Utility.eToast("error occured while cover img upload is ", err);
      })
      .finally(()=>{
        setProfileBtnLoader(false);
      })
  }else{
    Utility.eToast('Please Select a Profile Picture To Upload');
  }
}

  const TeacherRegisterFunction = async () => {

   if(validation()){
    setRegisterBtnLoader(true);
    if (introLink !== "" || profileLink !== "") {
    var data = {
      "name": name,
      "email": email,
      "phone_number": phoneNumber,
      "address": address,
      "employed": employe,
      "video": introLink,
      "designation":desigNation,
      "highest_qualification": qualification,
      "cv": cv,
      "profile_image":profileLink,
      "linkedin":linkedinId,
      "facebook": facebookId,
      "instagram": instagramId,
      "password": password,   
    };
    console.log('data going....$$$', data);
    await apicaller("register", data, "post", null)
    .then(() => {
      Utility.sToast('Account Created Successfully');
    })
    .catch(()=>{
      Utility.eToast('Sorry Could Not Register');
    })
    .finally(()=>{
      setName("");
      setEmail("");
      setPhoneNumber("");
      setAddress("");
      setEmploye("");
      setEmptyIntro("");
      setEmptyProfile("");
      setVideo([]);
      setProfilePicture([]);
      setDesigNation("");
      setQualification("");
      setCv("");
      setLinkedinId("");
      setFacebookId("");
      setInstagramId("");
      setPassword("");
      setConfirmPassword("");
      setRegisterBtnLoader(false);
    });
  }
   }
  };

  useKey("Enter", TeacherRegisterFunction);

  const SideIconContainer = withBaseIcon({
    size: 25,
    style: { color: "#F05904" },
  });
  return (
    <>
      <Container>
        <Row>
          <Col  md={0} lg={2} ></Col>
          <Col md={12} lg={8}>
            <Row>
              <Col id="register18">
                <img id="register19" src={logo} />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mb-4 mt-3">
                <div id="register7">Teachers Registation Panel</div>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="register5"
                    type="text"
                    placeholder="Name :"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    id="register5"
                    type="email"
                    placeholder="Email :"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    id="register5"
                    placeholder="Phone number : "
                    value={phoneNumber}
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-1">
                  <Form.Control
                    as="textarea"
                    placeholder="Address :"
                    rows={5}
                    id="register5"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={5}>
                <Form.Label> </Form.Label>
                <Row id="register10">
                  <Col id="register6" md={5}>
                    <div id="register8">Employed ?</div>
                  </Col>
                  <Col
                    md={3}
                    id="register6"
                    onClick={() => setEmploye("yes")}
                  >
                    <div
                      id="register4"
                      style={
                        employe === "yes"
                          ? {
                              backgroundColor: "#F05904",
                              color: "white",
                              borderColor: "#F05904",
                            }
                          : null
                      }
                    >
                      YES
                    </div>
                  </Col>
                  <Col
                    id="register6"
                    md={3}
                    onClick={() => setEmploye("no")}
                  >
                    <div
                      id="register4"
                      style={
                        employe === "no"
                          ? {
                              backgroundColor: "#F05904",
                              color: "white",
                              borderColor: "#F05904",
                            }
                          : null
                      }
                    >
                      NO
                    </div>
                  </Col>
                  <Col></Col>
                </Row>
              </Col>
              <Col md={6} lg={7}>
                <Form.Label id="register11">Uplaod your intro video</Form.Label>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Control type="file" id="register9" value={emptyIntro} onChange={UploadIntro}/>
                    </Form.Group>
                  </Col>
                  <Col md={3} lg={2} id="register21"><Button id="register20" onClick={()=>UploadIntroVideo()}>{introUploadBtnLoader ? <Loader animation="border" variant="light"  size="sm"/>: "Upload"}</Button></Col>
                  <Col md={1}></Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3 mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Current Designation in your workplace :"
                    id="register5"
                    value={desigNation}
                    onChange={(e)=>setDesigNation(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Highest Qualification"
                    id="register5"
                    value={qualification}
                    onChange={(e)=>setQualification(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Short CV/ About yourself & Your teaching (maximum 100 words*)"
                    rows={7}
                    id="register5"
                    value={cv}
                    onChange={(e)=>setCv(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Label id="register11">
                  Choose your Profile Picture{" "}
                </Form.Label>
                <Row>
                  <Col md={4} xs={12}>
                    <Form.Group className="mb-3 mt-3" id="register17">
                      <Form.Control type="file" id="register12" value={emptyProfile} onChange={UploadProfilePic} />
                    </Form.Group>
                  </Col>
                  <Col md={2} lg={2} id="register21"><Button id="register22" onClick={()=>UploadProfilePicImage()}>{profileBtnLoader ? <Loader animation="border" variant="light"  size="sm"/>: "Upload"}</Button></Col>

                  <Col md={6} xs={12}>
                    <Form.Group className="mb-3" id="register16">
                      <Form.Control
                        type="text"
                        placeholder="Linkedin ID"
                        id="register5"
                        value={linkedinId}
                        onChange={(e)=>setLinkedinId(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>

              <Col md={6} className="mb-3">
                {" "}
                <Form className="d-flex">
                  <InputGroup id="register13">
                    <Form.Control
                      id="register15"
                      type="search"
                      placeholder="Facebook id "
                      className="me-2"
                      value={facebookId}
                      onChange={(e)=>setFacebookId(e.target.value)}
                    />
                    <span>
                      <SideIconContainer icon={ic_facebook} id="register14" />
                    </span>
                  </InputGroup>
                </Form>
              </Col>

              <Col md={6} className="mb-3">
                {" "}
                <Form className="d-flex">
                  <InputGroup id="register13">
                    <Form.Control
                      id="register15"
                      type="search"
                      placeholder="Instagram"
                      className="me-2"
                      value={instagramId}
                      onChange={(e)=>setInstagramId(e.target.value)}
                    />
                    <span>
                      <SideIconContainer icon={instagram} id="register14" />
                    </span>
                  </InputGroup>
                </Form>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Password"
                    id="register5"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter Confirm Password"
                    id="register5"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={12} className="mt-3">
                {" "}
                <Button
                  size="lg"
                  id="register1"
                  onClick={() => TeacherRegisterFunction()}
                >
                  {registerBtnLoader ? <Loader animation="border" variant="light"  size="sm"/>: "Register"}
                </Button>
              </Col>
              <Col md={12}>
                <div id="register2">
                  <div>Already Signed up !</div>
                  <Link
                    to="/"
                    style={{ color: "#F05904", textDecoration: "none" }}
                  >
                    <div id="register3">Login</div>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={0} lg={2}></Col>
        </Row>
      </Container>
    </>
  );
}
