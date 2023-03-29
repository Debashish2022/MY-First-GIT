import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { SiMicrostrategy } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import "./PrivacyPolicy.css";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";

function PrivacyPolicy() {
  const navigate = useNavigate();
  // modal
  const [showAddNewDataModal, setShowAddNewDataModal] = React.useState(false);
  const [load, setLoad] = useState(true);

  const [policyData, setPolicyData] = useState([]);

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
    getPolicyData();
  }, []);

  const getPolicyData = () => {
    apicaller("get-privacy", null, "get", null)
      .then((res) => {
        setPolicyData(res.data.privacy);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setLoad(false);
      });
  };

  const deleteData = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: "https://api.novaprolabs.com/api/delete-privacy/" + id,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getPolicyData();
          sToast("Data Deleted Successfully.");
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };
  // for modal
  // add new data modal
  function AddNewDataModal(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
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



    const getPolicyData = () => {
      apicaller("get-privacy", null, "get", null)
        .then((res) => {})
        .catch((e) => {
          // console.log(e);
        });
    };

    //to add new data
    const submit = async (e) => {
      if (title.length > 0) {
        setErrorTitle(false);
        if (description.length > 0) {
          setErrorDescription(false);
          e.preventDefault();
          //   key value pair
          var data = JSON.stringify({
            title: title,
            description: description,
          });
          // console.log("Data is", data);
          const res = await apicaller("add-privacy", data, "POST", null);
          if (res.status === 201 || res.status === 200) {
            setTitle("");
            setDescription("");
            props.onHide();
            sToast("Data Added Successfully");
            getPolicyData();
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="WriteHere"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errorTitle && <div style={{ color: "red" }}>*Enter Title</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Write Answer Here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errorDescription && (
                <div style={{ color: "red" }}>*Enter Desciption</div>
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
                <div id="privacy1">
                  <Container>
                    <Row>
                      <Col id="privacy2">Privacy Policy</Col>
                      <Col md={1}>
                        <Button
                          id="privacy3"
                          onClick={() => setShowAddNewDataModal(true)}
                        >
                          Add
                        </Button>
                      </Col>
                    </Row>
                    {/* modal */}
                    <AddNewDataModal
                      show={showAddNewDataModal}
                      onHide={() => {
                        setShowAddNewDataModal(false);
                        getPolicyData();
                      }}
                    />
                    {policyData?.map((list, index) => (
                      <Row key={index}>
                        <Col md={10} id="privacy5">
                          <div id="privacy7">{list.title}</div>
                          <div id="privacy6">{list.description}</div>
                        </Col>
                        <Col md={1}>
                          <Button
                            id="privacy4"
                            variant="success"
                            onClick={() => {
                              navigate("/PrivacyPolicyEdit", {
                                state: { id: list },
                              });
                            }}
                          >
                            Edit
                          </Button>
                        </Col>
                        <Col md={1}>
                          <Button
                            id="privacy4"
                            variant="danger"
                            onClick={() => {
                              deleteData(list._id);
                              getPolicyData();
                            }}
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

export default PrivacyPolicy;
