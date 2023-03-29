import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import { useLocation } from "react-router-dom";
import { apicaller } from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { SiMicrostrategy } from "react-icons/si";
import Aboutuscomp from "../../Component/Aboutcomp/Aboutuscomp";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import { toast } from "react-toastify";

function AboutEdit() {
  const location = useLocation();
  const aboutusedit = location.state.id;
  //   const {faqid} = faqedit._id;
  const aboutid = location.state.id._id;
  const navigate = useNavigate();
  const [aboutTitle, setAboutTitle] = useState(aboutusedit.title);
  const [aboutDescription, setAboutDescription] = useState(aboutusedit.description);
  const [aboutTitleerror, setAboutTitleerror] = useState(false);
  const [aboutDescriptionerror, setaboutDescriptionerror] = useState(false);

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


  const saveBtn = async (e) => {
    if (aboutTitle.length > 0) {
      setAboutTitleerror(false);
      if (aboutDescription.length > 0) {
        setAboutTitle(false);

        var data = {
          _id: aboutid,
          title: aboutTitle,
          description: aboutDescription,
        };
        // console.log("Data is", data);
        // console.log(aboutid);
        const res = await apicaller(`update-about-us`, data, "PUT", null);

        // using axios directly
        // var config = {
        //   method: "put",
        //   url: "https://api.novaprolabs.com/api/update-about-us",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: data,
        // };

        // axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        // alert(res);
        // alert(res);

        if (res.status === 201 || res.status === 200) {
          navigate("/Aboutus");
          sToast("Data Saved Successfully");
        }
      } else {
        setaboutDescriptionerror(true);
        // alert("Please Enter Description");
        
      }
    } else {
      setAboutTitleerror(true);
      // alert("Please Enter Title");
    }

    // e.preventDefault();

    // console.log(`https://api.novaprolabs.com/api/update-about-us/${aboutid}`);
  };

  return (
    <Container fluid>
      <Row>
        <Col md="2" xs="3">
          <Slidebar />
        </Col>
        <Col
          md="10"
          xs="9"
          style={{ backgroundColor: "aliceblue", paddingTop: "2rem" }}
        >
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="WriteHere"
                      defaultValue={aboutTitle}
                      onChange={(e) => setAboutTitle(e.target.value)}
                    />
                    {aboutTitleerror && (
                        <div style={{ color: "red" }}>*Enter Title</div>
                      )}
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="4"
                      placeholder="WriteHere"
                      defaultValue={aboutDescription}
                      onChange={(e) => setAboutDescription(e.target.value)}
                    />
                    {aboutDescriptionerror && (
                        <div style={{ color: "red" }}>*Enter Desciption</div>
                      )}
                  </Form.Group>
                </Form>
                {/* <Button variant="primary" type="submit" onClick={saveBtn}>
                  Save
                </Button> */}
              </Col>
            </Row>
            <Row>
                <Col md={5}></Col>

                <Col md={1}>
                  <Button
                    onClick={saveBtn}
                    style={{width:'100%',marginTop:'2rem'}}
                    variant="success"
                  >
                    Save
                  </Button>
                </Col>
                <Col md={1}>
                  <Button
                  style={{width:'100%',marginTop:'2rem'}}
                    onClick={() => {
                      navigate("/Aboutus");
                    }}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col md={5}></Col>
              </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutEdit;
