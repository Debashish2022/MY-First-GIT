import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import { useLocation } from "react-router-dom";
import { apicaller } from "../../utils/api";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Faqeditpage.css";
import { toast } from "react-toastify";

export default function Faqeditpage() {
  const location = useLocation();
  const faqedit = location.state.id;
  // const { defaultvalue } = faqedit.answer;
  const faqid = location.state.id._id;
  const navigate = useNavigate();
  const [faqeditQuestion, setFaqeditQuestion] = useState(faqedit.question);
  const [faqeditAnswer, setFaqeditAnswer] = useState(faqedit.answer);
  const [faqeditQuestionerror, setFaqeditQuestionerror] = useState(false);
  const [faqeditAnswererror, setFaqeditAnswererror] = useState(false);

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
    // alert(faqeditAnswer.length);
    // alert(faqeditQuestion.length);

    if (faqeditQuestion.length > 0) {
      setFaqeditQuestionerror(false);
      if (faqeditAnswer.length > 0) {
        setFaqeditQuestion(false);

        var data = {
          question: faqeditQuestion,
          answer: faqeditAnswer,
        };
        // console.log("Data is", data);
        // console.log(faqid);
        const res = await apicaller(`update-faq/${faqid}`, data, "PUT", null);
        // alert(res);

        if (res.status === 201 || res.status === 200) {
          navigate("/faq");
          sToast("Data Saved Successfully");
        }
      } else {
        setFaqeditAnswererror(true);
      }
    } else {
      setFaqeditQuestionerror(true);
    }

    // e.preventDefault();

    // console.log(`https://api.novaprolabs.com/api/update-faq/${faqid}`);
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
              <Row>
                <Col>
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Label>Enter Question</Form.Label>
                      <Form.Control
                        onChange={(e) => setFaqeditQuestion(e.target.value)}
                        type="text"
                        defaultValue={faqeditQuestion}
                      />
                      {faqeditQuestionerror && (
                        <div style={{ color: "red" }}>*Enter Question</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    {/* <Form.Group className="mb-3">
                      <Form.Label>Enter Your Answer</Form.Label>
                      <Form.Control
                        type="text"
                       
                        onChange={(e) => setFaqeditAnswer(e.target.value)}
                        defaultValue={faqedit.answer}
                      />
                    </Form.Group> */}

                    <Form.Group className="mb-3">
                      <Form.Label>Enter Your Answer</Form.Label>
                      <Form.Control
                        onChange={(e) => setFaqeditAnswer(e.target.value)}
                        defaultValue={faqeditAnswer}
                        as="textarea"
                        rows={3}
                      />
                      {faqeditAnswererror && (
                        <div style={{ color: "red" }}>*Enter Answer</div>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={5}></Col>

                <Col md={1}>
                  <Button
                    id="faqedit2"
                    onClick={saveBtn}
                    //    onClick={saveBtn}
                    variant="success"
                  >
                    Save
                  </Button>
                </Col>
                <Col md={1}>
                  <Button
                    id="faqedit2"
                    onClick={() => {
                      navigate("/faq");
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
    </>
  );
}
