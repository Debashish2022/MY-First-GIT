import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AddTestModal from "../AddTestModal/AddTestModal";
import "./TestCategoryCard.css";
import { BsInfoCircle } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiClipboard } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { apicaller } from "../../utils/api";
import axios from "axios";
import { useSelector } from "react-redux";

export default function TestCategoryCard() {
  const [testbtn, setTestbtn] = useState(false);

  const [category, setCategory] = useState([]);

  const [background, setBackground] = useState(" ");

  const localStorageItem =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    apicaller(
      "test-category?pathology_id=" + localStorageItem?.pathology_id?._id,
      null,
      "get",
      null
    )
      .then((res) => {
        setCategory(res.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  return (
    <div>
      <Container fluid>
        <Row id="cat4">
          {category.map((item, index) => (
            <Col key={index} md={3}>
              <div
                onClick={() => setBackground(index)}
                style={
                  background === index
                    ? { backgroundColor: "#029967", color: "white" }
                    : { backgroundColor: "white", color: "blue" }
                }
                id="cat1"
              >
                <div>{item.category_name}</div>
              </div>
            </Col>
          ))}
          <Col md={3}>
            <div onClick={() => setTestbtn(true)} id="cat1">
              <div id="cat6">
                <AiOutlinePlus />
              </div>
            </div>
            <AddTestModal
              show={testbtn}
              onHide={() => {
                setTestbtn(false);
                getCategory();
              }}
            />
          </Col>
        </Row>

        {/* <Row id="cat4"> 
              <Col md={3}>
              <div onClick={() => setTestbtn(true)} id="cat1">
                <div id="cat6"><AiOutlinePlus/></div>
                </div>
                <AddTestModal show={testbtn} onHide={() => setTestbtn(false)} />
              </Col>
              </Row> */}

        {/* <Row id="cat2">
            <Col >
              <Button id="cat3" onClick={() => setTestbtn(true)}>
                Add
              </Button>
              <AddTestModal show={testbtn} onHide={() => setTestbtn(false)} />
            </Col>
          </Row> */}
      </Container>
    </div>
  );
}
