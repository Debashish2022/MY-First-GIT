import React from "react";
import "./Teacher.css";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

export default function Teacher() {
  return (
    <>
      <Container id="teacher8">
        <Row>
          <Col id="teacher1">Pending For Approval</Col>
          <Table id="teacher3">
            <thead>
              <tr id="teacher2">
                <th>No</th>
                <th>Name</th>
                <th>Email id</th>
                <th>Phone</th>
                <th>Teacher ID</th>
                <th>Time & Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pragati</td>
                <td>pragati@gmail.com</td>
                <td>9739682823</td>
                <td>pragati1@gmail.com</td>
                <th>8.00PM, 23-02-2023</th>
                <th>
                  {" "}
                  <Button variant="dark" id="teacher6">
                    APPROVE
                  </Button>{" "}
                </th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Expand
                    </Dropdown.Toggle>
                  </Dropdown>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>Pragati</td>
                <td>pragati@gmail.com</td>
                <td>9739682823</td>
                <td>pragati1@gmail.com</td>
                <th>8.00PM, 23-02-2023</th>
                <th>
                  <Button variant="primary" id="teacher5">
                    APPROVED
                  </Button>{" "}
                </th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Expand
                    </Dropdown.Toggle>
                  </Dropdown>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>Pragati</td>
                <td>pragati@gmail.com</td>
                <td>9739682823</td>
                <td>pragati1@gmail.com</td>
                <th>8.00PM, 23-02-2023</th>
                <th>
                  <Button variant="primary" id="teacher5">
                    APPROVED
                  </Button>{" "}
                </th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Expand
                    </Dropdown.Toggle>
                  </Dropdown>
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>Pragati</td>
                <td>pragati@gmail.com</td>
                <td>9739682823</td>
                <td>pragati1@gmail.com</td>
                <th>8.00PM, 23-02-2023</th>
                <th>
                  <Button variant="primary" id="teacher5">
                    APPROVED
                  </Button>{" "}
                </th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Expand
                    </Dropdown.Toggle>
                  </Dropdown>
                </th>
              </tr>
            </tbody>
          </Table>
          <Container>
            <Row>
              <Col md={4} xs={6} lg={6} id="teacher7">
                Teacher Details
              </Col>
            </Row>
            <Table id="teacher3">
              <thead>
                <tr id="teacher2">
                  <th>No</th>
                  <th>Name</th>
                  <th>Email id</th>
                  <th>Phone</th>
                  <th>Teacher ID</th>
                  <th>Designation</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pragati</td>
                  <td>pragati@gmail.com</td>
                  <td>9739682823</td>
                  <td>pragati1@gmail.com</td>
                  <th>Software developer</th>
                  <th>
                    {" "}
                    <Button variant="primary">View Detail info</Button>{" "}
                  </th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Pragati</td>
                  <td>pragati@gmail.com</td>
                  <td>9739682823</td>
                  <td>pragati1@gmail.com</td>
                  <th>Software developer</th>
                  <th>
                    {" "}
                    <Button variant="primary">View Detail info</Button>{" "}
                  </th>
                </tr>
              </tbody>
            </Table>
          </Container>
        </Row>
      </Container>
    </>
  );
}
