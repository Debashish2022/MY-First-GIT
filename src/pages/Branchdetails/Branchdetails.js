import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Branchdetails.css";

function Branchdetails() {
  var bpi = [
    {
      name: "Bhabani Sankar Nayak",
      number: "+919969696969",
      mail: "codekart@codekart.com",
    },
  ];

  var cpi = [
    {
      name: "Bhabani Sankar Nayak",
      number: "+919969696969",
      mail: "codekart@codekart.com",
    },
  ];

  return (
    <div className="body">
      <Container id="whitediv">
        <Row id="branchdetail">
          <Col md={1}></Col>
          <Col md={6}>Branch Details</Col>
          <Col md={5}></Col>
        </Row>

        <Row id="inputfieldrow">
          <Col md={1} xs={0}></Col>
          <Col id="inputfieldcol" xs={6} md={3}>
            <Form.Select id="inputfield1">
              <option>Select</option>
              <option>Berhampur</option>
              <option>Puri</option>
              <option>Cuttack</option>
              <option>Bhubaneswar</option>
              <option>Jagatsinghpur</option>
            </Form.Select>
          </Col>
          <Col md={3} xs={6}>
            <Form.Select id="inputfield1">
              <option>Select</option>
              <option>Berhampur</option>
              <option>Puri</option>
              <option>Cuttack</option>
              <option>Bhubaneswar</option>
              <option>Jagatsinghpur</option>
            </Form.Select>
          </Col>
          <Col md={3}></Col>
          <Col md={1}></Col>
        </Row>

        <Row id="branchuserdata3">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Branch manager name
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            Contact number
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            Mail id
          </Col>
          <Col id="edittext" md={3} xs={2}></Col>
        </Row>

        <div>
          {cpi.map((props, j) => (
            <Row key={j} id="branchuserdata">
              <Col md={1} xs={0}></Col>
              <Col id="breakdown" md={3} xs={3}>
                {props.name}
              </Col>
              <Col id="breakdown" md={2} xs={3}>
                {props.number}
              </Col>
              <Col id="breakdown" md={3} xs={4}>
                {props.mail}
              </Col>
              <Col id="edittext" md={3} xs={2}></Col>
            </Row>
          ))}
        </div>

        <Row id="staffnametext">
          <Col md={1}></Col>
          <Col md={3}>Staff Name</Col>
          <Col md={3}></Col>
          <Col md={3}></Col>
          <Col md={2}></Col>
        </Row>

        <Row id="branchuserdata2">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Branch manager name
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            Contact number
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            Mail id
          </Col>
          <Col id="edittext" md={3} xs={2}></Col>
        </Row>

        <div>
          {bpi.map((props, i) => (
            <Row key={i} id="branchuserdata">
              <Col md={1} xs={0}></Col>
              <Col id="breakdown" md={3} xs={3}>
                {props.name}
              </Col>
              <Col id="breakdown" md={2} xs={3}>
                {props.number}
              </Col>
              <Col id="breakdown" md={3} xs={4}>
                {props.mail}
              </Col>
              <Col id="edittext" md={3} xs={2}>
                <Row>
                  <Col id="editbutton" md={2} xs={12}>
                    Edit
                  </Col>
                  <Col md={2} xs={12}>
                    Delete
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </div>

        {/* <Row id="branchuserdata">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Bhabani Sankar Nayak
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            +919969696969
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            codekart@codekart.com
          </Col>
          <Col id="edittext" md={3} xs={2}>
            <Row>
              <Col md={2} xs={12}>
                Edit
              </Col>
              <Col md={2} xs={12}>
                Delete
              </Col>
            </Row>
          </Col>
        </Row>

        <Row id="branchuserdata">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Bhabani Sankar Nayak
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            +919969696969
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            codekart@codekart.com
          </Col>
          <Col id="edittext" md={3} xs={2}>
            <Row>
              <Col md={2} xs={12}>
                Edit
              </Col>
              <Col md={2} xs={12}>
                Delete
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="branchuserdata">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Bhabani Sankar Nayak
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            +919969696969
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            codekart@codekart.com
          </Col>
          <Col id="edittext" md={3} xs={2}>
            <Row>
              <Col md={2} xs={12}>
                Edit
              </Col>
              <Col md={2} xs={12}>
                Delete
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="branchuserdata">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Bhabani Sankar Nayak
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            +919969696969
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            codekart@codekart.com
          </Col>
          <Col id="edittext" md={3} xs={2}>
            <Row>
              <Col md={2} xs={12}>
                Edit
              </Col>
              <Col md={2} xs={12}>
                Delete
              </Col>
            </Row>
          </Col>
        </Row>
        <Row id="branchuserdata">
          <Col md={1} xs={0}></Col>
          <Col id="breakdown" md={3} xs={3}>
            Bhabani Sankar Nayak
          </Col>
          <Col id="breakdown" md={2} xs={3}>
            +919969696969
          </Col>
          <Col id="breakdown" md={3} xs={4}>
            codekart@codekart.com
          </Col>
          <Col id="edittext" md={3} xs={2}>
            <Row>
              <Col md={2} xs={12}>
                Edit
              </Col>
              <Col md={2} xs={12}>
                Delete
              </Col>
            </Row>
          </Col>
        </Row> */}

        {/* </div> */}
      </Container>
    </div>
  );
}

export default Branchdetails;
