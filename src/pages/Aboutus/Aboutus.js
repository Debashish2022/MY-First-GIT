import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Table,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import "./Aboutus.css";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { SiMicrostrategy } from "react-icons/si";
import Aboutcomp from "../../Component/Aboutcomp/Aboutuscomp";
import Aboutuscomp from "../../Component/Aboutcomp/Aboutuscomp";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../Component/Loader/Loader";
import { toast } from "react-toastify";
function Aboutus() {
  const navigate = useNavigate();

  const [getAboutUsData, setGetAboutUsData] = useState([]);
  const [getAboutPara, setGetAboutPara] = useState([]);
  // modal
  const [showAddNewDataModal, setShowAddNewDataModal] = React.useState(false);
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

  //for post

  useEffect(() => {
    getAllAboutus();
  }, []);

  const getAllAboutus = () => {
    apicaller("get-about-us", null, "get", null)
      .then((res) => {
        setGetAboutUsData(res.data.about);
      })
      .catch((e) => {
        // console.log(e);
      });

    apicaller("get-AboutParagraph", null, "get", null)
      .then((res) => {
        setGetAboutPara(res.data);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(() => {
        setLoad(false);
      });
  };
  // to deletedata
  const deleteAbout = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: "https://api.novaprolabs.com/api/delete-about-us/" + id,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getAllAboutus();
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


    const getAboutus = () => {
      apicaller("get-about-us", null, "get", null)
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
          const res = await apicaller("add-about-us", data, "POST", null);
          if (res.status === 201 || res.status === 200) {
            setTitle("");
            setDescription("");
            props.onHide();
            sToast("Data Added Successfully");
            getAboutus();
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
              {errorTitle && (
                        <div style={{ color: "red" }}>*Enter Title</div>
                      )}
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
                        <div style={{ color: "red" }}>*Enter Title</div>
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
          {/* modal */}
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
              <div id="aboutus2">
                <Container>
                  <AddNewDataModal
                    show={showAddNewDataModal}
                    onHide={() => {
                      setShowAddNewDataModal(false);
                      getAllAboutus();
                    }}
                  />
                  <Row id="aboutus5">
                    <Col id="aboutus3">About us</Col>
                    <Col md={1}>
                      {/* ADD Button */}
                      <Button
                        id="aboutus4"
                        onClick={() => setShowAddNewDataModal(true)}
                      >
                        Add
                      </Button>
                    </Col>
                  </Row>

                  {getAboutUsData.map((item, i) => (
                    <Row>
                      <Col md={10}>
                        <Aboutuscomp
                          icon={<SiMicrostrategy />}
                          title={item.title}
                          text={item.description}
                        />
                      </Col>

                      <Col>
                        <Button
                          id="aboutus1"
                          variant="success"
                          onClick={() => {
                            navigate("/Abouteditus", { state: { id: item } });
                          }}
                        >
                          Edit
                        </Button>
                      </Col>

                      <Col>
                        <Button
                          id="aboutus1"
                          variant="danger"
                          onClick={() => {
                            deleteAbout(item._id);
                            getAllAboutus();
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
  );
}

export default Aboutus;
