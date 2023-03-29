import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./CareerEdit.css";
import { apicaller } from "../../utils/api";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import { toast } from "react-toastify";

export default function CareerEdit() {
  const location = useLocation();
  const careerDatas = location.state.item;

  const careerEditId = location.state.item._id;

  const navigate = useNavigate();

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


  //   to update Data
  const updateDatas = async () => {
    // e.preventDefault();
    var data = {
      _id: careerEditId,
      role: newRole,
      category: newCategory,
      location: newLocation,
    };
    // alert(careerEditId);
    // console.log(data);

    // const res = await apicaller("update-discover-us", data, "PUT", null)

    var config = {
      method: "put",
      url: "https://api.novaprolabs.com/api/update-career/" + careerEditId,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        sToast("Data Saved Successfully");
        navigate("/career");
      })
      .catch(function (error) {
        // console.log(error);
      });
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

          <Form style={{ marginLeft: "1rem" }}>
            <Row>
              <Form.Group className=" mt-5 mb-3" controlId="formBasicEmail">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter role"
                  defaultValue={careerDatas.role}
                  onChange={(e) => setNewRole(e.target.value)}
                  id="inputFields"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Enter category"
                  defaultValue={careerDatas.category}
                  onChange={(e) => setNewCategory(e.target.value)}
                  id="inputFields"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Enter location"
                  defaultValue={careerDatas.location}
                  onChange={(e) => setNewLocation(e.target.value)}
                  id="inputFields"
                />
              </Form.Group>
            </Row>
          </Form>

          <Row className="mt-5">
            <Col></Col>
            <Col md={2}>
              <Button
                variant="primary"
                style={{ width: "100%" }}
                onClick={updateDatas}
              >
                Save
              </Button>
            </Col>
            <Col md={2}>
              <Button
                variant="secondary"
                style={{ width: "100%" }}
                onClick={() => navigate("/career")}
              >
                Close
              </Button>
            </Col>
          </Row>
          {/* <label>Title</label>
          <input type="text" defaultValue={discoverUs.title} />
          <label>Description</label>
          <input type="text" defaultValue={discoverUs.description} /> */}
        </Col>
      </Row>
    </Container>
  );
}
