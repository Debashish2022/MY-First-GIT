import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Modal,
  ProgressBar,
  Row,
  Spinner,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import Utility from "../../utils/Utility";
import "./EditCourseDetailModal.css";

export default function EditCourseDetailModal(props) {
  // console.log("edit subsection id is : ", props.id);
  // console.log("edit subsection title is ", props.title);
  // console.log("edit subsection index is ", props.index);
  // console.log("edit subsection description is ", props.description);
  // console.log("edit subsection material is ", props.material);
  // console.log("edit subsection video is ", props.video);

  const [title, setTitle] = useState([]);
  const [desc, setDesc] = useState([]);

  const [matInitial, setMatInitial] = useState("");
  const [mat, setMat] = useState([]);
  const [matPath, setMatPath] = useState("");

  const [vdoInitial, setVdoInitial] = useState("");
  const [vdo, setVdo] = useState([]);
  const [vdoPath, setVdoPath] = useState("");

  const [spinner, setSpinner] = useState(false);
  const [spinner1, setSpinner1] = useState(false);
  const [spinner2, setSpinner2] = useState(false);

  const [percentage, setPercentage] = useState(0);

  const token = useSelector(getUserToken);

  const selectMat = (e) => {
    console.log("selected material is : ", mat);
    setMat(e.target.files[0]);
    setMatInitial(e.target.value);
  };

  const uploadMat = () => {
    setSpinner(true);
    const FormData = require("form-data");
    let data = new FormData();
    data.append("img", mat);

    let config = {
      method: "post",
      url: "https://atharw.onrender.com/api/single-upload",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMatPath(response.data.img);
        setSpinner(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectVdo = (e) => {
    console.log("selected material is : ", vdo);
    setVdo(e.target.files[0]);
    setVdoInitial(e.target.value);
  };

  const uploadVdo = () => {
    setSpinner1(true);
    const FormData = require("form-data");
    let data = new FormData();
    data.append("img", vdo);

    let config = {
      method: "post",
      url: "https://atharw.onrender.com/api/single-upload",
      headers: {
        authorization: `Bearer ${token}`,
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
        setVdoPath(response.data.img);
        setSpinner1(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validation = () => {
    if (title.length === 0) {
      Utility.eToast("Title required!");
      return false;
    } else if (desc.length === 0) {
      Utility.eToast("description required!");
      return false;
    } else if (matPath.length === 0) {
      Utility.eToast("material required!");
      return false;
    } else if (vdoPath.length === 0) {
      Utility.eToast("Video required!");
      return false;
    } else {
      return true;
    }
  };

  const editSubsection = () => {
    if (validation()) {
      setSpinner2(true);
      let data = JSON.stringify({
        _id: props.id,
        title: title,
        description: desc,
        document: matPath,
        video_path: vdoPath,
      });

      console.log("submitted data is : ", data);

      let config = {
        method: "put",
        url: "https://atharw.onrender.com/api/course-module",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          Utility.sToast("Subsection updated successfully");
          setSpinner2(false);
          props.onHide();
        })
        .catch((error) => {
          console.log(error);
          Utility.eToast("Failed to update");
        });
    }
  };

  const now = percentage;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="ecdm1" />
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter index"
            className="ecdm3"
            defaultValue={props.index}
            disabled
          />
          <Form.Control
            type="text"
            placeholder="Enter title"
            className="ecdm3"
            defaultValue={props.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter description"
            className="ecdm3"
            defaultValue={props.description}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Row>
            <Col>
              <Form.Label>Upload material(pdf)</Form.Label>
              <Form.Control
                type="file"
                className="ecdm3"
                size="sm"
                value={matInitial}
                onChange={selectMat}
              />
            </Col>
            <Col id="ecdm4">
              <Button id="ecdm5" onClick={uploadMat}>
                {spinner ? (
                  <Spinner animation="border" variant="warning" />
                ) : (
                  "Upload Material"
                )}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Upload video</Form.Label>
              <Form.Control
                type="file"
                className="ecdm3"
                size="sm"
                value={vdoInitial}
                onChange={selectVdo}
              />
            </Col>
            <Col id="ecdm4">
              <Button id="ecdm5" onClick={uploadVdo}>
                {spinner1 ? (
                  <Spinner animation="border" variant="warning" />
                ) : (
                  "Upload Video"
                )}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar
                now={now}
                label={`${now}%`}
                animated
                variant="info"
                style={{ background: "transparent" }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer id="ecdm2">
          <Button onClick={editSubsection}>
            {spinner2 ? (
              <Spinner animation="border" variant="warning" />
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
