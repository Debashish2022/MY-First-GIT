import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import "./AddAboutModal.css";

export default function AddAboutModal(props) {
  const [chooseVideo, setChooseVideo] = useState("");
  const [video, setVideo] = useState([]);
  const [vdoPath, setVdoPath] = useState("");
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const validation = () => {
    if (video.length === 0) {
      Utility.eToast("Choose a video !");
      return false;
    } else if (title.length === 0) {
      Utility.eToast("Type a proper title !");
      return false;
    } else if (description.length === 0) {
      Utility.eToast("Type a proper description !");
      return false;
    } else {
      return true;
    }
  };

  const selectVdo = (e) => {
    // console.log("seelected video", e.target.files);
    setVideo(e.target.files[0]);
    setChooseVideo(e.target.value);
  };

  const token = useSelector(getUserToken);

  const uploadVdo = () => {
    setSpinner(true);
    var FormData = require("form-data");
    var data = new FormData();
    data.append("img", video);

    var config = {
      method: "post",
      url: "http://52.66.203.80:8000/api/single-upload",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const videoPath = response.data.img;
        // console.log("vvvvvvvvvvvvv", videoPath);
        setVdoPath(videoPath);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setSpinner(false));
  };

  const saveAbout = () => {
    if (validation()) {
      setSpinner(true);
      const uploadData = {
        title: title,
        description: description,
        video_path: vdoPath,
      };

      apicaller("add-about-us", uploadData, "POST", token, "application/json")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            // console.log("data added successfully", res.data);
            Utility.sToast("Data added successfully");
            setChooseVideo("");
            setTitle("");
            setDescription("");
          }
        })
        .catch((err) => {
          console.log("error while adding data", err);
        })
        .finally(() => setSpinner(false));
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="aam2" />
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Choose video file</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              value={chooseVideo}
              onChange={selectVdo}
            />
            
              <Button id="aam3" onClick={uploadVdo}>
                {spinner ? (<Spinner animation="border" variant="danger"/>) : "Upload"}
              </Button>
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" id="aam4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer id="aam1">
          <Button onClick={saveAbout}>
            {spinner ? <Spinner animation="border" variant="danger" /> : "Save"}
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
