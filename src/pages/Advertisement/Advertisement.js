import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Slidebar from "../Bar/Bar";
import NavBar from "../NavBar/NavBar";
import { Carousel } from "react-bootstrap";
import "./Advertisement.css";
import slider1 from "../../asset/slider1.png";
import { apicaller } from "../../utils/api";
import Loader from "../../Component/Loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";

export default function Advertisement() {
  const [advBanner, setAdvBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   to choose and upload banner images
  const [bannerImages, setBannerImages] = useState([]);
  const [selectedBannerImages, setSelectedBannerImages] = useState([]);
  const [load, setLoad] = useState(true);
  const [empty, setEmpty] = useState("");

  //   to set url
  const [url, setUrl] = useState("");

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


  useEffect(() => {
    getAdvBannerData();
  }, []);

  const getAdvBannerData = () => {
    apicaller("get-advertisement", null, "get", null)
      .then((res) => {
        setAdvBanner(res.data.Advertisement);
      })
      .catch((e) => {
        // console.log(e);
      })
      .finally(()=>{
        setLoad(false)
      });
  };

  // to choose multiple images in upload lab images field
  const chooseBannerImages = (e) => {
    // console.log("Yup Got Files", e.target.files);
    setBannerImages(e.target.files[0]);
    setEmpty(e.target.value);
  };

  //   to upload multiple images in upload lab images field
  const uploadBannerImages = () => {
    if (empty.length === 0) {
      eToast("Please Select Image");
    } else {
      setIsLoading(true);

      // console.log("selected image", bannerImages);
      var FormData = require("form-data");

      const data = new FormData();
      data.append("img", bannerImages);

      var config = {
        method: "post",
        url: "https://api.novaprolabs.com/api/single-upload",
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlzX3Byb2ZpbGVfY29tcGxldGVkIjpmYWxzZSwicGxhbl9pZCI6bnVsbCwidXNlcl90eXBlIjoiYWRtaW4iLCJfaWQiOiI2MzA1MDFmNzIzNmQ5NzFjMmUyY2FlMTAiLCJlbWFpbCI6ImFkbWluQGF0aGFydy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRzYm1sN0dkSHlZZDVybGVaR3Rvak4uTm56c2UyM2YvTUwzWTkueTR3NlhTMHh5TENUQjFnSyIsInBob25lX251bWJlciI6OTk4ODc3NjY1NSwiY3JlYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwidXBkYXRlZEF0IjoiMjAyMi0wOC0yM1QxNjozNjowNy4xOThaIiwiX192IjowfSwiaWF0IjoxNjYxNTcxMDM5LCJleHAiOjE2NjQxNjMwMzl9.O7Ht80dEvfBsuf2UHHbxVcVKfFMSCXvDLViR_7g59Z0",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 201 || response.status === 200) {
            setIsLoading(false);
            // console.log(JSON.stringify(response.data.img));
            const img_path = response.data.img;
            setSelectedBannerImages(img_path);
            // console.log(selectedBannerImages);
          }
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  //   post images in add advertisement api
  const addBannerImage = (e) => {
    if (empty.length === 0) {
      eToast("Please Select Image");
    }else{
    e.preventDefault();

    // console.log(selectedBannerImages);

    var data = JSON.stringify({
      image: selectedBannerImages,
      url: url,
    });

    var config = {
      method: "post",
      url: "https://api.novaprolabs.com/api/add-advertisement",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        getAdvBannerData();
        sToast("Image Uploaded Successfully");
        setEmpty("");
      })
      .catch(function (error) {
        // console.log(error);
      });
    }
  };

  const deleteBannerImage = (id) => {
    if (window.confirm("Are you sure want to delete ?")) {
      var config = {
        method: "delete",
        url: `https://api.novaprolabs.com/api/delete-advertisement/${id}`,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data));
          sToast("Image Deleted Successfully")
          getAdvBannerData();
         
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };

  return (   
    <Container fluid>
      <Row>
        {/* imported sidebar */}
        <Col md="2" xs="3">
          <Slidebar />
        </Col>
      
        <Col
          md="10"
          xs="9"
          style={{
            backgroundColor: "aliceblue",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >  {load ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight:"80vh",
            }}
          >
            {" "}
            <Loader animation="border" size="md" variant="dark" />
          </div>
        ) : (
          <div id="advertisement1">
            <Container>
              <Row>
                <Col>
                  <NavBar />
                </Col>
              </Row>
              <Row>
                <Carousel id="hic1">
                  {advBanner.map((item, i) => (
                    <Carousel.Item interval={2000} key={i}>
                      <img
                        className="d-block w-100"
                        src={item.image}
                        alt="slide's"
                      />
                      {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Row>

              <Form.Group controlId="formFileMultiple" className="mb-3 mt-5">
                <Form.Label id="uploadImagesLabel">
                  Upload New Images
                </Form.Label>
                <Row>
                  <Col md={10}>
                    <Form.Control type="file" value={empty} onChange={chooseBannerImages} />
                  </Col>
                  <Col md={2}>
                    <Button
                      style={{ width: "100%" }}
                      variant="success"
                      onClick={uploadBannerImages}
                    >
                      {isLoading ? (
                        <Loader animation="border" size="sm" variant="light" />
                      ) : (
                        "Upload"
                      )}
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group
                      className="mt-5 mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label id="uploadImagesLabel">Enter URL</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter URL of your Selected Image"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Row className="mb-5">
                <Col></Col>
                <Col md={2}>
                  <Button
                    variant="success"
                    style={{ width: "100%" }}
                    onClick={addBannerImage}
                  >
                    Submit
                  </Button>
                </Col>
                <Col></Col>
              </Row>

              {/* to delete image by its particular id */}
              <Row id="uploadImagesLabel">Delete Banner Image</Row>
              {advBanner.map((item, i) => (
                <Row key={i}>
                  <Col md={10} className="mb-5">
                    <div>
                      <img
                        src={item.image}
                        style={{ width: "50%", height: "30%" }}
                      />
                    </div>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="success"
                      style={{ width: "100%" }}
                      onClick={() => deleteBannerImage(item._id)}
                    >
                      Delete
                    </Button>
                  </Col>
                  {/* <Col></Col> */}
                </Row>
              ))}
            </Container>
          </div>
          )}
        </Col>
        
      </Row>
    </Container>
        
       
  );
}