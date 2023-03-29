import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./LabRegistrationLogoImgUpload.css";
import { IoIosAddCircle } from "react-icons/io";
import { apicaller } from "../../utils/api";
import axios from "axios";

export default function LabRegistrationLogoImgUpload() {
  const [labLogo, setLabLogo] = useState([]);
  const [selectedImg, setSelectedImg] = useState();

  // to choose image file
  const chooseLabLogoPhoto = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    setLabLogo(file);
  };

  //   to upload file
  const uploadLabLogoImg = () => {
    var FormData = require("form-data");

    var data = new FormData();
    data.append("img", labLogo);

    var config = {
      method: "post",
      url: "https://api.novaprolabs.com/api/single-upload",
      // in url, if 404 error found, then it is running on local host, so write http:// https://api.novaprolabs.com/api/single-upload
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.img));
        //   response.data.img means this will give the proper path of the img
        const img_path = response.data.img;
        setSelectedImg(img_path);
        // console.log(selectedImg);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  //   const upload = () => {
  //     var axios = require("axios");

  //     const data = new FormData();
  //     data.append("category_image", labLogo);

  //     var config = {
  //       method: "post",
  //     //   url: api + "/addcategory",
  //       data: data,
  //     };

  //     axios(config)
  //       .then(function (response) {
  //         console.log(JSON.stringify(response.data));
  //         alert("Category Added Succesfully");
  //         // props.onHide();
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   };

  return (
    <div>
      {/* <div > */}
      <Form.Group id="lab13" controlId="formFileMultiple">
        <Form.Label>
          <Row>
            <Col
              md={7}
              // style={{ display: "flex", alignItems: "center" }}
            >
              Add Logo
              <IoIosAddCircle />
            </Col>
            <Col md={3}>
              <Form.Control
                type="file"
                style={{ display: "none" }}
                accept="application/jpg, image/png, application/jpeg"
                onChange={chooseLabLogoPhoto}
              />
              <Button id="lab18" variant="light" onClick={uploadLabLogoImg}>
                Upload
              </Button>
            </Col>
          </Row>
        </Form.Label>
      </Form.Group>
      {/* </div> */}
    </div>
  );
}
