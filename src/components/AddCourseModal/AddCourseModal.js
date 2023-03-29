import React, { useState } from "react";
import "./AddCourseModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FloatingLabel, Form, Spinner } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import Utility from "../../utils/Utility";
import axios from "axios";

export default function AddCourseModal(props) {
  const [teacherList, setTeacherList] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [courseName, setCourseName] = useState([]);
  const [courseType, setCourseType] = useState([]);
  const [courseDesc, setCourseDesc] = useState([]);
  const [teacherName, setTeacherName] = useState([]);
  const [price, setPrice] = useState([]);

  const [spinner, setSpinner] = useState(false);

  // useEffect(() => {
  //   getTeacherList();
  // }, []);

  const getTeacherList = () => {
    apicaller("admin/teacher-list", null, "get", null)
      .then((res) => {
        // console.log("Teachers list :", res.data.teacher);
        setTeacherList(res?.data?.teacher);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const validation = () => {
    if (imageFile.length === 0) {
      Utility.eToast("Choose a image file!");
      return false;
    } else if (courseName.length === 0) {
      Utility.eToast("Enter a valid name!");
      return false;
    } else if (courseType.length === 0) {
      Utility.eToast("Choose a course type!");
      return false;
    } else if (courseDesc.length === 0) {
      Utility.eToast("Enter a valid course description!");
      return false;
    } else if (teacherName.length === 0) {
      Utility.eToast("Select one teacher name!");
      return false;
    } else if (price.length === 0) {
      Utility.eToast("Price is necessery!");
      return false;
    } else {
      return true;
    }
  };

  const token = useSelector(getUserToken);

  const addCourse = () => {
    if (validation()) {
      setSpinner(true);
      var FormData = require("form-data");
      var data = new FormData();
      data.append("img", imageFile);
      data.append("name", courseName);
      data.append("course_type", courseType);
      data.append("description", courseDesc);
      data.append("createdBy", teacherName);
      data.append("upload_by", "SUPER_ADMIN");
      data.append("price", price);

      // console.log("before submit data", data);

      var config = {
        method: "post",
        url: "https://atharw.onrender.com/api/course",
        headers: {
          authorization: `Bearer ${token}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify("after submit data is :", response.data));
          Utility.sToast("Course created successfully");
          setImageFile("");
          setCourseName("");
          setCourseType("");
          setCourseDesc("");
          setTeacherName("");
          setPrice("");
          props.onHide();
        })
        .catch(function (error) {
          Utility.eToast("Something unexpected happened!");
          console.log(error);
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
        <Modal.Header closeButton className="addmodal1">
          <Modal.Title id="contained-modal-title-vcenter">
            Add Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile" className="mb-3">
            {/* <Form.Label>Choose File</Form.Label> */}
            <Form.Control
              type="file"
              className="acm3"
              // value={imageFile}
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </Form.Group>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Course name"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="course name"
              className="acm3"
              value={courseName}
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
          </FloatingLabel>

          <Form.Select
            aria-label="Course type"
            className="acm1"
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
          >
            <option value="">Course type</option>
            <option value="mernstack">Mern stack</option>
            <option value="meanstack">Mean stack</option>
            <option value="fullstack">Full stack</option>
          </Form.Select>

          <FloatingLabel
            controlId="floatingTextarea2"
            label="course description"
          >
            <Form.Control
              as="textarea"
              placeholder="course description"
              style={{ height: "100px", border: "2px solid #FC3973" }}
              value={courseDesc}
              onChange={(e) => setCourseDesc(e.target.value)}
            />
          </FloatingLabel>
          <div onClick={getTeacherList}>
            <Form.Select
              aria-label="Teacher name"
              className="acm2"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            >
              <option value="">Teacher name</option>
              {teacherList?.map((item, i) => (
                <option key={i} value={item?._id}>
                  {item?.first_name}
                </option>
              ))}
            </Form.Select>
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="enter price"
              className="acm3"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer id="addmodal2">
          <Button id="addmodal3" onClick={addCourse}>
            {spinner ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              "Add Course"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
