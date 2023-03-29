import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { getTeacherId, getTeacherToken, setTeacherId } from "../../redux/Slice/userSlice";
import { API, apicaller } from "../../utils/api";
import Utility from "../../utils/Utility";
import Loader from "../Loader/Loader";

import "./AddNewCourseModal.css";
import {MdClose} from "react-icons/md";


export default function AddNewCourseModal(props) {
  const [empty, setEmpty] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseType, setCourseType] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState([]);
  const [price, setPrice] = useState("");
  const [postLoader, setPostLoader] = useState(false);
  const TeacherId = useSelector(getTeacherId);
  const Token = useSelector(getTeacherToken);

  const attachImage = (e) => {
    setCourseThumbnail(e.target.files[0]);
    setEmpty(e.target.value);
  };

  // console.log('image ', courseThumbnail);

  // const AddNewCourseFunction = async () => {
  // var data = {
  //   img: courseThumbnail,
  //   cname: courseName,
  //   ctype: courseType,
  //   cdes: courseDescription,
  //   teacherid: TeacherId,
  // };
  // console.log("data posting", data);
    // setPostLoader(true);

  //   var data = new FormData();
  //   data.append("img", courseThumbnail);
  //   data.append("estimaate_completion_time", "120");
  //   data.append("name", courseName);
  //   data.append("course_type", courseType);
  //   data.append("description", courseDescription);
  //   data.append("createdBy", TeacherId);

  //   await apicaller("course", data, 'post', Token)
  //   .then((res)=>{
  //     if(res.status === 200 || res.status === 204){
  //       console.log('New Course Added Successfully');
  //     }

  //   })
  //   .catch(()=>{console.log('Sorry! Could Not Upload')})
  //   .finally(()=>{setPostLoader(false);props.onHide()})
  // };

  function validation() {
    if(empty === ""){
      Utility.eToast('Please Select Course Thumbnail');
      return false;
    }else if(courseName.length === 0){
      Utility.eToast('Please Enter Course Name');
      return false;
    }else if(courseType.length === 0){
      Utility.eToast('Please Select Course Type');
      return false;
    }else if(price.length === 0){
      Utility.eToast('Please Enter Course Price');
      return false;
    }else if(courseDescription.length === 0){
      Utility.eToast('Please Enter Course Desciption');
      return false;
    }else{
      return true;
    }

  }

  const AddNewCourseFunction =  () => {
    if(validation()){
      setPostLoader(true);
      var data = new FormData();
    data.append("img",courseThumbnail);
    // data.append("estimaate_completion_time", "120");
    data.append("name", courseName);
    data.append("course_type", courseType);
    data.append("description", courseDescription);
    data.append("createdBy", TeacherId);
    data.append("price",price);

    var config = {
      method: "post",
      url: `${API}course`,
      headers: {
        authorization:
          "Bearer "+Token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if(response.status === 200 || response.status === 204 || response.status === 201){
                Utility.sToast('New Course Added Successfully');
                setEmpty("");
                setCourseThumbnail([]);
                setCourseName("");
                setCourseType("");
                setCourseDescription("");
                setTeacherId("");
                setPrice("");
      }})
       .catch(function (error) {
        Utility.eToast('Sorry Could Not Added Due to Internal Error');
      })
      .finally(()=>{setPostLoader(false);props.onHide()});
    }
  };

  function Hide(){
    setEmpty("");
    props.onHide();
  }

  return (
    <div>
      <Modal
        // {...props}
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Course
          </Modal.Title>
          <div onClick={Hide} id="addnewcourse3"><MdClose/></div>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select Course Thumbnail</Form.Label>
                  <Form.Control
                    type="file"
                    id="addnewcourse1"
                    value={empty}
                    onChange={attachImage}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Enter Course Name</Form.Label>
                <Form.Control
                  id="addnewcourse1"
                  className="mb-3"
                  type="text"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Select Course Type</Form.Label>
                  <Form.Select
                    id="addnewcourse1"
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                  >
                    <option>Select Course Type</option>
                    <option value="PhotoShop">PhotoShop</option>
                    <option value="React Js">React Js</option>
                    <option value="Redux">Redux</option>
                    <option value="React Native">React Native</option>
                    <option value="MERN">MERN</option>
                    <option value="Python">Python</option>

                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Enter Course Price</Form.Label>
                <Form.Control
                  id="addnewcourse1"
                  className="mb-3"
                  type="text"
                  placeholder="Course Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Col>
            </Row>
            
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Course Desciption</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <Button
                  onClick={AddNewCourseFunction}
                  variant="dark"
                  id="addnewcourse2"
                >
                  <>
                    {" "}
                    {postLoader ? (
                      <Loader animation="border" variant="light" size="sm" />
                    ) : (
                      "Add"
                    )}
                  </>
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
