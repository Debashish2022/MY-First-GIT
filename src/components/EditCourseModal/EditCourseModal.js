import React, { useEffect, useState } from "react";
import "./EditCourseModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, FloatingLabel, Form, Image, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUserToken } from "../../Redux/Slice/UserSlice";
import axios from "axios";
import { apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";

export default function EditCourseModal(props) {
  const [teacherList, setTeacherList] = useState([]);

  const [imagee, setImagee] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [courseName, setCourseName] = useState([]);
  const [courseType, setCourseType] = useState([]);
  const [courseDesc, setCourseDesc] = useState([]);
  const [teacherName, setTeacherName] = useState([]);
  const [price, setPrice] = useState([]);

  const [spinner, setSpinner] = useState(false);
  const [spinner1, setSpinner1] = useState(false);

  const selectImage = (e) => {
    console.log(e.target.files);
    setImageFile(e.target.files[0]);
    setImagee(e.target.value);
  };

  const token = useSelector(getUserToken);

  const uploadImage = () => {
    setSpinner(true);
    var FormData = require("form-data");
    var data = new FormData();
    data.append("img", imageFile);

    var config = {
      method: "post",
      url: "https://atharw.onrender.com/api/single-upload",
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response?.data));
        const path = response?.data?.img;
        setImagePath(path);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setSpinner(false));

    // var FormData = require("form-data");
    // var data = new FormData();
    // data.append("url", imageFile);

    // apicaller("single-upload", data, "post", token, null)
    //   .then((res) => {
    //     if (res.status === 201 || res.status === 200) {
    //       const path = res.data.url;
    //       setImagePath(path);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error while adding data", err);
    //   })
  };

  const validation = () => {
    if (imageFile.length === 0) {
      Utility.eToast("Image thumbnail required");
      return false;
    } else if (courseName.length === 0) {
      Utility.eToast("Course Name required");
      return false;
    } else if (courseType.length === 0) {
      Utility.eToast("course type required");
      return false;
    } else if (courseDesc.length === 0) {
      Utility.eToast("Description required");
      return false;
    } else if (teacherName.length === 0) {
      Utility.eToast("Teachers name required");
      return false;
    } else if (price.length === 0) {
      Utility.eToast("Price required");
      return false;
    } else {
      return true;
    }
  };

  const editCourse = () => {
    if (validation()) {
      setSpinner1(true);
      var data = JSON.stringify({
        _id: props?.item?._id,
        img: imagePath,
        name: courseName,
        course_type: courseType,
        description: courseDesc,
        createdBy: teacherName,
        upload_by: "SUPER_ADMIN",
        price: price,
      });

      var config = {
        method: "put",
        url: "https://atharw.onrender.com/api/course",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setImagee("");
          setCourseName("");
          setCourseType("");
          setCourseDesc("");
          setTeacherName("");
          setPrice("");
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => setSpinner1(false));
    }
  };

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

  // console.log("first",props?.item?._id)

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="ecmm6">
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
              <Form.Group controlId="formFile" className="mb-3">
                {/* <Form.Label>Choose File</Form.Label> */}
                <Form.Control
                  type="file"
                  className="ecmm3"
                  value={imagee}
                  onChange={selectImage}
                />
              </Form.Group>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}>
              <Button onClick={uploadImage} id="ecmm8">
                {spinner ? (
                  <Spinner animation="border" variant="warning" />
                ) : (
                  "Add"
                )}
              </Button>
            </Col>
          </Row>

          <div id="ecmm6">
            <Image
              src={props?.item?.img}
              alt=" preview course thumb"
              id="ecmm5"
            />
          </div>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Course name"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="course name"
              className="ecmm3"
              defaultValue={props?.item?.name}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </FloatingLabel>

          <Form.Select
            aria-label="Course type"
            className="ecmm1"
            onChange={(e) => setCourseType(e.target.value)}
          >
            <option value={props?.item?.course_type}>
              {props?.item?.course_type}
            </option>
            <option value="meanstack">Meanstack</option>
            <option value="mernstack">Mernstack</option>
            <option value="fullstack">Fullstack</option>
          </Form.Select>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="course description"
          >
            <Form.Control
              as="textarea"
              placeholder="course description"
              style={{ height: "100px", border: "2px solid #FC3973" }}
              defaultValue={props?.item?.description}
              onChange={(e) => setCourseDesc(e.target.value)}
            />
          </FloatingLabel>
          <div onClick={getTeacherList}>
            <Form.Select
              aria-label="Teacher name"
              className="ecmm2"
              onChange={(e) => setTeacherName(e.target.value)}
            >
              <option value={props?.item?.createdBy?.first_name}>
                {props?.item?.createdBy?.first_name}
              </option>
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
              className="ecmm4"
              defaultValue={props.item.price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer id="ecmm5">
          <Button id="ecmm4" onClick={editCourse}>
            {spinner1 ? (
              <Spinner animation="border" variant="warning" />
            ) : (
              "save"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
