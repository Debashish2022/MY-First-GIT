import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import "./AddServiceModal.css";

export default function AddAboutModal(props) {
  const [chooseIcon, setChooseIcon] = useState("");
  const [icon, setIcon] = useState([]);
  const [iconPath, setIconPath] = useState("");
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const validation = () => {
    if (icon.length === 0) {
      Utility.eToast("Choose a icon !");
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

  const selectIcon = (e) => {
    console.log("seelected icon", e.target.files);
    setIcon(e.target.files[0]);
    setChooseIcon(e.target.value);
  };

  const token = useSelector(getUserToken);

  const uploadIcon = () => {
    setSpinner(true);
    var FormData = require("form-data");
    var data = new FormData();
    data.append("img", icon);

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
        const iconPath = response.data.img;
        console.log("vvvvvvvvvvvvv", iconPath);
        setIconPath(iconPath);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setSpinner(false));
  };

  const saveService = () => {
    if (validation()) {
      setSpinner(true);
      const uploadData = {
        title: title,
        description: description,
        icon: iconPath,
      };

      apicaller("service", uploadData, "POST", token, "application/json")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log("data added successfully", res.data);
            Utility.sToast("Data added successfully");
            setChooseIcon("");
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
        <Modal.Header closeButton id="asm2" />
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Choose icon</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              value={chooseIcon}
              onChange={selectIcon}
            />
            
              <Button id="asm3" onClick={uploadIcon}>
                {spinner ? (<Spinner animation="border" variant="danger"/>) : "Upload"}
              </Button>
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" id="asm4">
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
        <Modal.Footer id="asm1">
          <Button onClick={saveService}>
            {spinner ? <Spinner animation="border" variant="danger" /> : "Save"}
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
