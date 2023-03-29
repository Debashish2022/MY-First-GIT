import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
import "./EditTestDashboard.css";
import axios from "axios";
import Loader from "../Loader";
import { useSelector } from "react-redux";

export default function EditTestDashboard() {
  const location = useLocation();
  const editTestDatas = location?.state?.item;

  const navigate = useNavigate();

  const [editTestName, setEditTestName] = useState(editTestDatas?.test_name);
  const [editTestPrepare, setEditTestPrepare] = useState(
    editTestDatas?.preparation_details
  );
  const [editTestSample, setEditTestSample] = useState(
    editTestDatas?.type_of_sample
  );
  const [editTestGender, setEditTestGender] = useState(
    editTestDatas?.select_gender
  );
  const [editTestDescription, setEditTestDescription] = useState(
    editTestDatas?.description
  );
  const [editTestActualprice, setEditTestActualPrice] = useState(
    editTestDatas?.actual_price
  );
  const [editTestDiscount, setEditTestDiscount] = useState(
    editTestDatas?.discount
  );

  const [loadingDatas, setLoadingDatas] = useState(false);

  //   image choose and upload images
  const [filePreview, setFilePreview] = useState(editTestDatas?.img_path);
  const [isImageUploadLoading, setIsImageUploadLoading] = useState(false);
  const [testDashBoard, setTestDashBoard] = useState([]);
  const [patholabImg, setPatholabImg] = useState(editTestDatas?.img_path);

//   console.log("img path of this test is ", editTestDatas?.img_path);

  //for toast
  const eToast = (msg) => {
    toast.error(msg, {
      autoClose: 5000,
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
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const chooseTestDashBoardImg = (e) => {
    // console.log("Choose Test Image", e.target.files);
    setTestDashBoard(e.target.files[0]);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };
  const uploadTestDashBoardImg = (e) => {
    // console.log("Select Test Images", testDashBoard);
    if (testDashBoard.length === 0) {
      eToast("Please Select Test Image");
      return false;
    } else {
      setIsImageUploadLoading(true);
      var FormData = require("form-data");

      var data = new FormData();
      data.append("img", testDashBoard);

      var config = {
        method: "post",
        url: "https://api.novaprolabs.com/api/single-upload",
        // in url, if 404 error found, then it is running on local host, so write http:// ,i.e., https://api.novaprolabs.com/api/single-upload
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 201 || response.status === 200) {
            setIsImageUploadLoading(false);
            sToast("images uploaded");
            // console.log(JSON.stringify(response.data.img));
            const img_path1 = response.data.img;
            setPatholabImg(img_path1);
            // console.log(patholabImg);
          }
        })
        .catch(function (error) {
        //   console.log("error while images uploaded", error);
          eToast("Couldn't uploaded");
        })
        .finally(() => setIsImageUploadLoading(false));
    }
  };

  const testid = editTestDatas?._id;
  const auth = useSelector((state) => state.auth);
//   console.log("test id is", testid);

  const editPatholabdetails = async () => {
    setLoadingDatas(true);
    if (editTestName.length === 0) {
      eToast("Enter Test Name");
      return false;
    } else if (editTestPrepare.length === 0) {
      eToast("Enter Preparation Details");
      return false;
    } else if (editTestSample.length === 0) {
      eToast("Enter Test Sample");
      return false;
    } else if (editTestGender.length === 0) {
      eToast("Choose Gender");
      return false;
    } else if (editTestDescription.length === 0) {
      eToast("Enter Description");
      return false;
    } else if (editTestActualprice.length === 0) {
      eToast("Enter Actual price");
      return false;
    } else if (editTestDiscount.length === 0) {
      eToast("Enter Discount");
      return false;
    } else {
      var data = {
        _id: testid,
        test_name: editTestName,
        img_path: patholabImg,
        preparation_details: editTestPrepare,
        type_of_sample: editTestSample,
        select_gender: editTestGender,
        description: editTestDescription,
        pathology_id: auth?.user?.pathology_id?._id,
        actual_price: editTestActualprice,
        discount: editTestDiscount,
      };
      await apicaller("lab-test", data, "PUT", null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setLoadingDatas(false);
            sToast("Updated successfully");
            navigate("/testdash");
          }
        })
        .catch(() => eToast("Sorry Couldn't Update!"))
        .finally(() => setLoadingDatas(false));
      return true;
    }
  };

  return (
    <Container style={{ marginTop: "2rem", marginBottom: "1rem" }}>
      <Row>
        <Form.Group className="mb-3">
          <Form.Label>Test Name</Form.Label>
          <Form.Control
            value={editTestName}
            onChange={(e) => setEditTestName(e.target.value)}
            type="text"
            placeholder="Enter Test Name"
          />
        </Form.Group>
      </Row>

      <Row id="lab7">
        <Form.Label>Upload Test Category Image</Form.Label>
        <Row>
          <Col md={2}>
            <span>
              <img
                style={{ padding: "10px" }}
                width={150}
                height={100}
                src={filePreview}
                // src={
                //  testDashBoard
                // }
              />
            </span>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col lg={10} md={8} sm={8} xs={8}>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Control
              type="file"
              accept="application/png, application/jpg, application/jpeg"
              onChange={chooseTestDashBoardImg}
              multiple={false}
            />
          </Form.Group>
        </Col>
        <Col lg={2} md={4} sm={4} xs={4}>
          <Button
            id="labdetails14"
            variant="light"
            onClick={uploadTestDashBoardImg}
          >
            {isImageUploadLoading ? <Loader size="sm" /> : "Update"}
          </Button>
          <div id="lab9"></div>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Preparation Details</Form.Label>
        <Form.Control
          value={editTestPrepare}
          onChange={(e) => setEditTestPrepare(e.target.value)}
          type="text"
          placeholder="Enter Preparation Details"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Types Of Sample</Form.Label>
        <Form.Control
          value={editTestSample}
          onChange={(e) => setEditTestSample(e.target.value)}
          type="text"
          placeholder="Enter Sample Type"
        />
      </Form.Group>

      <Col md={12} className="mb-3">
        <Row id="editlabtest21">
          <Form.Label>Gender</Form.Label>
          <Col
            className="editlabtest40"
            md={2}
            onClick={() => setEditTestGender("Male")}
          >
            <div
              style={
                editTestGender === "Male"
                  ? { backgroundColor: "green", color: "white" }
                  : { backgroundColor: "white", color: "#029967" }
              }
              id="editlabtest20"
            >
              Male
            </div>
          </Col>
          <Col
            md={2}
            onClick={() => setEditTestGender("Female")}
            className="editlabtest40"
          >
            <div
              style={
                editTestGender === "Female"
                  ? { backgroundColor: "green", color: "white" }
                  : { backgroundColor: "white", color: "#029967" }
              }
              id="editlabtest20"
            >
              Female
            </div>
          </Col>
          <Col
            id="editlabtest40"
            md={2}
            onClick={() => setEditTestGender("All")}
          >
            <div
              style={
                (editTestGender === "Others" || editTestGender === "All" || editTestGender === "Other")
                  ? { backgroundColor: "green", color: "white" }
                  : { backgroundColor: "white", color: "#029967" }
              }
              id="editlabtest20"
            >
              All
            </div>
          </Col>
        </Row>
      </Col>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={editTestDescription}
          onChange={(e) => setEditTestDescription(e.target.value)}
          as="textarea"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Actual Price</Form.Label>
        <Form.Control
          value={editTestActualprice}
          onChange={(e) => {
            setEditTestActualPrice(e.target.value);
          }}
          type="text"
          placeholder="Enter Actual Price"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Discount</Form.Label>
        <Form.Control
          value={editTestDiscount}
          onChange={(e) => {
            setEditTestDiscount(e.target.value);
          }}
          type="text"
          placeholder="Enter Discount Percentage"
        />
      </Form.Group>

      <Row>
        <Col md={3}></Col>
        <Col md={3} id="editlabtest18">
          <Button
            id="editlabtest19"
            variant="danger"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
        </Col>
        <Col md={3} id="editlabtest18">
          <Button
            id="editlabtest19"
            variant="success"
            onClick={() => editPatholabdetails()}
          >
            {loadingDatas ? <Loader /> : "Update"}
          </Button>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
}
