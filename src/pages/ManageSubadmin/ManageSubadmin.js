import React from "react";
import "./ManageSubadmin.css";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Header2 from "../../components/Header2/Header2";
import { Link } from "react-router-dom";

export default function ManageSubadmin() {
  return (
    <>
      <Header2 />
      <Container>
        <div id="msa2">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Control type="text" placeholder="Enter name" />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Control type="text" placeholder="Enter userid" />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Select aria-label="Default select example">
                <option>Select district</option>
                <option value="1">Cuttack</option>
                <option value="2">Bhubaneswar</option>
                <option value="3">Puri</option>
              </Form.Select>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Select aria-label="Default select example">
                <option>Select block</option>
                <option value="1">Cuttack</option>
                <option value="2">Bhubaneswar</option>
                <option value="3">Puri</option>
              </Form.Select>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Control type="password" placeholder="Enter password" />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Button id="msa3">Create Subadmin</Button>
            </Col>
          </Row>
        </div>

        <div id="msa2">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Select aria-label="Default select example">
                <option>Select district</option>
                <option value="1">Cuttack</option>
                <option value="2">Bhubaneswar</option>
                <option value="3">Puri</option>
              </Form.Select>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} id="msa1">
              <Form.Select aria-label="Default select example">
                <option>Select block</option>
                <option value="1">Cuttack</option>
                <option value="2">Bhubaneswar</option>
                <option value="3">Puri</option>
              </Form.Select>
            </Col>
          </Row>
        </div>

        <div id="msa2">
          <Table>
            <thead>
              <tr id="msa5">
                <th>#</th>
                <th>Subadmin name</th>
                <th>Userid</th>
                <th>District</th>
                <th>Block</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>xyxx</td>
                <td><Button id="msa4"><Link to="/subadmindetail">Details</Link></Button> <Button id="msa4">Reset password</Button></td>
                
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </>
  );
}
