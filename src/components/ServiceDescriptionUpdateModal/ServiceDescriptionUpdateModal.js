import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import "./ServiceDescriptionUpdateModal.css";

export default function ServiceDescriptionUpdateModal(props) {
  // console.log("iddddddddd", props.item)
  const [desc, setDesc] = useState(props?.item?.description);
  const [spinner, setSpinner] = useState(false);

  const validation = () => {
    if (desc.length === 0) {
      Utility.eToast("Description needed");
      return false;
    } else {
      return true;
    }
  };

  const saveDesc = () => {
    if (validation()) {
        setSpinner(true);
      const data = {
        description: desc,
      };

      apicaller(
        `update-service-para/${props?.item?._id}`,
        data,
        "put",
        null,
        "application/json"
      )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            console.log("data added successfully", res.data);
            Utility.sToast("Data added successfully");
            setDesc("");
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
        <Modal.Header closeButton style={{ borderBottom: "none" }} />
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none" }}>
          <Button onClick={saveDesc}>
            { spinner ? (<Spinner animation="border" variant="danger" />) : "Update" }
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
