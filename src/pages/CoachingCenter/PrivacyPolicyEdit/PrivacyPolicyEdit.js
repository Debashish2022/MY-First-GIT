import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API, apicaller } from "../../utils/api";
import { useLocation } from "react-router-dom";
import "./PrivacyPolicyEdit.css";
export default function PrivacyPolicyEdit() {
  // const aboutusedit = location.state.id;

  const navigate = useNavigate();
  const location = useLocation();
  const aboutusedit = location.state.id;
  const aboutid = location.state.id._id;
  const [aboutTitle, setAboutTitle] = useState(aboutusedit.title);
  const [aboutDescription, setAboutDescription] = useState(aboutusedit.description);
  const [aboutTitleerror, setAboutTitleerror] = useState(false);
  const [aboutDescriptionerror, setAboutDescriptionerror] = useState(false);

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

        const data = {
          _id: aboutid,
          title: aboutTitle,
          description: aboutDescription,
        };

        const res = await apicaller(
          `update-privacy/${aboutid}`,
          data,
          "PUT",
          null
        );

        if (res.status === 201 || res.status === 200) {
   
          sToast("Data Saved Successfully");
          navigate("/Privacy")
        }
      } else {
        setAboutDescriptionerror(true);
      }
    } else {
      setAboutTitleerror(true);
    }
  };

  return (
    <>
      <Container>
        <Row id="edt1">
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
                {/* {aboutTitleerror && (
                  <div style={{ color: "red" }}>Enter Title</div>
                )} */}
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
                {/* {aboutDescriptionerror && (
                  <div style={{ color: "red" }}>Enter Description</div>
                )} */}
              </Form.Group>
            </Form>
          </Col>
          <Row>
          <Col></Col>

          <Col>
            <Button onClick={saveBtn} variant="success" >
              Save
            </Button>
          </Col>
          <Col md={1}>
            <Button
              onClick={() => {navigate("/Privacy");}}
              variant="danger"
            >
              Cancel
            </Button>
          </Col>
          <Col></Col>
        </Row>
        </Row>
        
      </Container>
    </>
  );
}
