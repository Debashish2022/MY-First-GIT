import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./AddTestModal.css";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";

export default function AddTestModal(props) {
  const [testcategory, setTestcategory] = useState(" ");
  // const [typeoftest, setTypeoftest] = useState( );
  const [tstdtl, setTstdtl] = useState(false);
  const auth = useSelector((state) => state.auth);
  const getCategory = () => {
    apicaller(
      "test-category?pathology_id=" + auth?.user?.pathology_id?._id,
      null,
      "get",
      null
    )
      .then((res) => {})
      .catch((e) => {
        // console.log(e);
      });
  };

  const submitBtn = async (e) => {
    if (testcategory.length === 1) {
      setTstdtl(true);
    } else {
      setTstdtl(false);
      e.preventDefault();
      var data = JSON.stringify({
        category_name: testcategory,
        pathology_id: auth?.user?.pathology_id?._id,
      });
      // console.log("Data is", data);
      const res = await apicaller("test-category", data, "POST", null);
      if (res.status === 201 || res.status === 200) {
        getCategory();
        setTestcategory(" ");
        props.onHide();
      }
    }
  };

  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div id="addtest3">ADD TEST DETAILS </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row id="addtest3">
              <Col>
                <div id="addtest3">Enter Test Category</div>
                <Form.Control
                  type="text"
                  value={testcategory}
                  onChange={(e) => setTestcategory(e.target.value)}
                />
              </Col>
            </Row>
            <Row id="addtest3">
              <Col>
                {tstdtl && (
                  <div style={{ color: "red" }}>
                    Please Enter a Valid Category
                  </div>
                )}
              </Col>
            </Row>

            {/* <Row id="addtest3">
              <Col>
                <div id="addtest3">Choose  Type Test</div>
                <Form.Select value={typeoftest} onChange={()=> setTypeoftest(typeoftest)} >
                  <option value="Blood culture">Blood culture</option>
                  <option value="Blood gases test">Blood gases test</option>
                  <option value="Blood sugar">Blood sugar</option>
                  <option value="Blood typing">Blood typing</option>

                </Form.Select>
              </Col>
            </Row> */}

            <Row>
              <Col md={9} xs={9}></Col>
              <Col md={3} xs={3}>
                <Button id="addtest2" onClick={submitBtn}>
                  Add
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
