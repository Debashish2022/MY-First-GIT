import React, { useState } from "react";
import Header2 from "../../components/Header2/Header2";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  Table,
} from "react-bootstrap";
import "./CourseDetailsNewPage.css";
import { FiUpload } from "react-icons/fi";
import { BsEyeSlashFill, BsSearch } from "react-icons/bs";

export default function CourseDetailsNewPage() {
  const [btn, setBtn] = useState("Edit");
  const [selectedFile, setSelectedFile] = useState([]);

  const selectedFileFun = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("video", e.target.files[0]);
  };

  const fileName = selectedFile?.name;
  // console.log(fileName);

  return (
    <>
      <Header2 />
      <Container fluid style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <Row
          style={{
            backgroundColor: "#002333",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Col style={{ padding: "0px" }}>
            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <div id="coursedetails1">
                  MERN Stack Course 2023 - MongoDB, Express, React and NodeJs
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Form>
          {/* first row - edit basics */}
          <Row className="mb-3">
            <Col md={7}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  defaultValue="MERN Stack Course 2023 - MongoDB, Express, React and NodeJs"
                  disabled={btn === "Edit" ? true : false}
                  id="coursedetails2"
                />
              </Form.Group>
            </Col>
            <Col md={2} xs={btn === "Edit" ? 6 : 12}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  defaultValue="Dinesh Panda"
                  placeholder="Author name"
                  disabled={btn === "Edit" ? true : false}
                  id="coursedetails2"
                />
              </Form.Group>
            </Col>
            <Col md={2} xs={6}>
              <Button
                id="coursedetails3"
                variant="dark"
                onClick={() => setBtn("Update")}
              >
                {btn === "Edit" ? "Edit Basics" : "Update Basics"}
              </Button>
            </Col>
            {btn === "Update" ? (
              <Col md={1} xs={6}>
                <Button
                  id="coursedetails4"
                  variant="danger"
                  onClick={() => setBtn("Edit")}
                >
                  Cancel
                </Button>
              </Col>
            ) : null}
          </Row>

          {/* add video */}
          <Row className="mt-4">
            <Col md={2} xs={3}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  id="coursedetails2"
                  placeholder="Index No."
                />
              </Form.Group>
            </Col>
            <Col md={4} xs={7}>
              <Form.Group className="mb-3">
                <Form.Label id="coursedetails5">
                  <div id="coursedetails6">
                    <Form.Control
                      style={{ display: "none" }}
                      type="file"
                      onChange={selectedFileFun}
                    />
                    <FiUpload id="uploadIcon" />
                    <div id="coursedetails7">
                      {selectedFile?.length === 0 || selectedFile === undefined
                        ? "Select File"
                        : fileName}
                    </div>
                  </div>
                </Form.Label>
              </Form.Group>
            </Col>
            <Col md={3} xs={6}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  id="coursedetails2"
                  placeholder="Video Title"
                />
              </Form.Group>
            </Col>
            <Col md={2} xs={3}>
              <Button id="coursedetails3" variant="dark">
                Add
              </Button>
            </Col>
          </Row>

          {/* course content */}
          <div id="courseContentTxt">Course content</div>
          <Row className="mb-5">
            <Col md={8}>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={5} xs={5} id="coursedetails7">
                  1. Introduction to React hooks{" "}
                </Col>
                <Col md={2} xs={3}>
                  <div id="uploadIcon">
                    <BsEyeSlashFill /> Hide
                  </div>
                </Col>
                <Col md={2} xs={1}></Col>
                <Col md={2} xs={3} id="coursedetails7">
                  1.43 mins
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <div>
                <iframe
                  width="100%"
                  height="250"
                  src="https://www.youtube.com/embed/RGKi6LSPDLU"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ borderRadius: "0.5rem" }}
                ></iframe>
              </div>
              <div id="coursedetails9">Introduction to React hooks</div>
              <Button id="coursedetails3" variant="dark">
                Update
              </Button>
            </Col>
          </Row>

          {/* enrolled students database */}
          <Row id="coursedetails6">
            <Col md={5} xs={12} id="courseContentTxt">
              Enrolled Students Database
            </Col>
            <Col md={3} xs={4}></Col>
            <Col md={4} xs={8} id="coursedetails10">
              <InputGroup
                className="mb-3"
                id="coursedetails9"
                style={{ padding: "0px" }}
              >
                <InputGroup.Text id="basic-addon1">
                  <BsSearch />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <div id="coursedetails12">
            <Table striped hover id="coursedetails11" className="mb-5">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Student Name</th>
                  <th>Student Id</th>
                  <th>Date of Purchase</th>
                  <th>Course Progress</th>
                  <th>Email Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>3545346356</td>
                  <td>23--01-2023</td>
                  <td>80%</td>
                  <td>dineshpandya@gmail.com</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>3545346356</td>
                  <td>23--01-2023</td>
                  <td>80%</td>
                  <td>dineshpandya@gmail.com</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>3545346356</td>
                  <td>23--01-2023</td>
                  <td>80%</td>
                  <td>dineshpandya@gmail.com</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>3545346356</td>
                  <td>23--01-2023</td>
                  <td>80%</td>
                  <td>dineshpandya@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Form>
      </Container>
    </>
  );
}
