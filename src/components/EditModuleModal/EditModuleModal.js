import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import Utility from "../../utils/Utility";
import "./EditModuleModal.css";

export default function EditModuleModal(props) {
  // console.log("edit module modal", props.id);
  // console.log("edit module modal", props.index);
  // console.log("edit module modal", props.title);

  const [index, setIndex] = useState([]);
  const [title, setTitle] = useState([]);

  const token = useSelector(getUserToken);

  const updateSection = () => {
    let data = JSON.stringify({
      // _id: props.id,
      // serial : index,
      title: title,
    });

    let config = {
      method: "put",
      url: `https://atharw.onrender.com/api/update-section/${props.id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        Utility.sToast("Course section updated successfully");
        props.onHide();
      })
      .catch((error) => {
        console.log(error);
        Utility.eToast("Can't update right now, pleaswe try after sometime!");
      });
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton id="emm1" />
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Enter index no"
            className="emm3"
            defaultValue={props.index}
            onChange={(e) => setIndex(e.target.value)}
            disabled
          />
          <Form.Control
            type="text"
            placeholder="Enter module name"
            className="emm3"
            defaultValue={props.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer id="emm2">
          <Button onClick={updateSection}>save</Button>
          <Button onClick={props.onHide}>cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
