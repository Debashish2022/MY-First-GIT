import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Col,
  Container,
  Modal,
  Row,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import "./Career.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Career() {
  const navigate = useNavigate();

  const [careerData, setCareerData] = useState([]);

  //    to get data
  useEffect(() => {
    getCareerData();
  }, []);

  const getCareerData = () => {
    apicaller("get-career", null, "GET", null)
      .then((res) => {
        setCareerData(res.data.Career);
      })
      .catch((err) =>{
      //  console.log(err)
      });
  };

  //   to show modal
  const [showAddNewDataModal, setShowAddNewDataModal] = useState(false);

  function AddNewDataModal(props) {
    //   to access values of input fields
    const [newRole, setNewRole] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [newLocation, setNewLocation] = useState("");

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


    //  to post data
    const addNewData = async (e) => {
      e.preventDefault();

      var data = {
        role: newRole,
        category: newCategory,
        location: newLocation,
      };

      // console.log("Data is", data);

      const response = await apicaller("add-career", data, "POST", null);
      if (response.status === 201 || response.status === 200) {
        sToast("Data Added Successfully");
        setNewRole("");
        setNewCategory("");
        setNewLocation("");
      }
      getCareerData();
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Role"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter Location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addNewData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  //   to delete data
  const deleteData = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      var config = {
        method: "delete",
        url: `https://api.novaprolabs.com/api/delete-career/${id}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          getCareerData();
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (
    <Container fluid>
      <Row>
        {/* imported sidebar */}
        <Col md={2} xs={3}>
          <Slidebar />
        </Col>
        <Col md={10}>
          <NavBar />

          <Row>
            <div id="Four">Current Job Openings</div>
          </Row>

          <Row>
            <Button
              variant="primary"
              id="addNewCareerDataBtn"
              onClick={() => setShowAddNewDataModal(true)}
            >
              Add New Data
            </Button>

            <Row style={{ overflow: "auto" }}>
              <Table
                striped
                bordered
                hover
                style={{
                  marginTop: "2rem",
                  border: "0px",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                <tbody>
                  {careerData &&
                    careerData.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <div id="Six">{item.role}</div>
                          <div id="Seven">{item.location}</div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Button
                            variant="success"
                            style={{ marginBottom: "1rem", width: "50%" }}
                            onClick={() =>
                              navigate("/careerEdit", {
                                state: { item: item },
                              })
                            }
                          >
                            Edit
                          </Button>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Button
                            variant="danger"
                            style={{ marginBottom: "1rem", width: "50%" }}
                            onClick={() => deleteData(item._id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Row>
          </Row>
          <AddNewDataModal
            show={showAddNewDataModal}
            onHide={() => setShowAddNewDataModal(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}
