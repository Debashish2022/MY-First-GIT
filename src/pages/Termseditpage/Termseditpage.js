import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import { useLocation } from "react-router-dom";
import { apicaller } from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";
import "./Termseditpage.css";
import { toast } from "react-toastify";

export default function Termseditpage() {
  const location = useLocation();
  const termedit = location.state.id;
  // const { defaultvalue } = termedit.answer;
  const termid = location.state.id._id;
  const navigate = useNavigate();
  const [termsedititle, setTermsedititle] = useState(termedit.title);
  const [termseditDescription, setTermseditDescription] = useState(termedit.description);
  const [termsedititleerror, setTermsTitleerror] = useState(false);
  const [termseditDescriptionerror, setTermsDescriptionerror] = useState(false);

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


  const saveTermsBtn = async (e) => {
    // alert(termseditDescription.length);
    // alert(termsedititle.length);

    if (termsedititle.length > 0) {
      setTermsTitleerror(false);
      if (termseditDescription.length > 0) {
        setTermsedititle(false);

        var data = {
          title: termsedititle,
          description: termseditDescription,
        };
        const res = await apicaller(
          `update-terms/${termid}`,
          data,
          "PUT",
          null
        );
        // alert(res);

        if (res.status === 201 || res.status === 200) {
          navigate("/terms");
          sToast("Data Saved Successfully");
        }
      } else {
        setTermsDescriptionerror(true);
      }
    } else {
      setTermsTitleerror(true);
    }

    // e.preventDefault();

    // console.log(`https://api.novaprolabs.com/api/update-faq/${termid}`);
  };

  return (
    <>
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
              <Row id="termedit3">
                <Col>
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Title</Form.Label>
                      <Form.Control
                        onChange={(e) => setTermsedititle(e.target.value)}
                        type="text"
                        defaultValue={termsedititle}
                      />
                      {termsedititleerror && (
                        <div style={{ color: "red" }}>*Enter Title</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row id="termedit3">
                <Col>
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Desciption</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          setTermseditDescription(e.target.value)
                        }
                        defaultValue={termseditDescription}
                        as="textarea"
                        rows={3}
                      />
                      {termseditDescriptionerror && (
                        <div style={{ color: "red" }}>*Enter Desciption</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>

                <Col md={1}>
                  <Button
                    id="termbutton1"
                    onClick={saveTermsBtn}
                    //    onClick={saveTermsBtn}
                    variant="success"
                  >
                    Save
                  </Button>
                </Col>
                <Col md={1}>
                  <Button
                    id="termbutton1"
                    onClick={() => {
                      navigate("/terms");
                    }}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
