import { useState } from "react";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./Privacymodal.css";
import { toast } from "react-toastify";
import { apicaller } from "../../utils/api";
export default function Privacymodal(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
  const validation = () => {
    if (title.length === 0) {
      eToast("Enter a Title");
      return false;
    } else if (description.length === 0) {
      eToast("Enter Your Description");
      return false;
    } else {
      return true;
    }
  };

  const Save = async () => {
    if (validation()) {
      const data = {
        title: title,
        description: description,
      };
      await apicaller("add-privacy", data, "POST", null).then((res) => {
        if (res?.status === 201 || res?.status === 200) {
          
          sToast("Data Saved Successfully");
          setTitle("");
          setDescription("");
          props.onHide();
        }
      });
      // .catch((error)=>{
      //   eToast("Sorry couldn't create");
      // })
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
        <Modal.Header closeButton id="mdl1" />
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer id="mdl2">
          <Button onClick={() => Save()}>Save</Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
