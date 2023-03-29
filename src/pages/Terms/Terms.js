import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import "./Terms.css";
import { Link, useNavigate } from "react-router-dom";
import Slidebar from "../Bar/Bar";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";

export default function Terms() {
  const navigate = useNavigate();
  const [modalon, setModalon] = useState(false);
  const [termData, settermData] = useState([]);
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
    getTermData();
  }, []);

  const getTermData = () => {
    apicaller("get-terms", null, "get", null)
      .then((res) => {
        settermData(res.data.terms);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const deleteTerms = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: "https://api.novaprolabs.com/api/delete-terms/" + id,
        headers: {},
      };

      // console.log(id);

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getTermData();
          sToast("Data Deleted Successfully.");
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (
    <div>
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
                <div id="t7">
                  <Container style={{ marginBottom: "2rem" }}>
                    <Row id="t6">
                      <Col>Terms & Condition</Col>
                      <Col md={1}>
                        {" "}
                        <Button id="t5" onClick={() => setModalon(true)}>
                          Add
                        </Button>
                        <AddTermsModal
                          show={modalon}
                          onHide={() => {
                            setModalon(false);
                            getTermData();
                          }}
                        />
                      </Col>
                    </Row>
                    {termData?.map((item) => (
                      <Row id="t3">
                        <Col>
                          <div id="t1">{item.title}</div>
                          <div>{item.description}</div>
                        </Col>
                        <Col id="t4" md={1}>
                          <Button
                            variant="success"
                            id="t5"
                            onClick={() => {
                              navigate("/termseditpage", {
                                state: { id: item },
                              });
                            }}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col id="t4" md={1}>
                          <Button
                            variant="danger"
                            id="t5"
                            type="danger"
                            onClick={() => deleteTerms(item._id)}
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
    </div>
  );
}

function AddTermsModal(props) {
  const [posttitle, setPosttitle] = useState("");
  const [postdescription, setPostdescription] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);

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


  const getTermData = () => {
    apicaller("get-terms", null, "get", null)
      .then((res) => {})
      .catch((e) => {
        // console.log(e);
      });
  };
  // to add new data
  const SubmitTerm = async (e) => {
    if (posttitle.length > 0) {
      setErrorTitle(false);
      if (postdescription.length > 0) {
        setErrorDescription(false);
        e.preventDefault();
        //   key value pair
        var data = JSON.stringify({
          title: posttitle,
          description: postdescription,
        });
        // console.log("Data is", data);
        const res = await apicaller("add-terms", data, "POST", null);
        if (res.status === 201 || res.status === 200) {
          setPosttitle("");
          setPostdescription("");
          props.onHide();
          sToast("Data Added Successfully");
          getTermData();
        }
      } else {
        setErrorDescription(true);
      }
    } else {
      setErrorTitle(true);
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
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={posttitle}
              onChange={(e) => setPosttitle(e.target.value)}
            />
            {errorTitle && <div style={{ color: "red" }}>*Enter Title</div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Desctiption</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter Desciption"
              value={postdescription}
              onChange={(e) => setPostdescription(e.target.value)}
            />
            {errorDescription && (
              <div style={{ color: "red" }}>*Enter Desciption</div>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={SubmitTerm}>
          Submit
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
