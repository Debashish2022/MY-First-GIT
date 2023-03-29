import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import "./Addcategory.css";
import { TbEdit } from "react-icons/tb";
import { IoTrashOutline } from "react-icons/io5";
import BloodTest from "../BloodTest/BloodTest";
import AddCategoryModal from '../../Component/AddCategoryModal/AddCategoryModal';
import AddTestModal from '../../Component/AddTestModal/AddTestModal';

export default function Addcategory() {
  const [modalShow, setModalShow] = React.useState(false);
  const [testShow, setTestShow] = React.useState(false);

  
  return (
    <div>
      <Container fluid id="addcategory1">
        <Row >
          <Col >
            <Row>
              <Col md="4" ></Col>
              <Col md="4" xs="12" id="addcategory3" >
                <Button onClick={() => setModalShow(true)} id="addcategory2" variant="success">
                  Add Category
                </Button>{" "}
                <AddCategoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
              </Col>
              <Col md="4" xs="12" id="addcategory3">
                <Button onClick={() => setTestShow(true)} id="addcategory2" variant="success">
                  Add Test
                </Button>{" "}
                <AddTestModal
        show={testShow}
        onHide={() => setTestShow(false)}
      />
              </Col>
            </Row>
            <Row>
              <Col >
                <Row >
                  <Col >
                  <BloodTest/>
                  </Col>
                </Row>
                <Row >
                  <Col >
                  <BloodTest/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
