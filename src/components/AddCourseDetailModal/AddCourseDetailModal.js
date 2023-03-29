import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Modal, ProgressBar, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import Utility from "../../utils/Utility";
import "./AddCourseDetailModal.css";

export default function AddCourseDetailModal(props) {
  const [index, setIndex] = useState([]);
  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);

  const [material, setMaterial] = useState([]);
  const [materialInitial, setMaterialInitial] = useState("");
  const [materialPath, setMaterialPath] = useState("");
  const [spinner, setSpinner] = useState(false);

  const [video, setVideo] = useState([]);
  const [videoInitial, setVideoInitial] = useState("");
  const [videoPath, setVideoPath] = useState("");
  const [spinner1, setSpinner1] = useState(false);

  const [spinner3, setSpinner3] = useState(false);

  const [percentage, setPercentage] = useState(0);

  const selectMaterial = (e) => {
    console.log("selected material is : ", material);
    setMaterial(e.target.files[0]);
    setMaterialInitial(e.target.value);
  };

  const selectVideo = (e) => {
    console.log("selected video is : ", video);
    setVideo(e.target.files[0]);
    setVideoInitial(e.target.value);
  };

  const token = useSelector(getUserToken);

  const uploadMaterial = () => {
    setSpinner(true);
    const FormData = require("form-data");
    let data = new FormData();
    data.append("img", material);

    let config = {
      method: "post",
      url: "https://atharw.onrender.com/api/single-upload",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const path = response?.data?.img;
        setMaterialPath(path);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSpinner(false));
  };

  const uploadVideo = () => {
    setSpinner1(true);
    const FormData = require("form-data");
    let data = new FormData();
    data.append("img", video);

    let config = {
      method: "post",
      url: "https://atharw.onrender.com/api/single-upload",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      onUploadProgress: (progressEvent) => {
        setPercentage(
          parseInt(
            Math.floor((progressEvent.loaded * 100) / progressEvent.total)
          )
        );
      },
      data: data,
    };


    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const path = response?.data?.img;
        setVideoPath(path);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSpinner1(false));
  };

  const validation = () => {
    if (index.length === 0) {
      Utility.eToast("Index required !");
      return false;
    } else if (title.length === 0) {
      Utility.eToast("title required !");
      return false;
    } else if (desc.length === 0) {
      Utility.eToast("description required !");
      return false;
    } else if (materialPath.length === 0) {
      Utility.eToast("upload material!");
      return false;
    } else if (videoPath.length === 0) {
      Utility.eToast("upload video");
      return false;
    } else {
      return true;
    }
  };

  // console.log("courseeeeeeee", props.item);

  const uploadSubMobule = () => {
    if (validation()) {
      setSpinner3(true);
      let data = JSON.stringify({
        index: index,
        title: title,
        description : desc,
        document: materialPath,
        video_path: videoPath,
        course_id: props.courseId,
        section_id: props.id,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://atharw.onrender.com/api/course-module",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          Utility.sToast("Submodule added successfully");
          props.onHide();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setSpinner3(false));
    }
  };

  const now=percentage;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="acdm1" />
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter index"
            className="acdm3"
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter title"
            className="acdm3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter description"
            className="acdm3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <Form.Label>Upload material(pdf)</Form.Label>
              <Form.Control
                type="file"
                className="acdm3"
                size="sm"
                value={materialInitial}
                onChange={selectMaterial}
              />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} id="acdm4">
              <Button id="acdm5" onClick={uploadMaterial}>
                {spinner ? (
                  <Spinner animation="border" variant="danger" />
                ) : (
                  "Add Material"
                )}
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={8} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <Form.Label>Upload video</Form.Label>
              <Form.Control
                type="file"
                className="acdm3"
                size="sm"
                value={videoInitial}
                onChange={selectVideo}
              />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} id="acdm4">
              <Button id="acdm5" onClick={uploadVideo}>
                {spinner1 ? (
                  <Spinner animation="border" variant="danger" />
                ) : (
                  "Add Video"
                )}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar now={now} label={`${now}%`} animated variant="info" style={{background:"transparent"}}/>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer id="acdm2">
          <Button onClick={uploadSubMobule}>
            {spinner3 ? (
              <Spinner animation="border" variant="danger" />
            ) : (
              "save"
            )}
          </Button>
          <Button onClick={props.onHide}>cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
