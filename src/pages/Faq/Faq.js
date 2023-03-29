import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import "./Faq.css";
import { apicaller } from "../../utils/api";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";
// import FaqAddModal from "../../Component/FaqAddModal/FaqAddModal";
// import faqAddModal from "../../Component/faqAddModal/faqAddModal";

// add new  modal
function AddNewDataModal(props) {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [errorAnswer, setErrorAnswer] = useState(false);
  const [errorQuestion, setErrorQuestion] = useState(false);

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


  const getFaqData = () => {
    apicaller("get-all-faqs", null, "get", null)
      .then((res) => {})
      .catch((e) => {
        // console.log(e);
      });
  };

  // to add new data
  const submit = async (e) => {
    if (question.length > 0) {
      setErrorQuestion(false);
      if (answer.length > 0) {
        setErrorAnswer(false);
        e.preventDefault();
        //   key value pair
        var data = JSON.stringify({
          question: question,
          answer: answer,
        });
        // console.log("Data is", data);
        const res = await apicaller("add-faq", data, "POST", null);
        if (res.status === 201 || res.status === 200) {
          setQuestion("");
          setAnswer("");
          props.onHide();
          sToast("Data Added Successfully");
          getFaqData();
        }
      } else {
        setErrorAnswer(true);
      }
    } else {
      setErrorQuestion(true);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Questions</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write Question Here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            {errorQuestion && <div style={{ color: "red" }}>*Enter Question</div>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Answer</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Write Answer Here"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            {errorAnswer && (
              <div style={{ color: "red" }}>*Enter Answer</div>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Faq() {
  const navigate = useNavigate();

  const [faqAdd, setFaqAdd] = React.useState(false);
  const [faqData, setfaqData] = useState([]);
  const [load, setLoad] = useState(true);

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


  useEffect(() => {
    getFaqData();
  }, []);

  const getFaqData = () => {
    apicaller("get-all-faqs", null, "get", null)
      .then((res) => {
        setfaqData(res.data.faq);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const deleteFaquestion = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: "https://api.novaprolabs.com/api/delete-faq/" + id,
        headers: {},
      };

      // console.log(id);

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getFaqData();
          sToast("Data Deleted Successfully.");
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
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
            {load ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "80vh",
                }}
              >
                {" "}
                <Loader animation="border" size="md" variant="dark" />
              </div>
            ) : (
              <>
                <div id="faq8">
                  <Container>
                    <Row id="faq9">
                      <Col id="faq5">FAQ Page</Col>
                      <Col md={1} id="faq10">
                        <Button
                          id="faq3"
                          onClick={() => setFaqAdd(true)}
                          varient="success"
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                    <AddNewDataModal
                      show={faqAdd}
                      onHide={() => {
                        setFaqAdd(false);
                        getFaqData();
                      }}
                    />

                    {faqData.map((item, index) => (
                      <Row id="faq1" key={index}>
                        <Col>
                          <div id="faq6">{item.question}</div>
                          <div>{item.answer}</div>
                        </Col>
                        <Col md={1}>
                          <Button
                            id="faq7"
                            variant="success"
                            onClick={() => {
                              navigate("/faqedit", { state: { id: item } });
                            }}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col md={1}>
                          <Button
                            id="faq7"
                            variant="danger"
                            onClick={() => deleteFaquestion(item._id)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    ))}
                  </Container>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
