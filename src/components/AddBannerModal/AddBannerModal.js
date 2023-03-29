import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import "./AddBannerModal.css";

export default function AddBannerModal(props) {
  const [file, setFile] = useState([]);
  const [chooseFile, setChooseFile] = useState("");
  const [filePath, setFilePath] = useState("");
  const [spin, setSpin] = useState(false);
  const [spin1, setSpin1] = useState(false);

  const token = useSelector(getUserToken);

  const selectBanner = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setChooseFile(e.target.value);
  };

  const validation = () => {
    if (file.length === 0) {
      Utility.eToast("Please choose a file!");
      return false;
    } else {
      return true;
    }
  };

  const uploadBanner = () => {
    if (validation()) {
      setSpin(true);
      var FormData = require("form-data");
      var data = new FormData();
      data.append("img", file);

      apicaller("single-upload", data, "POST", token, null)
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            const path = res.data.img;
            setFilePath(path);
            console.log("image uploaded successfully", res.data);
          }
        })
        .catch((err) => {
          console.log("error while adding data", err);
        }).finally(()=>setSpin(false));
    }
  };

  const saveBanner = () => {
    if (validation()) {
      setSpin1(true);
      const data = {
        url: filePath,
      };
      apicaller("add-advertisement", data, "POST", null, "application/json")
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log("data added successfully", res.data);
            Utility.sToast("Data added successfully");
            setChooseFile("");
          }
        })
        .catch((err) => {
          console.log("error while adding data", err);
        }).finally(()=>setSpin1(false));
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
        <Modal.Header closeButton id="abm1" />
        <Modal.Body>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Choose a file</Form.Label>
            <Form.Control
              type="file"
              size="sm"
              value={chooseFile}
              onChange={selectBanner}
            />
            <div id="abm3">
              <Button onClick={uploadBanner}>
                {spin ? <Spinner animation="border" variant="info" /> : "upload"}
              </Button>
            </div>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer id="abm2">
          <Button onClick={saveBanner}>
            {spin1 ? <Spinner animation="border" variant="info" /> : "Save"}
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
